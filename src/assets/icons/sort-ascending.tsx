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
                d="M3 7C3 6.44772 3.44772 6 4 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H4C3.44772 8 3 7.55228 3 7ZM18 10C18.5523 10 19 10.4477 19 11V16.5858L20.2929 15.2929C20.6834 14.9024 21.3166 14.9024 21.7071 15.2929C22.0976 15.6834 22.0976 16.3166 21.7071 16.7071L18.7071 19.7071C18.3166 20.0976 17.6834 20.0976 17.2929 19.7071L14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929C14.6834 14.9024 15.3166 14.9024 15.7071 15.2929L17 16.5858V11C17 10.4477 17.4477 10 18 10ZM3 12C3 11.4477 3.44772 11 4 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H4C3.44772 13 3 12.5523 3 12ZM3 17C3 16.4477 3.44772 16 4 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H4C3.44772 18 3 17.5523 3 17Z"
                fill="currentColor"
            />
        </svg>
    );
}
