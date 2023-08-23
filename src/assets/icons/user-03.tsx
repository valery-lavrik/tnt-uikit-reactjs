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
                d="M12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5ZM7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM7.20266 15.3395C8.47422 14.4918 10.1733 14 12 14C13.8267 14 15.5258 14.4918 16.7973 15.3395C18.0619 16.1826 19 17.457 19 19C19 19.5523 18.5523 20 18 20C17.4477 20 17 19.5523 17 19C17 18.3338 16.5949 17.6083 15.6879 17.0036C14.7879 16.4036 13.487 16 12 16C10.513 16 9.21207 16.4036 8.31206 17.0036C7.40506 17.6083 7 18.3338 7 19C7 19.5523 6.55228 20 6 20C5.44772 20 5 19.5523 5 19C5 17.457 5.93809 16.1826 7.20266 15.3395Z"
                fill="currentColor"
            />
        </svg>
    );
}
