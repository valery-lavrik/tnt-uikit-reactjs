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
                d="M20.5 18H3.5C2.67157 18 2 18.6716 2 19.5C2 20.3284 2.67157 21 3.5 21H20.5C21.3284 21 22 20.3284 22 19.5C22 18.6716 21.3284 18 20.5 18Z"
                fill="currentColor"
            />
            <path
                d="M12 17V3M12 3L9 6M12 3L15 6M20.5 18H3.5C2.67157 18 2 18.6716 2 19.5C2 20.3284 2.67157 21 3.5 21H20.5C21.3284 21 22 20.3284 22 19.5C22 18.6716 21.3284 18 20.5 18ZM3.5 12H20.5C21.3284 12 22 12.6716 22 13.5C22 14.3284 21.3284 15 20.5 15H3.5C2.67157 15 2 14.3284 2 13.5C2 12.6716 2.67157 12 3.5 12Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
