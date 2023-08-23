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
                d="M3.5 6V10C3.5 10.275 3.72375 10.5 4 10.5H6V12H4C2.89531 12 2 11.1031 2 10V6C2 4.89531 2.89531 4 4 4H8C9.10313 4 10 4.89531 10 6H8.5C8.5 5.72375 8.275 5.5 8 5.5H4C3.72375 5.5 3.5 5.72375 3.5 6ZM16 20C14.8969 20 14 19.1031 14 18H15.5C15.5 18.275 15.725 18.5 16 18.5H20C20.275 18.5 20.5 18.275 20.5 18V14C20.5 13.725 20.275 13.5 20 13.5H18V12H20C21.1031 12 22 12.8969 22 14V18C22 19.1031 21.1031 20 20 20H16ZM15 7C16.1031 7 17 7.89687 17 9V15C17 16.1031 16.1031 17 15 17H9C7.89687 17 7 16.1031 7 15V9C7 7.89687 7.89687 7 9 7H15Z"
                fill="currentColor"
            />
        </svg>
    );
}
