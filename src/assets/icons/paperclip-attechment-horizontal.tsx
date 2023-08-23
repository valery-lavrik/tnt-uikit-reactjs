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
                d="M6 6C6 5.44772 6.44772 5 7 5H16.75C20.2018 5 23 7.79822 23 11.25C23 14.7018 20.2018 17.5 16.75 17.5H5.5C3.01472 17.5 1 15.4853 1 13C1 10.5147 3.01472 8.5 5.5 8.5H16.75C18.2688 8.5 19.5 9.73122 19.5 11.25C19.5 12.7688 18.2688 14 16.75 14H7C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12H16.75C17.1642 12 17.5 11.6642 17.5 11.25C17.5 10.8358 17.1642 10.5 16.75 10.5H5.5C4.11929 10.5 3 11.6193 3 13C3 14.3807 4.11929 15.5 5.5 15.5H16.75C19.0972 15.5 21 13.5972 21 11.25C21 8.90279 19.0972 7 16.75 7H7C6.44772 7 6 6.55228 6 6Z"
                fill="currentColor"
            />
        </svg>
    );
}
