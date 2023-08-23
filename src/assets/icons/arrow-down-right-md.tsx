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
                d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L16 14.5858V9C16 8.44772 16.4477 8 17 8C17.5523 8 18 8.44772 18 9V17C18 17.5523 17.5523 18 17 18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16H14.5858L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
