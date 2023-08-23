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
                d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L9.41421 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H7C6.44772 18 6 17.5523 6 17V9C6 8.44772 6.44772 8 7 8C7.55228 8 8 8.44772 8 9V14.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
