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
                d="M11.9968 15.1746C7.68376 15.1746 3.99976 15.8546 3.99976 18.5746C3.99976 21.2956 7.66076 21.9996 11.9968 21.9996C16.3098 21.9996 19.9938 21.3206 19.9938 18.5996C19.9938 15.8786 16.3338 15.1746 11.9968 15.1746Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M11.9967 12.5837C14.9347 12.5837 17.2887 10.2287 17.2887 7.29169C17.2887 4.35469 14.9347 1.99969 11.9967 1.99969C9.05971 1.99969 6.70471 4.35469 6.70471 7.29169C6.70471 10.2287 9.05971 12.5837 11.9967 12.5837Z"
                fill="#37383C"
            />
        </svg>
    );
}
