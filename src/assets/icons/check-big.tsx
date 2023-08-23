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
                d="M20.2639 5.63605C20.6544 6.02658 20.6544 6.65974 20.2639 7.05026L9.65684 17.6569C9.26631 18.0474 8.63316 18.0474 8.24264 17.6569L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L8.94976 15.5355L18.8497 5.63602C19.2402 5.2455 19.8734 5.24552 20.2639 5.63605Z"
                fill="currentColor"
            />
        </svg>
    );
}
