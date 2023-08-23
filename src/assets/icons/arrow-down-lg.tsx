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
                d="M12 2C12.5523 2 13 2.44772 13 3V18.5858L16.2929 15.2929C16.6834 14.9024 17.3166 14.9024 17.7071 15.2929C18.0976 15.6834 18.0976 16.3166 17.7071 16.7071L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L6.29289 16.7071C5.90237 16.3166 5.90237 15.6834 6.29289 15.2929C6.68342 14.9024 7.31658 14.9024 7.70711 15.2929L11 18.5858V3C11 2.44772 11.4477 2 12 2Z"
                fill="currentColor"
            />
        </svg>
    );
}
