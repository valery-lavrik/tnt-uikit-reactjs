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
                d="M7 4C7.55228 4 8 4.44772 8 5V7L10 7C10.5523 7 11 7.44772 11 8C11 8.55229 10.5523 9 10 9H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7L6 7V5C6 4.44772 6.44772 4 7 4ZM12 11C12 10.4477 12.4477 10 13 10H19C20.6569 10 22 11.3431 22 13L22 15C22 16.6569 20.6569 18 19 18L5 18C3.34315 18 2 16.6569 2 15V14C2 13.4477 2.44772 13 3 13C3.55228 13 4 13.4477 4 14V15C4 15.5523 4.44772 16 5 16L19 16C19.5523 16 20 15.5523 20 15L20 13C20 12.4477 19.5523 12 19 12H13C12.4477 12 12 11.5523 12 11Z"
                fill="currentColor"
            />
        </svg>
    );
}
