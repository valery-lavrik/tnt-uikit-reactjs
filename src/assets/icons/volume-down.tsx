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
                d="M15.3716 6.45056C15.3212 5.96422 15.2687 5.45963 15.1396 4.95611C14.7879 3.75153 13.8136 3.00001 12.7691 3.00001C12.1864 2.99786 11.4494 3.35644 11.0316 3.71932L7.56822 6.61697H5.75517C4.42084 6.61697 3.34792 7.6444 3.1453 9.12705C2.97313 10.5506 2.93114 13.2379 3.1453 14.8042C3.33112 16.3706 4.35575 17.383 5.75517 17.383H7.56822L11.0988 20.3236C11.461 20.6382 12.1003 20.9989 12.6882 20.9989C12.726 21 12.7596 21 12.7932 21C13.8577 21 14.7952 20.2206 15.1469 19.0192C15.2802 18.5082 15.3264 18.0293 15.3716 17.5666L15.4188 17.1082C15.5994 15.6213 15.5994 8.36908 15.4188 6.89288L15.3716 6.45056Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M19.4263 6.49458C19.1397 6.0705 18.5665 5.96529 18.1476 6.25838C17.7319 6.5547 17.629 7.14088 17.9177 7.56603C18.7208 8.74914 19.1628 10.323 19.1628 12C19.1628 13.6759 18.7208 15.2509 17.9177 16.434C17.629 16.8591 17.7319 17.4453 18.1476 17.7416C18.302 17.8511 18.4836 17.9091 18.6715 17.9091C18.9728 17.9091 19.2542 17.7577 19.4263 17.5054C20.4405 16.012 21 14.057 21 12C21 9.94298 20.4405 7.98795 19.4263 6.49458Z"
                fill="#37383C"
            />
        </svg>
    );
}
