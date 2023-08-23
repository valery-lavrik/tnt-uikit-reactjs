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
                d="M4.63574 5.63599C4.63574 5.0837 5.08346 4.63599 5.63574 4.63599H12.7068C13.2591 4.63599 13.7068 5.0837 13.7068 5.63599C13.7068 6.18827 13.2591 6.63599 12.7068 6.63599H8.04996L19.0708 17.6568C19.4613 18.0473 19.4613 18.6805 19.0708 19.071C18.6802 19.4615 18.0471 19.4615 17.6566 19.071L6.63574 8.0502V12.7071C6.63574 13.2593 6.18803 13.7071 5.63574 13.7071C5.08346 13.7071 4.63574 13.2593 4.63574 12.7071V5.63599Z"
                fill="currentColor"
            />
        </svg>
    );
}
