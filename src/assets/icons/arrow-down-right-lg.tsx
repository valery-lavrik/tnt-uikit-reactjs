import React from 'react';
export default function Icon({
    className = '',
    style = {},
    onClick,
}: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: (...args: any) => void;
}) {
    return (
        <svg
            onClick={onClick}
            className={className}
            style={style}
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.92864 4.929C5.31916 4.53848 5.95232 4.53848 6.34285 4.929L17.3635 15.9497L17.3633 11.293C17.3633 10.7407 17.8109 10.293 18.3632 10.293C18.9155 10.2929 19.3633 10.7406 19.3633 11.2929L19.3637 18.364C19.3637 18.6292 19.2583 18.8836 19.0708 19.0711C18.8833 19.2587 18.6289 19.364 18.3637 19.364L11.293 19.364C10.7407 19.364 10.293 18.9163 10.293 18.364C10.293 17.8117 10.7407 17.364 11.293 17.364L15.9494 17.364L4.92864 6.34322C4.53811 5.95269 4.53811 5.31953 4.92864 4.929Z"
                fill="currentColor"
            />
        </svg>
    );
}
