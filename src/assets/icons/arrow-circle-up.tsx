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
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM8.29289 10.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L9.70711 11.7071C9.31658 12.0976 8.68342 12.0976 8.29289 11.7071C7.90237 11.3166 7.90237 10.6834 8.29289 10.2929Z"
                fill="currentColor"
            />
        </svg>
    );
}