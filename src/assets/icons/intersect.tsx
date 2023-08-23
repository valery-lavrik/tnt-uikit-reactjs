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
            <g clipPath="url(#clip0_96_168)">
                <path
                    d="M5.75 3.875H4.5C4.15469 3.875 3.875 4.15469 3.875 4.5V5.75H2V4.5C2 3.11914 3.11914 2 4.5 2H5.75V3.875ZM7 2H10.75V3.875H7V2ZM2 7H3.875V10.75H2V7ZM15.75 8.25V13.25C15.75 14.6289 14.6289 15.75 13.25 15.75H8.25V10.75C8.25 9.37109 9.37109 8.25 10.75 8.25H15.75ZM10.75 10.125C10.4062 10.125 10.125 10.4062 10.125 10.75V13.875H13.25C13.5938 13.875 13.875 13.5938 13.875 13.25V10.125H10.75ZM10.125 18.25V19.5C10.125 19.8438 10.4062 20.125 10.75 20.125H12V22H10.75C9.37109 22 8.25 20.8789 8.25 19.5V18.25H10.125ZM15.75 4.5V5.75H13.875V4.5C13.875 4.15469 13.5938 3.875 13.25 3.875H12V2H13.25C14.6289 2 15.75 3.11914 15.75 4.5ZM18.25 8.25H19.5C20.8789 8.25 22 9.37109 22 10.75V12H20.125V10.75C20.125 10.4062 19.8438 10.125 19.5 10.125H18.25V8.25ZM5.75 13.875V15.75H4.5C3.11914 15.75 2 14.6289 2 13.25V12H3.875V13.25C3.875 13.5938 4.15469 13.875 4.5 13.875H5.75ZM17 20.125V22H13.25V20.125H17ZM19.5 22H18.25V20.125H19.5C19.8438 20.125 20.125 19.8438 20.125 19.5V18.25H22V19.5C22 20.8789 20.8789 22 19.5 22ZM22 17H20.125V13.25H22V17Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_96_168">
                    <rect width="20" height="20" fill="white" transform="translate(2 2)" />
                </clipPath>
            </defs>
        </svg>
    );
}
