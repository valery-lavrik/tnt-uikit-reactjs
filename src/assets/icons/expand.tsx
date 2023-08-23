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
                d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10V6H14C13.4477 6 13 5.55228 13 5ZM5 13C5.55228 13 6 13.4477 6 14V18H10C10.5523 18 11 18.4477 11 19C11 19.5523 10.5523 20 10 20H5C4.44772 20 4 19.5523 4 19V14C4 13.4477 4.44772 13 5 13Z"
                fill="currentColor"
            />
        </svg>
    );
}
