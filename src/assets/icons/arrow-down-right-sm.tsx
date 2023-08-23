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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L15 13.5858V10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10V16C17 16.5523 16.5523 17 16 17H10C9.44772 17 9 16.5523 9 16C9 15.4477 9.44772 15 10 15H13.5858L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
