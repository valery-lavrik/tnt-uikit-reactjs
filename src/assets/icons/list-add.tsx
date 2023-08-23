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
                d="M2 7C2 6.44772 2.44772 6 3 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H3C2.44772 8 2 7.55228 2 7ZM2 12C2 11.4477 2.44772 11 3 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H3C2.44772 13 2 12.5523 2 12ZM18 12C18.5523 12 19 12.4477 19 13V15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H19V19C19 19.5523 18.5523 20 18 20C17.4477 20 17 19.5523 17 19V17H15C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15H17V13C17 12.4477 17.4477 12 18 12ZM2 17C2 16.4477 2.44772 16 3 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H3C2.44772 18 2 17.5523 2 17Z"
                fill="currentColor"
            />
        </svg>
    );
}
