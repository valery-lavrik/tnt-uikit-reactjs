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
                d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.9502 8C10.9502 7.44772 11.3979 7 11.9502 7H12.0498C12.6021 7 13.0498 7.44772 13.0498 8V8.1C13.0498 8.36526 12.9444 8.61965 12.7568 8.80719C12.5692 8.99474 12.3148 9.10006 12.0496 9.1L11.95 9.09998C11.3978 9.09984 10.9502 8.65216 10.9502 8.09998V8ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z"
                fill="currentColor"
            />
        </svg>
    );
}
