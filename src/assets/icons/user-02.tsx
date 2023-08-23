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
                d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM5.81315 16.6165C7.44343 15.5975 9.63342 15 12 15C14.3666 15 16.5566 15.5975 18.1869 16.6165C19.803 17.6266 21 19.1501 21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.0885 18.4061 19.112 17.1269 18.3125C15.8617 17.5218 14.0517 17 12 17C9.9483 17 8.13829 17.5218 6.87314 18.3125C5.59391 19.112 5 20.0885 5 21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21C3 19.1501 4.19695 17.6266 5.81315 16.6165Z"
                fill="currentColor"
            />
        </svg>
    );
}