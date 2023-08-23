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
                d="M19.4346 7.0502C19.8251 7.44071 19.8251 8.07388 19.4346 8.46441L10.9498 16.9497C10.7622 17.1373 10.5079 17.2426 10.2427 17.2426C9.97743 17.2426 9.72307 17.1373 9.53553 16.9497L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L10.2426 14.8284L18.0203 7.05024C18.4109 6.6597 19.044 6.65968 19.4346 7.0502Z"
                fill="currentColor"
            />
        </svg>
    );
}
