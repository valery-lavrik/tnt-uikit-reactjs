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
                d="M2 10C2 6.68629 4.68629 4 8 4H13C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H8C5.79086 6 4 7.79086 4 10C4 12.2091 5.79086 14 8 14H18.5858L16.2929 11.7071C15.9024 11.3166 15.9024 10.6834 16.2929 10.2929C16.6834 9.90237 17.3166 9.90237 17.7071 10.2929L21.7071 14.2929C22.0976 14.6834 22.0976 15.3166 21.7071 15.7071L17.7071 19.7071C17.3166 20.0976 16.6834 20.0976 16.2929 19.7071C15.9024 19.3166 15.9024 18.6834 16.2929 18.2929L18.5858 16H8C4.68629 16 2 13.3137 2 10Z"
                fill="currentColor"
            />
        </svg>
    );
}
