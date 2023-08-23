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
                d="M9 8C9 7.44772 9.44772 7 10 7H16C16.5523 7 17 7.44772 17 8V14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14V10.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L13.5858 9H10C9.44772 9 9 8.55228 9 8Z"
                fill="currentColor"
            />
        </svg>
    );
}
