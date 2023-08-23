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
                d="M4 8H7M4 8V8C4 7.44772 3.55228 7 3 7V7C2.44772 7 2 7.44772 2 8V8C2 8.55228 2.44772 9 3 9V9C3.55228 9 4 8.55228 4 8V8ZM7 8V8C7 8.55228 7.44772 9 8 9V9C8.55228 9 9 8.55228 9 8V8M7 8V8C7 7.44772 7.44772 7 8 7V7C8.55228 7 9 7.44772 9 8V8M7 8L9 8M12 8V8C12 8.55228 12.4477 9 13 9V9C13.5523 9 14 8.55229 14 8V8C14 7.44772 13.5523 7 13 7V7C12.4477 7 12 7.44772 12 8V8ZM12 8L9 8"
                stroke="black"
                strokeLinecap="round"
            />
        </svg>
    );
}
