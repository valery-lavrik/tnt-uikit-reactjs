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
                d="M11.9999 1.99979C17.5149 1.99979 21.9999 6.48579 21.9999 11.9998C21.9999 17.5138 17.5149 21.9998 11.9999 21.9998C6.48588 21.9998 1.99988 17.5138 1.99988 11.9998C1.99988 6.48579 6.48588 1.99979 11.9999 1.99979Z"
                fill="#37383C"
            />
            <path
                d="M10.5575 7.77911C10.7485 7.77911 10.9405 7.85211 11.0865 7.99811L14.5735 11.4681C14.7145 11.6091 14.7935 11.8001 14.7935 12.0001C14.7935 12.1991 14.7145 12.3901 14.5735 12.5311L11.0865 16.0031C10.7935 16.2951 10.3195 16.2951 10.0265 16.0011C9.73448 15.7071 9.73548 15.2321 10.0285 14.9401L12.9815 12.0001L10.0285 9.06011C9.73548 8.76811 9.73448 8.29411 10.0265 8.00011C10.1725 7.85211 10.3655 7.77911 10.5575 7.77911Z"
                fill="#37383C"
            />
        </svg>
    );
}
