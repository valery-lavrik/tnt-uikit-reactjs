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
                d="M4 7C4 6.44772 4.44772 6 5 6L13 6C13.5523 6 14 6.44772 14 7C14 7.55229 13.5523 8 13 8L5 8C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM13 18L5 18C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16L13 16C13.5523 16 14 16.4477 14 17C14 17.5523 13.5523 18 13 18Z"
                fill="currentColor"
            />
        </svg>
    );
}
