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
                d="M3 4C3 3.44772 3.44772 3 4 3H14.2857C14.5509 3 14.8053 3.10536 14.9928 3.29289L20.7071 9.00718C20.8946 9.19472 21 9.44907 21 9.71429V20C21 20.5523 20.5523 21 20 21H12C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12V4ZM5 5V11H12C12.5523 11 13 11.4477 13 12V19H19V10.1285L13.8715 5H5Z"
                fill="currentColor"
            />
        </svg>
    );
}
