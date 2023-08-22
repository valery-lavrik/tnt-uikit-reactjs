import React from 'react';
import './index.scss';

export interface BadgeProps {
    children: React.ReactNode;
    status?: 'success' | 'error' | 'await' | 'work' | 'dark' | 'none';
    large?: boolean;
    style?: React.CSSProperties;
}

const Badge = ({
    children,
    large = false,
    status = 'none',
    style = {}
}: BadgeProps) => {
    return (
        <span className={`badge badge--${status} ${large ? 'badge--large' : ''}`} style={style}>
            {children}
        </span>
    );
};

export default Badge;
