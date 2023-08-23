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
                d="M3 12.2915L5 10.2915M5 10.2915L12 3.2915L19 10.2915M5 10.2915V20.2915C5 20.8438 5.44772 21.2915 6 21.2915H9M19 10.2915L21 12.2915M19 10.2915V20.2915C19 20.8438 18.5523 21.2915 18 21.2915H15M9 21.2915C9.55228 21.2915 10 20.8438 10 20.2915V16.2915C10 15.7392 10.4477 15.2915 11 15.2915H13C13.5523 15.2915 14 15.7392 14 16.2915V20.2915C14 20.8438 14.4477 21.2915 15 21.2915M9 21.2915H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
