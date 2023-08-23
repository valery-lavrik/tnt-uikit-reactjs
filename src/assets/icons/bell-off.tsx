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
                d="M4.29289 2.29289C4.68342 1.90237 5.31658 1.90237 5.70711 2.29289L21.7071 18.2929C22.0976 18.6834 22.0976 19.3166 21.7071 19.7071C21.3166 20.0976 20.6834 20.0976 20.2929 19.7071L18.5858 18L16 18C16 20.2092 14.2092 22 12 22C9.79082 22 8 20.2092 8 18L5.00011 18C3.97395 18 3.12908 17.2279 3.01341 16.232C3.01117 16.2128 3.0095 16.1935 3.00839 16.1742L3.00166 16.0576C3.00055 16.0384 3 16.0192 3 16V15.4141C3 14.8834 3.21105 14.3749 3.58573 14.0001L4 13.5858V9.99998C4 8.15191 4.62766 6.44872 5.68018 5.09439L4.29289 3.70711C3.90237 3.31658 3.90237 2.68342 4.29289 2.29289ZM7.10917 6.52338C6.4103 7.50439 6 8.70352 6 9.99998V13.7224C6 14.1655 5.824 14.5902 5.51087 14.9034L5.00021 15.4141L5 15.9712L5.00166 16L16.5858 16L7.10917 6.52338ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10ZM11.9836 2.00014L12.0005 2C16.4188 2 20.0004 5.58176 20.0004 10L19.9995 12.9993C19.9994 13.5516 19.5515 13.9992 18.9992 13.999C18.4469 13.9989 17.9994 13.551 17.9995 12.9987L18.0004 10C18.0004 9.99991 18.0004 10.0001 18.0004 10C18.0002 6.6891 15.3185 4.00438 12.0086 4.00001L11.7854 4.00377C11.0974 4.02793 10.4405 4.16758 9.83223 4.40345C9.3173 4.60312 8.73801 4.34754 8.53834 3.83262C8.33868 3.31769 8.59425 2.73839 9.10918 2.53873C9.92606 2.22198 10.8071 2.03567 11.726 2.00463L11.7429 2.0042L11.9836 2.00014Z"
                fill="currentColor"
            />
        </svg>
    );
}
