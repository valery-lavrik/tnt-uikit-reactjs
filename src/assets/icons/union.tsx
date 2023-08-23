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
            <g clipPath="url(#clip0_96_134)">
                <path
                    d="M4.5 15.75C3.11914 15.75 2 14.6289 2 13.25V4.5C2 3.11914 3.11914 2 4.5 2H13.25C14.6289 2 15.75 3.11914 15.75 4.5V8.25H19.5C20.8789 8.25 22 9.37109 22 10.75V19.5C22 20.8789 20.8789 22 19.5 22H10.75C9.37109 22 8.25 20.8789 8.25 19.5V15.75H4.5ZM10.125 13.875V19.5C10.125 19.8438 10.4062 20.125 10.75 20.125H19.5C19.8438 20.125 20.125 19.8438 20.125 19.5V10.75C20.125 10.4062 19.8438 10.125 19.5 10.125H13.875V4.5C13.875 4.15469 13.5938 3.875 13.25 3.875H4.5C4.15469 3.875 3.875 4.15469 3.875 4.5V13.25C3.875 13.5938 4.15469 13.875 4.5 13.875H10.125Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_96_134">
                    <rect width="20" height="20" fill="white" transform="translate(2 2)" />
                </clipPath>
            </defs>
        </svg>
    );
}
