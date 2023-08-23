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
                d="M13.9769 4.00001H12C11.4477 4.00001 11 4.44773 11 5.00001C11 5.5523 11.4477 6.00001 12 6.00001H12.6743L9.2457 18H8C7.44772 18 7 18.4477 7 19C7 19.5523 7.44772 20 8 20H9.9779C9.993 20.0004 10.0081 20.0004 10.0231 20H12C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18H11.3257L14.7543 6.00001H16C16.5523 6.00001 17 5.5523 17 5.00001C17 4.44773 16.5523 4.00001 16 4.00001H14.0221C14.007 3.99967 13.9919 3.99967 13.9769 4.00001Z"
                fill="currentColor"
            />
        </svg>
    );
}
