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
                d="M11.4453 3.16795C11.7812 2.94402 12.2188 2.94402 12.5547 3.16795L21.5547 9.16795C21.8329 9.35342 22 9.66565 22 10C22 10.3344 21.8329 10.6466 21.5547 10.8321L12.5547 16.8321C12.2188 17.056 11.7812 17.056 11.4453 16.8321L2.4453 10.8321C2.1671 10.6466 2 10.3344 2 10C2 9.66565 2.1671 9.35342 2.4453 9.16795L11.4453 3.16795ZM4.80278 10L12 14.7982L19.1972 10L12 5.20185L4.80278 10ZM2.16795 13.4453C2.4743 12.9858 3.09517 12.8616 3.5547 13.1679L12 18.7982L20.4453 13.1679C20.9048 12.8616 21.5257 12.9858 21.8321 13.4453C22.1384 13.9048 22.0142 14.5257 21.5547 14.8321L12.5547 20.8321C12.2188 21.056 11.7812 21.056 11.4453 20.8321L2.4453 14.8321C1.98577 14.5257 1.8616 13.9048 2.16795 13.4453Z"
                fill="currentColor"
            />
        </svg>
    );
}
