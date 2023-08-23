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
                d="M10 5C10 3.34315 11.3431 2 13 2H15C16.6569 2 18 3.34315 18 5V19C18 20.6569 16.6569 22 15 22H14C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20H15C15.5523 20 16 19.5523 16 19V5C16 4.44772 15.5523 4 15 4H13C12.4477 4 12 4.44772 12 5V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V5ZM8 13C8.55228 13 9 13.4477 9 14V16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H9V20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20V18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H7V14C7 13.4477 7.44772 13 8 13Z"
                fill="currentColor"
            />
        </svg>
    );
}
