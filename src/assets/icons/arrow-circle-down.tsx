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
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 7C12.5523 7 13 7.44772 13 8V13.5858L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929L11 13.5858V8C11 7.44772 11.4477 7 12 7Z"
                fill="currentColor"
            />
        </svg>
    );
}