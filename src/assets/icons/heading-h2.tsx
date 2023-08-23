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
                d="M3 4C3.55228 4 4 4.44772 4 5V11H10V5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5V19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19V13H4V19C4 19.5523 3.55228 20 3 20C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4ZM18 10C16.8954 10 16 10.8954 16 12V12.5C16 13.0523 15.5523 13.5 15 13.5C14.4477 13.5 14 13.0523 14 12.5V12C14 9.79086 15.7909 8 18 8H18.1716C20.286 8 21.9998 9.71414 21.9998 11.8284C21.9998 12.8436 21.5968 13.8174 20.8787 14.5355L17.4142 18L21 18C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20L15 20C14.5955 20 14.2309 19.7564 14.0761 19.3827C13.9213 19.009 14.0069 18.5789 14.2929 18.2929L19.4645 13.1213C19.8072 12.7785 19.9998 12.3135 19.9998 11.8284C19.9998 10.8185 19.1813 10 18.1716 10H18Z"
                fill="currentColor"
            />
        </svg>
    );
}
