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
                d="M11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071C15.3166 14.0976 14.6834 14.0976 14.2929 13.7071L12 11.4142L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L11.2929 9.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
