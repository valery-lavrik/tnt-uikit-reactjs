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
                d="M7.70711 4.29289C8.09763 4.68342 8.09763 5.31658 7.70711 5.70711L5.41421 8H16C19.3137 8 22 10.6863 22 14C22 17.3137 19.3137 20 16 20H11C10.4477 20 10 19.5523 10 19C10 18.4477 10.4477 18 11 18H16C18.2091 18 20 16.2091 20 14C20 11.7909 18.2091 10 16 10H5.41421L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L2.29289 9.70711C1.90237 9.31658 1.90237 8.68342 2.29289 8.29289L6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
