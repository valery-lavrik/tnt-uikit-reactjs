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
                d="M7 6C7 4.89543 7.89543 4 9 4C10.1046 4 11 4.89543 11 6C11 7.10457 10.1046 8 9 8C7.89543 8 7 7.10457 7 6ZM13 6C13 4.89543 13.8954 4 15 4C16.1046 4 17 4.89543 17 6C17 7.10457 16.1046 8 15 8C13.8954 8 13 7.10457 13 6ZM7 12C7 10.8954 7.89543 10 9 10C10.1046 10 11 10.8954 11 12C11 13.1046 10.1046 14 9 14C7.89543 14 7 13.1046 7 12ZM13 12C13 10.8954 13.8954 10 15 10C16.1046 10 17 10.8954 17 12C17 13.1046 16.1046 14 15 14C13.8954 14 13 13.1046 13 12ZM7 18C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18C11 19.1046 10.1046 20 9 20C7.89543 20 7 19.1046 7 18ZM13 18C13 16.8954 13.8954 16 15 16C16.1046 16 17 16.8954 17 18C17 19.1046 16.1046 20 15 20C13.8954 20 13 19.1046 13 18Z"
                fill="currentColor"
            />
        </svg>
    );
}
