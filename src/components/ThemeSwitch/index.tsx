import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../utils/cookie';
import Switcher from '../Switcher';

const CookieThemeConst = 'themeCookie';

const ThemeList = ['light-theme', 'dark-theme'] as const;
type ThemeType = (typeof ThemeList)[number];

const DefTheme: ThemeType = ThemeList[0];
(() => document.documentElement.setAttribute('data-theme', useTheme()))();

const ThemeSwitch = () => {
    const [theme, setTheme] = useState<ThemeType>(getCookie(CookieThemeConst, DefTheme) as ThemeType);
    const isDark = theme !== DefTheme;

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        setCookie(CookieThemeConst, theme);
    }, [theme]);

    const onThemeChange = () => {
        setTheme(theme === DefTheme ? ThemeList[1] : DefTheme);
    };

    return <Switcher label={isDark ? 'Темная тема' : 'Светлая тема'} checked={isDark} onChange={onThemeChange} />;
};

export default ThemeSwitch;

// Хук для получения текущей темы
export function useTheme(): ThemeType {
    return getCookie(CookieThemeConst, DefTheme) as ThemeType;
}
