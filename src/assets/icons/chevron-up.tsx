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
                d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L19.7071 15.2929C20.0976 15.6834 20.0976 16.3166 19.7071 16.7071C19.3166 17.0976 18.6834 17.0976 18.2929 16.7071L12 10.4142L5.70711 16.7071C5.31658 17.0976 4.68342 17.0976 4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L11.2929 8.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
