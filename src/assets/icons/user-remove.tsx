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
                d="M9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5ZM4 8C4 5.23858 6.23858 3 9 3C11.7614 3 14 5.23858 14 8C14 10.7614 11.7614 13 9 13C6.23858 13 4 10.7614 4 8ZM14 13C14 12.4477 14.4477 12 15 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H15C14.4477 14 14 13.5523 14 13ZM4.20266 15.3395C5.47422 14.4918 7.17326 14 9 14C10.8267 14 12.5258 14.4918 13.7973 15.3395C15.0619 16.1826 16 17.457 16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.3338 13.5949 17.6083 12.6879 17.0036C11.7879 16.4036 10.487 16 9 16C7.51303 16 6.21207 16.4036 5.31206 17.0036C4.40506 17.6083 4 18.3338 4 19C4 19.5523 3.55228 20 3 20C2.44772 20 2 19.5523 2 19C2 17.457 2.93809 16.1826 4.20266 15.3395Z"
                fill="currentColor"
            />
        </svg>
    );
}
