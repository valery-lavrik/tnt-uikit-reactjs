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
                d="M7 5C7 4.44772 7.44772 4 8 4H12.5C14.9853 4 17 6.01472 17 8.5C17 9.70431 16.5269 10.7981 15.7564 11.6058C17.0979 12.3847 18 13.837 18 15.5C18 17.9853 15.9853 20 13.5 20H8C7.44772 20 7 19.5523 7 19V5ZM9 13H13.5C14.8807 13 16 14.1193 16 15.5C16 16.8807 14.8807 18 13.5 18H9V13ZM9 11V6H12.5C13.8807 6 15 7.11929 15 8.5C15 9.88071 13.8807 11 12.5 11H9Z"
                fill="currentColor"
            />
        </svg>
    );
}
