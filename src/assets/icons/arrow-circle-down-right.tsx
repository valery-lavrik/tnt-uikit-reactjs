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
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L14 12.5858V11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11V15C16 15.5523 15.5523 16 15 16H11C10.4477 16 10 15.5523 10 15C10 14.4477 10.4477 14 11 14H12.5858L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
