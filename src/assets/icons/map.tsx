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
                d="M21.5257 2.14935C21.8205 2.33156 22 2.65342 22 3V18C22 18.3788 21.786 18.725 21.4472 18.8944L15.4472 21.8944C15.1657 22.0352 14.8343 22.0352 14.5528 21.8944L9 19.118L3.44721 21.8944C3.13723 22.0494 2.76909 22.0329 2.47427 21.8507C2.17945 21.6684 2 21.3466 2 21V6C2 5.62123 2.214 5.27497 2.55279 5.10557L8.55279 2.10557C8.83431 1.96481 9.16569 1.96481 9.44721 2.10557L15 4.88197L20.5528 2.10557C20.8628 1.95058 21.2309 1.96714 21.5257 2.14935ZM14 6.61803L10 4.61804V17.382L14 19.382V6.61803ZM16 19.382L20 17.382V4.61804L16 6.61803V19.382ZM8 17.382V4.61804L4 6.61804V19.382L8 17.382Z"
                fill="currentColor"
            />
        </svg>
    );
}
