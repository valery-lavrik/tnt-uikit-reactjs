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
                d="M19 11.2915H5M19 11.2915C20.1046 11.2915 21 12.1869 21 13.2915V19.2915C21 20.3961 20.1046 21.2915 19 21.2915H5C3.89543 21.2915 3 20.3961 3 19.2915V13.2915C3 12.1869 3.89543 11.2915 5 11.2915M19 11.2915V9.2915C19 8.18693 18.1046 7.2915 17 7.2915M5 11.2915V9.2915C5 8.18693 5.89543 7.2915 7 7.2915M7 7.2915V5.2915C7 4.18693 7.89543 3.2915 9 3.2915H15C16.1046 3.2915 17 4.18693 17 5.2915V7.2915M7 7.2915H17"
                stroke="#0062FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
