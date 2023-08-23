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
                d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.5073 8.1298C9.82081 7.95229 10.2056 7.95715 10.5145 8.14251L15.5145 11.1425C15.8157 11.3232 16 11.6487 16 12C16 12.3513 15.8157 12.6768 15.5145 12.8575L10.5145 15.8575C10.2056 16.0429 9.82081 16.0477 9.5073 15.8702C9.19379 15.6927 9 15.3603 9 15V9C9 8.63973 9.19379 8.30731 9.5073 8.1298ZM11 10.7662V13.2338L13.0563 12L11 10.7662Z"
                fill="currentColor"
            />
        </svg>
    );
}
