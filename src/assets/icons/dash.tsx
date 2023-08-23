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
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 8C1 7.44772 1.44772 7 2 7H6C6.55228 7 7 7.44772 7 8C7 8.55228 6.55228 9 6 9H2C1.44772 9 1 8.55228 1 8Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 8C9 7.44772 9.44771 7 10 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H10C9.44771 9 9 8.55228 9 8Z"
                fill="currentColor"
            />
        </svg>
    );
}
