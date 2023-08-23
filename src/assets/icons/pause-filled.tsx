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
                d="M7.5 3C6.67157 3 6 3.67157 6 4.5V19.5C6 20.3284 6.67157 21 7.5 21C8.32843 21 9 20.3284 9 19.5V4.5C9 3.67157 8.32843 3 7.5 3ZM16.5 3C15.6716 3 15 3.67157 15 4.5V19.5C15 20.3284 15.6716 21 16.5 21C17.3284 21 18 20.3284 18 19.5V4.5C18 3.67157 17.3284 3 16.5 3Z"
                fill="#22242A"
            />
        </svg>
    );
}
