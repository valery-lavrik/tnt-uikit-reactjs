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
                d="M3 4C3 3.44772 3.44772 3 4 3H12C16.9706 3 21 7.02944 21 12V20C21 20.5523 20.5523 21 20 21H12C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12V4ZM5 5V11H12C12.5523 11 13 11.4477 13 12V19H19V12C19 8.13401 15.866 5 12 5H5Z"
                fill="currentColor"
            />
        </svg>
    );
}
