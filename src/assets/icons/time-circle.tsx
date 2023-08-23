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
                d="M21.9998 11.9999C21.9998 17.5239 17.5228 21.9999 11.9998 21.9999C6.47676 21.9999 1.99976 17.5239 1.99976 11.9999C1.99976 6.47791 6.47676 1.99991 11.9998 1.99991C17.5228 1.99991 21.9998 6.47791 21.9998 11.9999Z"
                fill="#37383C"
            />
            <path
                d="M15.5734 15.8144C15.4424 15.8144 15.3104 15.7804 15.1894 15.7094L11.2634 13.3674C11.0374 13.2314 10.8984 12.9864 10.8984 12.7224V7.67542C10.8984 7.26142 11.2344 6.92542 11.6484 6.92542C12.0624 6.92542 12.3984 7.26142 12.3984 7.67542V12.2964L15.9584 14.4194C16.3134 14.6324 16.4304 15.0924 16.2184 15.4484C16.0774 15.6834 15.8284 15.8144 15.5734 15.8144Z"
                fill="#37383C"
            />
        </svg>
    );
}
