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
                d="M3.5 6H20.5C21.3284 6 22 5.32843 22 4.5C22 3.67157 21.3284 3 20.5 3H3.5C2.67157 3 2 3.67157 2 4.5C2 5.32843 2.67157 6 3.5 6Z"
                fill="currentColor"
            />
            <path
                d="M12 7V21M12 21L15 18M12 21L9 18M3.5 6H20.5C21.3284 6 22 5.32843 22 4.5C22 3.67157 21.3284 3 20.5 3H3.5C2.67157 3 2 3.67157 2 4.5C2 5.32843 2.67157 6 3.5 6ZM20.5 12H3.5C2.67157 12 2 11.3284 2 10.5C2 9.67157 2.67157 9 3.5 9H20.5C21.3284 9 22 9.67157 22 10.5C22 11.3284 21.3284 12 20.5 12Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
