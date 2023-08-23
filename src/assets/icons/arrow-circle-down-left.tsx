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
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L11.4142 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H9C8.44772 16 8 15.5523 8 15V11C8 10.4477 8.44772 10 9 10C9.55228 10 10 10.4477 10 11V12.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
