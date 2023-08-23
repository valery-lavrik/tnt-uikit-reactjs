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
            <g clipPath="url(#clip0_88_210)">
                <path
                    d="M18.1117 12.9442L7.18192 3.24067C7.00273 3.08156 6.77531 3 6.54469 3C6.41049 3 6.27549 3.02772 6.14732 3.08478C5.80223 3.24147 5.58 3.58339 5.58 3.96509V18.8432C5.58 19.2498 5.83236 19.6138 6.21161 19.7541C6.32021 19.7938 6.43259 19.8134 6.54433 19.8134C6.8218 19.8134 7.09236 19.6928 7.27879 19.4718L10.6329 15.5017L12.9733 20.4477C13.2022 20.9315 13.7773 21.1368 14.2582 20.9065C14.7391 20.6763 14.9437 20.0973 14.7146 19.6136L12.361 14.6395H17.4717C17.8728 14.6395 18.2319 14.39 18.3737 14.0123C18.4813 13.6353 18.413 13.2094 18.1117 12.9442ZM10.4697 12.6991L7.50897 16.2039V6.11786L14.9219 12.6991H10.4697Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_88_210">
                    <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                </clipPath>
            </defs>
        </svg>
    );
}
