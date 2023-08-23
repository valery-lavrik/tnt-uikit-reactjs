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
                d="M12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1ZM4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L7.12132 5.70711C7.51184 6.09763 7.51184 6.7308 7.12132 7.12132C6.7308 7.51184 6.09763 7.51184 5.70711 7.12132L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289ZM19.8498 4.29289C20.2404 4.68342 20.2404 5.31658 19.8498 5.70711L18.4356 7.12132C18.0451 7.51184 17.4119 7.51184 17.0214 7.12132C16.6309 6.7308 16.6309 6.09763 17.0214 5.70711L18.4356 4.29289C18.8261 3.90237 19.4593 3.90237 19.8498 4.29289ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM1 12C1 11.4477 1.44772 11 2 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H2C1.44772 13 1 12.5523 1 12ZM19 12C19 11.4477 19.4477 11 20 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20C19.4477 13 19 12.5523 19 12ZM7.12181 17.0208C7.51233 17.4113 7.51233 18.0445 7.12181 18.435L5.70759 19.8492C5.31707 20.2397 4.68391 20.2397 4.29338 19.8492C3.90286 19.4587 3.90286 18.8255 4.29338 18.435L5.7076 17.0208C6.09812 16.6303 6.73128 16.6303 7.12181 17.0208ZM17.0209 17.0208C17.4114 16.6303 18.0446 16.6303 18.4351 17.0208L19.8493 18.435C20.2399 18.8255 20.2399 19.4587 19.8493 19.8492C19.4588 20.2397 18.8257 20.2397 18.4351 19.8492L17.0209 18.435C16.6304 18.0445 16.6304 17.4113 17.0209 17.0208ZM12 19C12.5523 19 13 19.4477 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20C11 19.4477 11.4477 19 12 19Z"
                fill="currentColor"
            />
        </svg>
    );
}