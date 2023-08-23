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
                d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9ZM13 9C13 7.89543 13.8954 7 15 7C16.1046 7 17 7.89543 17 9C17 10.1046 16.1046 11 15 11C13.8954 11 13 10.1046 13 9ZM7 15C7 13.8954 7.89543 13 9 13C10.1046 13 11 13.8954 11 15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15ZM13 15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15C17 16.1046 16.1046 17 15 17C13.8954 17 13 16.1046 13 15Z"
                fill="currentColor"
            />
        </svg>
    );
}
