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
                d="M3 7C3 6.44772 3.44772 6 4 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H4C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H4C3.44772 13 3 12.5523 3 12ZM20.7071 13.2929C21.0976 13.6834 21.0976 14.3166 20.7071 14.7071L16.7071 18.7071C16.3166 19.0976 15.6834 19.0976 15.2929 18.7071L13.2929 16.7071C12.9024 16.3166 12.9024 15.6834 13.2929 15.2929C13.6834 14.9024 14.3166 14.9024 14.7071 15.2929L16 16.5858L19.2929 13.2929C19.6834 12.9024 20.3166 12.9024 20.7071 13.2929ZM3 17C3 16.4477 3.44772 16 4 16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H4C3.44772 18 3 17.5523 3 17Z"
                fill="currentColor"
            />
        </svg>
    );
}
