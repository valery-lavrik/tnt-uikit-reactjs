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
                d="M16.2929 4.29289C16.6834 3.90237 17.3166 3.90237 17.7071 4.29289L21.7071 8.29289C22.0976 8.68342 22.0976 9.31658 21.7071 9.70711L17.7071 13.7071C17.3166 14.0976 16.6834 14.0976 16.2929 13.7071C15.9024 13.3166 15.9024 12.6834 16.2929 12.2929L18.5858 10H8C5.79086 10 4 11.7909 4 14C4 16.2091 5.79086 18 8 18H13C13.5523 18 14 18.4477 14 19C14 19.5523 13.5523 20 13 20H8C4.68629 20 2 17.3137 2 14C2 10.6863 4.68629 8 8 8H18.5858L16.2929 5.70711C15.9024 5.31658 15.9024 4.68342 16.2929 4.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
