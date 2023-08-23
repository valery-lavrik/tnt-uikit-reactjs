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
                d="M6 9C6 6.23858 8.23858 4 11 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V6H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V14C8.23858 14 6 11.7614 6 9ZM11 12V6C9.34315 6 8 7.34315 8 9C8 10.6569 9.34315 12 11 12Z"
                fill="currentColor"
            />
        </svg>
    );
}
