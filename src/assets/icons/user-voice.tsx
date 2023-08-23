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
                d="M18.2929 2.29289C18.6834 1.90237 19.3166 1.90237 19.7071 2.29289C20.4566 3.04236 21.0511 3.93211 21.4567 4.91133C21.8623 5.89062 22.071 6.94008 22.071 7.99992C22.071 9.05982 21.8622 10.1094 21.4566 11.0887C21.051 12.0678 20.4566 12.9576 19.7071 13.7072C19.3166 14.0977 18.6834 14.0977 18.2929 13.7072C17.9024 13.3167 17.9024 12.6835 18.2929 12.293C18.8566 11.7293 19.3037 11.06 19.6088 10.3233C19.9139 9.58673 20.071 8.7972 20.071 7.99992C20.071 7.2026 19.914 6.41322 19.6089 5.6767C19.3038 4.94013 18.8566 4.27086 18.2929 3.70711C17.9024 3.31658 17.9024 2.68342 18.2929 2.29289ZM9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5ZM4 8C4 5.23858 6.23858 3 9 3C11.7614 3 14 5.23858 14 8C14 10.7614 11.7614 13 9 13C6.23858 13 4 10.7614 4 8ZM16.121 4.46452C16.5115 4.074 17.1447 4.074 17.5352 4.46452C17.9995 4.92882 18.3678 5.48001 18.6191 6.08664C18.8703 6.69314 18.9998 7.34322 18.9998 7.99997C18.9998 8.65657 18.8705 9.30678 18.6192 9.91342C18.3679 10.5201 17.9995 11.0713 17.5352 11.5356C17.1447 11.9261 16.5115 11.9261 16.121 11.5356C15.7305 11.145 15.7305 10.5119 16.121 10.1213C16.3997 9.84271 16.6207 9.51195 16.7714 9.14805C16.9222 8.78408 16.9998 8.39395 16.9998 7.99997C16.9998 7.60615 16.9222 7.21612 16.7713 6.85201C16.6206 6.48803 16.3996 6.15731 16.121 5.87874C15.7305 5.48821 15.7305 4.85505 16.121 4.46452ZM4.20266 15.3395C5.47422 14.4918 7.17326 14 9 14C10.8267 14 12.5258 14.4918 13.7973 15.3395C15.0619 16.1826 16 17.457 16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19C14 18.3338 13.5949 17.6083 12.6879 17.0036C11.7879 16.4036 10.487 16 9 16C7.51303 16 6.21207 16.4036 5.31206 17.0036C4.40506 17.6083 4 18.3338 4 19C4 19.5523 3.55228 20 3 20C2.44772 20 2 19.5523 2 19C2 17.457 2.93809 16.1826 4.20266 15.3395Z"
                fill="currentColor"
            />
        </svg>
    );
}
