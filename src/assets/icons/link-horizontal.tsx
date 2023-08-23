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
                d="M2 12C2 9.23858 4.23858 7 7 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H7C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15H9C9.55228 15 10 15.4477 10 16C10 16.5523 9.55228 17 9 17H7C4.23858 17 2 14.7614 2 12ZM14 8C14 7.44772 14.4477 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H15C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15H17C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9H15C14.4477 9 14 8.55228 14 8ZM7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z"
                fill="currentColor"
            />
        </svg>
    );
}
