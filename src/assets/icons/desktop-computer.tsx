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
                d="M9.75 17.2915L9 20.2915L8 21.2915H16L15 20.2915L14.25 17.2915M3 13.2915H21M5 17.2915H19C20.1046 17.2915 21 16.3961 21 15.2915V5.2915C21 4.18693 20.1046 3.2915 19 3.2915H5C3.89543 3.2915 3 4.18693 3 5.2915V15.2915C3 16.3961 3.89543 17.2915 5 17.2915Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
