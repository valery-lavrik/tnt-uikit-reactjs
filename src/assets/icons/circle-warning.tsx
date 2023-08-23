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
                d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 7.44995C12.5523 7.44995 13 7.89767 13 8.44995V12.45C13 13.0022 12.5523 13.45 12 13.45C11.4477 13.45 11 13.0022 11 12.45V8.44995C11 7.89767 11.4477 7.44995 12 7.44995ZM10.9502 15.45C10.9502 14.8977 11.3979 14.45 11.9502 14.45H12.0498C12.6021 14.45 13.0498 14.8977 13.0498 15.45V15.55C13.0498 15.8152 12.9444 16.0696 12.7568 16.2571C12.5692 16.4447 12.3148 16.55 12.0496 16.55L11.9499 16.5499C11.3978 16.5498 10.9502 16.1021 10.9502 15.5499V15.45Z"
                fill="currentColor"
            />
        </svg>
    );
}
