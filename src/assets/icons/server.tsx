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
                d="M5 12.2915H19M5 12.2915C3.89543 12.2915 3 11.3961 3 10.2915V6.2915C3 5.18693 3.89543 4.2915 5 4.2915H19C20.1046 4.2915 21 5.18693 21 6.2915V10.2915C21 11.3961 20.1046 12.2915 19 12.2915M5 12.2915C3.89543 12.2915 3 13.1869 3 14.2915V18.2915C3 19.3961 3.89543 20.2915 5 20.2915H19C20.1046 20.2915 21 19.3961 21 18.2915V14.2915C21 13.1869 20.1046 12.2915 19 12.2915M17 8.2915H17.01M17 16.2915H17.01"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
