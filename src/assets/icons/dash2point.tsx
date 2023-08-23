import React from 'react';
import { SvgPropsType } from '../../Types';
export default function Icon({ className = '', style = {}, onClick }: SvgPropsType) {
    return (
        <svg
            onClick={onClick}
            className={className}
            style={style}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 8C1 7.44772 1.44772 7 2 7H7C7.55228 7 8 7.44772 8 8C8 8.55228 7.55228 9 7 9H2C1.44772 9 1 8.55228 1 8Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 8C8.5 7.44772 8.94772 7 9.5 7H10.5C11.0523 7 11.5 7.44772 11.5 8C11.5 8.55228 11.0523 9 10.5 9H9.5C8.94772 9 8.5 8.55228 8.5 8Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 8C12 7.44772 12.4477 7 13 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H13C12.4477 9 12 8.55228 12 8Z"
                fill="currentColor"
            />
        </svg>
    );
}
