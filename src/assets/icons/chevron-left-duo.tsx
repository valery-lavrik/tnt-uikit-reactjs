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
                d="M11.7071 7.29289C12.0976 7.68342 12.0976 8.31658 11.7071 8.70711L8.41421 12L11.7071 15.2929C12.0976 15.6834 12.0976 16.3166 11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929L10.2929 7.29289C10.6834 6.90237 11.3166 6.90237 11.7071 7.29289ZM17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711L14.4142 12L17.7071 15.2929C18.0976 15.6834 18.0976 16.3166 17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071L12.2929 12.7071C11.9024 12.3166 11.9024 11.6834 12.2929 11.2929L16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
