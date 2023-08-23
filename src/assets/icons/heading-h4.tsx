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
                d="M3 4C3.55228 4 4 4.44772 4 5V11H10V5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5V19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19V13H4V19C4 19.5523 3.55228 20 3 20C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4ZM18.2983 8.04552C18.8254 8.21025 19.1192 8.77113 18.9545 9.29827L16.8602 16H19V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V16C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18V19C21 19.5523 20.5523 20 20 20C19.4477 20 19 19.5523 19 19V18H15.5C15.1819 18 14.8827 17.8486 14.6943 17.5923C14.5059 17.336 14.4506 17.0054 14.5455 16.7017L17.0455 8.70173C17.2103 8.17458 17.7711 7.88079 18.2983 8.04552Z"
                fill="currentColor"
            />
        </svg>
    );
}
