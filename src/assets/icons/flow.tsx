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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4697 3.76117C17.7626 3.46828 18.2374 3.46828 18.5303 3.76117L21.5303 6.76117C21.8232 7.05407 21.8232 7.52894 21.5303 7.82183L18.5303 10.8218C18.2374 11.1147 17.7626 11.1147 17.4697 10.8218C17.1768 10.5289 17.1768 10.0541 17.4697 9.76117L19.1893 8.0415H16C14.2051 8.0415 12.75 9.49658 12.75 11.2915V14.2915C12.75 16.3626 11.0711 18.0415 9 18.0415C8.58579 18.0415 8.25 17.7057 8.25 17.2915C8.25 16.8773 8.58579 16.5415 9 16.5415C10.2426 16.5415 11.25 15.5341 11.25 14.2915V11.2915C11.25 8.66815 13.3766 6.5415 16 6.5415H19.1893L17.4697 4.82183C17.1768 4.52894 17.1768 4.05407 17.4697 3.76117Z"
                fill="#0062FF"
            />
            <path
                d="M6 13.5415C3.92893 13.5415 2.25 15.2204 2.25 17.2915C2.25 19.3626 3.92893 21.0415 6 21.0415C8.07107 21.0415 9.75 19.3626 9.75 17.2915C9.75 15.2204 8.07107 13.5415 6 13.5415Z"
                fill="white"
                stroke="#0062FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
