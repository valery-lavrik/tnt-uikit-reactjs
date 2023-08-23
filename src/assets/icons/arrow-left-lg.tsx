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
                d="M8.70711 6.29289C9.09763 6.68342 9.09763 7.31658 8.70711 7.70711L5.41421 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H5.41421L8.70711 16.2929C9.09763 16.6834 9.09763 17.3166 8.70711 17.7071C8.31658 18.0976 7.68342 18.0976 7.29289 17.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L7.29289 6.29289C7.68342 5.90237 8.31658 5.90237 8.70711 6.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}