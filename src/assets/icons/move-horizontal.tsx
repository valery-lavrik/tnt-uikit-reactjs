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
                d="M6.70711 8.29289C7.09763 8.68342 7.09763 9.31658 6.70711 9.70711L5.41421 11H18.5858L17.2929 9.70711C16.9024 9.31658 16.9024 8.68342 17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071C16.9024 15.3166 16.9024 14.6834 17.2929 14.2929L18.5858 13H5.41421L6.70711 14.2929C7.09763 14.6834 7.09763 15.3166 6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
