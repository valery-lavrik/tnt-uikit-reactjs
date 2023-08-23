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
                d="M10 5C10 4.44772 10.4477 4 11 4H16C19.3137 4 22 6.68629 22 10C22 13.3137 19.3137 16 16 16H5.41421L7.70711 18.2929C8.09763 18.6834 8.09763 19.3166 7.70711 19.7071C7.31658 20.0976 6.68342 20.0976 6.29289 19.7071L2.29289 15.7071C1.90237 15.3166 1.90237 14.6834 2.29289 14.2929L6.29289 10.2929C6.68342 9.90237 7.31658 9.90237 7.70711 10.2929C8.09763 10.6834 8.09763 11.3166 7.70711 11.7071L5.41421 14H16C18.2091 14 20 12.2091 20 10C20 7.79086 18.2091 6 16 6H11C10.4477 6 10 5.55228 10 5Z"
                fill="currentColor"
            />
        </svg>
    );
}
