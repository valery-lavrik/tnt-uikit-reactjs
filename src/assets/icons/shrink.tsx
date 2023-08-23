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
                d="M14 4C14.5523 4 15 4.44772 15 5V9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H14C13.4477 11 13 10.5523 13 10V5C13 4.44772 13.4477 4 14 4ZM4 14C4 13.4477 4.44772 13 5 13H10C10.5523 13 11 13.4477 11 14V19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19V15H5C4.44772 15 4 14.5523 4 14Z"
                fill="currentColor"
            />
        </svg>
    );
}
