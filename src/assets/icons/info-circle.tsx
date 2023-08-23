import React from 'react';
import { SvgPropsType } from '../../Types';
export default function Icon({ className = '', style = {}, onClick }: SvgPropsType) {
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
                d="M21.9999 11.9998C21.9999 17.5238 17.5229 21.9998 11.9999 21.9998C6.47688 21.9998 1.99988 17.5238 1.99988 11.9998C1.99988 6.47779 6.47688 1.99979 11.9999 1.99979C17.5229 1.99979 21.9999 6.47779 21.9999 11.9998Z"
                fill="#37383C"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.87 12.6307C12.87 13.1127 12.477 13.5057 11.995 13.5057C11.513 13.5057 11.12 13.1127 11.12 12.6307V8.21069C11.12 7.72869 11.513 7.33569 11.995 7.33569C12.477 7.33569 12.87 7.72869 12.87 8.21069V12.6307ZM11.125 15.8035C11.125 15.3215 11.516 14.9285 11.995 14.9285C12.488 14.9285 12.88 15.3215 12.88 15.8035C12.88 16.2855 12.488 16.6785 12.005 16.6785C11.52 16.6785 11.125 16.2855 11.125 15.8035Z"
                fill="#37383C"
            />
        </svg>
    );
}