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
                d="M12 4C9.23858 4 7 6.23858 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V9C17 6.23858 14.7614 4 12 4ZM5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9ZM12 6C12.5523 6 13 6.44772 13 7V10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10V7C11 6.44772 11.4477 6 12 6Z"
                fill="currentColor"
            />
        </svg>
    );
}
