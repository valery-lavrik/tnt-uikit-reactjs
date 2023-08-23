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
                d="M7.0003 18.3231C8.66577 19.194 10.3065 19.5834 11.8554 19.4817C13.628 19.3652 15.1994 18.6099 16.4634 17.3458C18.9603 14.8489 20.2109 10.4412 19.8477 4.99336C19.8144 4.49349 19.4163 4.09541 18.9165 4.06209C13.4686 3.69889 9.06083 4.94945 6.56394 7.44633C5.29989 8.71038 4.54453 10.2818 4.42808 12.0543C4.32634 13.603 4.71565 15.2435 5.58625 16.9088L4.29289 18.2021C3.90237 18.5926 3.90237 19.2258 4.29289 19.6163C4.68342 20.0069 5.31658 20.0069 5.70711 19.6163L7.0003 18.3231ZM8.49653 16.8269L11.364 13.9595C11.7545 13.569 11.7545 12.9358 11.364 12.5453C10.9734 12.1547 10.3403 12.1547 9.94975 12.5453L7.08252 15.4125C6.55556 14.2305 6.36063 13.1467 6.42378 12.1854C6.50621 10.9306 7.03249 9.80621 7.97815 8.86055C9.78868 7.05003 13.1968 5.85875 17.8965 6.01334C18.051 10.7129 16.8597 14.1211 15.0492 15.9316C14.1035 16.8773 12.9791 17.4035 11.7243 17.486C10.7629 17.5491 9.67878 17.3541 8.49653 16.8269Z"
                fill="currentColor"
            />
        </svg>
    );
}