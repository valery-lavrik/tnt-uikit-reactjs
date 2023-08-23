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
                opacity="0.4"
                d="M12.0001 22.0002C6.48512 22.0002 2.00012 17.5142 2.00012 12.0002C2.00012 6.48621 6.48512 2.00021 12.0001 2.00021C17.5141 2.00021 22.0001 6.48621 22.0001 12.0002C22.0001 17.5142 17.5141 22.0002 12.0001 22.0002Z"
                fill="#37383C"
            />
            <path
                d="M13.4425 16.2209C13.2515 16.2209 13.0595 16.1479 12.9135 16.0019L9.42652 12.5319C9.28552 12.3909 9.20652 12.1999 9.20652 11.9999C9.20652 11.8009 9.28552 11.6099 9.42652 11.4689L12.9135 7.99689C13.2065 7.70489 13.6805 7.70489 13.9735 7.99889C14.2655 8.29289 14.2645 8.76789 13.9715 9.05989L11.0185 11.9999L13.9715 14.9399C14.2645 15.2319 14.2655 15.7059 13.9735 15.9999C13.8275 16.1479 13.6345 16.2209 13.4425 16.2209Z"
                fill="#37383C"
            />
        </svg>
    );
}
