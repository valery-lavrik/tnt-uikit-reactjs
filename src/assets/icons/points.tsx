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
                d="M1 8C1 7.44772 1.44772 7 2 7H3C3.55228 7 4 7.44772 4 8C4 8.55228 3.55228 9 3 9H2C1.44772 9 1 8.55228 1 8Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 8C6.5 7.44772 6.94772 7 7.5 7H8.5C9.05228 7 9.5 7.44772 9.5 8C9.5 8.55228 9.05228 9 8.5 9H7.5C6.94772 9 6.5 8.55228 6.5 8Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 8C12 7.44772 12.4477 7 13 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H13C12.4477 9 12 8.55228 12 8Z"
                fill="currentColor"
            />
        </svg>
    );
}
