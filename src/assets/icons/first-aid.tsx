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
                d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V8H20C21.1046 8 22 8.89543 22 10V14C22 15.1046 21.1046 16 20 16H16V20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20V16H4C2.89543 16 2 15.1046 2 14V10C2 8.89543 2.89543 8 4 8H8V4ZM14 4H10V9C10 9.55228 9.55228 10 9 10H4V14H9C9.55228 14 10 14.4477 10 15V20H14V15C14 14.4477 14.4477 14 15 14L20 14V10H15C14.4477 10 14 9.55228 14 9L14 4Z"
                fill="currentColor"
            />
        </svg>
    );
}
