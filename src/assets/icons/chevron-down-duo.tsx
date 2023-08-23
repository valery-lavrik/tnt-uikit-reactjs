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
                d="M7.29289 6.29289C7.68342 5.90237 8.31658 5.90237 8.70711 6.29289L12 9.58579L15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711L12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071L7.29289 7.70711C6.90237 7.31658 6.90237 6.68342 7.29289 6.29289ZM7.29289 12.2929C7.68342 11.9024 8.31658 11.9024 8.70711 12.2929L12 15.5858L15.2929 12.2929C15.6834 11.9024 16.3166 11.9024 16.7071 12.2929C17.0976 12.6834 17.0976 13.3166 16.7071 13.7071L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L7.29289 13.7071C6.90237 13.3166 6.90237 12.6834 7.29289 12.2929Z"
                fill="currentColor"
            />
        </svg>
    );
}
