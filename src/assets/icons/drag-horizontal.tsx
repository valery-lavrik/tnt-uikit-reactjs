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
                d="M4 9C4 7.89543 4.89543 7 6 7C7.10457 7 8 7.89543 8 9C8 10.1046 7.10457 11 6 11C4.89543 11 4 10.1046 4 9ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM16 9C16 7.89543 16.8954 7 18 7C19.1046 7 20 7.89543 20 9C20 10.1046 19.1046 11 18 11C16.8954 11 16 10.1046 16 9ZM4 15C4 13.8954 4.89543 13 6 13C7.10457 13 8 13.8954 8 15C8 16.1046 7.10457 17 6 17C4.89543 17 4 16.1046 4 15ZM10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15ZM16 15C16 13.8954 16.8954 13 18 13C19.1046 13 20 13.8954 20 15C20 16.1046 19.1046 17 18 17C16.8954 17 16 16.1046 16 15Z"
                fill="currentColor"
            />
        </svg>
    );
}
