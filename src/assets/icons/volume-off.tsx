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
                d="M3.63 3.6299C3.24 4.0199 3.24 4.6499 3.63 5.0399L7.29 8.6999L7 8.9999H4C3.45 8.9999 3 9.4499 3 9.9999V13.9999C3 14.5499 3.45 14.9999 4 14.9999H7L10.29 18.2899C10.92 18.9199 12 18.4699 12 17.5799V13.4099L16.18 17.5899C15.69 17.9599 15.16 18.2699 14.58 18.4999C14.22 18.6499 14 19.0299 14 19.4199C14 20.1399 14.73 20.5999 15.39 20.3299C16.19 19.9999 16.94 19.5599 17.61 19.0199L18.95 20.3599C19.34 20.7499 19.97 20.7499 20.36 20.3599C20.75 19.9699 20.75 19.3399 20.36 18.9499L5.05 3.6299C4.66 3.2399 4.03 3.2399 3.63 3.6299ZM19 11.9999C19 12.8199 18.85 13.6099 18.59 14.3399L20.12 15.8699C20.68 14.6999 21 13.3899 21 11.9999C21 8.1699 18.6 4.8899 15.22 3.5999C14.63 3.3699 14 3.8299 14 4.4599V4.6499C14 5.0299 14.25 5.3599 14.61 5.4999C17.18 6.5399 19 9.0599 19 11.9999ZM10.29 5.7099L10.12 5.8799L12 7.7599V6.4099C12 5.5199 10.92 5.0799 10.29 5.7099ZM16.5 11.9999C16.5 10.2299 15.48 8.7099 14 7.9699V9.7599L16.48 12.2399C16.49 12.1599 16.5 12.0799 16.5 11.9999Z"
                fill="#22242A"
            />
        </svg>
    );
}
