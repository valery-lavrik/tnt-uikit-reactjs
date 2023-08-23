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
                d="M11.3408 20.2891L11.3408 11.8111C11.3408 11.4189 11.6591 11.1006 12.0513 11.1006C12.4435 11.1006 12.7618 11.4189 12.7618 11.8111L12.7618 20.2891C12.7618 20.6813 12.4435 20.9996 12.0513 20.9996C11.6591 20.9996 11.3408 20.6813 11.3408 20.2891Z"
                fill="#37383C"
            />
            <mask id="mask0_1_10216" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="6" y="3" width="12" height="10">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4998 12.5215L6.60336 12.5215L6.60336 3.58199L17.4998 3.58199V12.5215Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_1_10216)">
                <path
                    d="M6.60307 11.8109C6.60307 11.6783 6.64002 11.5476 6.71202 11.432L11.4498 3.91366C11.5805 3.70714 11.807 3.58114 12.0514 3.58114C12.2958 3.58114 12.5222 3.70714 12.653 3.91366L17.3908 11.432C17.5281 11.6508 17.5367 11.9275 17.4107 12.1539C17.2856 12.3812 17.0478 12.5215 16.7892 12.5215L7.3136 12.5215C7.05497 12.5215 6.81718 12.3812 6.69213 12.1539C6.63244 12.0468 6.60307 11.9284 6.60307 11.8109Z"
                    fill="#37383C"
                />
            </g>
        </svg>
    );
}
