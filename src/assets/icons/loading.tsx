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
                d="M16 10C16 8.89543 16.8954 8 18 8C19.1046 8 20 8.89543 20 10C20 11.1046 19.1046 12 18 12C16.8954 12 16 11.1046 16 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM4 14C4 12.8954 4.89543 12 6 12C7.10457 12 8 12.8954 8 14C8 15.1046 7.10457 16 6 16C4.89543 16 4 15.1046 4 14Z"
                fill="currentColor"
            />
        </svg>
    );
}
