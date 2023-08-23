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
            <path d="M14 10.5V13.5H11V12V10.5H14Z" fill="currentColor" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H19V7H4C3.44772 7 3 6.55228 3 6ZM10 10.5C10 9.94772 10.4477 9.5 11 9.5H14C14.5523 9.5 15 9.94772 15 10.5V13.5C15 14.0523 14.5523 14.5 14 14.5H11C10.4477 14.5 10 14.0523 10 13.5V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H10V10.5ZM12 12.5V11.5H13V12.5H12Z"
                fill="currentColor"
            />
        </svg>
    );
}
