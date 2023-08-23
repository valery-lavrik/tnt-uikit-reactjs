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
                d="M4 19.5311V4.46889C4 2.92823 5.66874 1.96611 7.00207 2.73804L20.0103 10.2691C21.3409 11.0395 21.3409 12.9605 20.0103 13.7309L7.00207 21.262C5.66874 22.0339 4 21.0718 4 19.5311Z"
                fill="#22242A"
            />
        </svg>
    );
}
