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
                d="M6.29289 7.29289C6.68342 6.90237 7.31658 6.90237 7.70711 7.29289L11.7071 11.2929C12.0976 11.6834 12.0976 12.3166 11.7071 12.7071L7.70711 16.7071C7.31658 17.0976 6.68342 17.0976 6.29289 16.7071C5.90237 16.3166 5.90237 15.6834 6.29289 15.2929L9.58579 12L6.29289 8.70711C5.90237 8.31658 5.90237 7.68342 6.29289 7.29289ZM12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289L17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071L13.7071 16.7071C13.3166 17.0976 12.6834 17.0976 12.2929 16.7071C11.9024 16.3166 11.9024 15.6834 12.2929 15.2929L15.5858 12L12.2929 8.70711C11.9024 8.31658 11.9024 7.68342 12.2929 7.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}