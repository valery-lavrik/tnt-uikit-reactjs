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
                d="M2 9C2 7.34315 3.34315 6 5 6H19C20.6569 6 22 7.34315 22 9V10C22 10.5523 21.5523 11 21 11C20.4477 11 20 10.5523 20 10V9C20 8.44772 19.5523 8 19 8H5C4.44772 8 4 8.44772 4 9V11C4 11.5523 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14H5C3.34315 14 2 12.6569 2 11V9ZM13 16C13 15.4477 13.4477 15 14 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H14C13.4477 17 13 16.5523 13 16Z"
                fill="currentColor"
            />
        </svg>
    );
}
