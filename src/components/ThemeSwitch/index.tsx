import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../utils/cookie';
import Switcher from '../Switcher';

const CookieThemeConst = 'themeCookie';

const ThemeList = ['light-theme', 'dark-theme'];
const DefTheme = ThemeList[0];
(() => document.documentElement.setAttribute('data-theme', getCookie(CookieThemeConst, DefTheme)))();

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(getCookie(CookieThemeConst, DefTheme));
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
