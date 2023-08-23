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
                d="M10.2939 5.63611C10.2939 5.08382 10.7417 4.63611 11.2939 4.63611H18.3646C18.6299 4.63611 18.8842 4.74147 19.0718 4.92902C19.2593 5.11657 19.3647 5.37094 19.3646 5.63616L19.3643 12.7072C19.3642 13.2595 18.9165 13.7072 18.3642 13.7072C17.8119 13.7071 17.3642 13.2594 17.3643 12.7071L17.3645 8.05045L6.34383 19.0711C5.9533 19.4617 5.32014 19.4617 4.92961 19.0711C4.53909 18.6806 4.53909 18.0474 4.92961 17.6569L15.9504 6.63611H11.2939C10.7417 6.63611 10.2939 6.18839 10.2939 5.63611Z"
                fill="currentColor"
            />
        </svg>
    );
}
