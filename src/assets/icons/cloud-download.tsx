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
                d="M5.0259 8.07886C6.39648 5.64592 9.00491 4 12 4C15.7488 4 18.8946 6.57775 19.7629 10.0578C22.1622 10.4251 24 12.498 24 15C24 17.7614 21.7614 20 19 20H6C2.68629 20 0 17.3137 0 14C0 11.0179 2.17533 8.54473 5.0259 8.07886ZM12 6C9.60445 6 7.53513 7.40388 6.57294 9.43836C6.41768 9.76665 6.09664 9.98496 5.73426 10.0087C3.64959 10.1451 2 11.8805 2 14C2 16.2091 3.79086 18 6 18H19C20.6569 18 22 16.6569 22 15C22 13.3431 20.6569 12 19 12C18.9824 12 18.9651 12.0002 18.947 12.0005C18.4429 12.0092 18.0111 11.6413 17.9398 11.1421C17.5242 8.23521 15.0221 6 12 6ZM12 8C12.5523 8 13 8.44772 13 9V13.1315L14.4453 12.1679C14.9048 11.8616 15.5257 11.9858 15.8321 12.4453C16.1384 12.9048 16.0142 13.5257 15.5547 13.8321L12.5547 15.8321C12.2188 16.056 11.7812 16.056 11.4453 15.8321L8.4453 13.8321C7.98577 13.5257 7.8616 12.9048 8.16795 12.4453C8.4743 11.9858 9.09517 11.8616 9.5547 12.1679L11 13.1315V9C11 8.44772 11.4477 8 12 8Z"
                fill="currentColor"
            />
        </svg>
    );
}
