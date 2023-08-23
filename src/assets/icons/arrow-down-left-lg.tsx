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
                d="M19.0708 4.92888C19.4613 5.3194 19.4613 5.95257 19.0708 6.34309L8.04996 17.3639L12.7068 17.3639C13.2591 17.3639 13.7068 17.8116 13.7068 18.3639C13.7068 18.9162 13.2591 19.3639 12.7068 19.3639L5.63574 19.3639C5.37053 19.3639 5.11617 19.2586 4.92864 19.071C4.7411 18.8835 4.63574 18.6291 4.63574 18.3639V11.2928C4.63574 10.7406 5.08346 10.2928 5.63574 10.2928C6.18803 10.2928 6.63574 10.7406 6.63574 11.2928V15.9497L17.6566 4.92888C18.0471 4.53836 18.6802 4.53836 19.0708 4.92888Z"
                fill="currentColor"
            />
        </svg>
    );
}
