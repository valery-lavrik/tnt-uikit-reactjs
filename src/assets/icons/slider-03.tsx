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
                d="M10 3C10.5523 3 11 3.44772 11 4V8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H9V4C9 3.44772 9.44772 3 10 3ZM13 6C13 5.44772 13.4477 5 14 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H14C13.4477 7 13 6.55228 13 6ZM16 9C16.5523 9 17 9.44772 17 10V14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14V13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H15V10C15 9.44772 15.4477 9 16 9ZM19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12ZM6 15C6.55228 15 7 15.4477 7 16V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H5V16C5 15.4477 5.44772 15 6 15ZM9 18C9 17.4477 9.44772 17 10 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H10C9.44772 19 9 18.5523 9 18Z"
                fill="currentColor"
            />
        </svg>
    );
}
