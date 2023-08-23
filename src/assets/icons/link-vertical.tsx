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
                d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V7ZM12 7C12.5523 7 13 7.44772 13 8L13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16L11 8C11 7.44772 11.4477 7 12 7ZM8 14C8.55228 14 9 14.4477 9 15V17C9 18.6569 10.3431 20 12 20C13.6569 20 15 18.6569 15 17V15C15 14.4477 15.4477 14 16 14C16.5523 14 17 14.4477 17 15V17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17V15C7 14.4477 7.44772 14 8 14Z"
                fill="currentColor"
            />
        </svg>
    );
}
