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
                opacity="0.4"
                d="M21.3311 7.44254C20.912 7.17858 20.397 7.15523 19.958 7.37858L18.476 8.1268C17.928 8.40294 17.588 8.96132 17.588 9.58264V15.4161C17.588 16.0375 17.928 16.5948 18.476 16.873L19.957 17.6202C20.158 17.7238 20.373 17.7735 20.588 17.7735C20.846 17.7735 21.102 17.7004 21.3311 17.5573C21.7501 17.2943 22.0001 16.8385 22.0001 16.339V8.66183C22.0001 8.16233 21.7501 7.7065 21.3311 7.44254Z"
                fill="#37383C"
            />
            <path
                d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z"
                fill="#37383C"
            />
        </svg>
    );
}
