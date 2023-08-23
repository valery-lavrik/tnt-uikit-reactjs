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
                d="M8 4C8.55228 4 9 4.44772 9 5V11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11V5C15 4.44772 15.4477 4 16 4C16.5523 4 17 4.44772 17 5V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V5C7 4.44772 7.44772 4 8 4ZM5 19C5 18.4477 5.44772 18 6 18H18C18.5523 18 19 18.4477 19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19Z"
                fill="currentColor"
            />
        </svg>
    );
}
