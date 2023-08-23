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
                d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711C15.3166 7.09763 14.6834 7.09763 14.2929 6.70711L13 5.41421L13 18.5858L14.2929 17.2929C14.6834 16.9024 15.3166 16.9024 15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929C8.68342 16.9024 9.31658 16.9024 9.70711 17.2929L11 18.5858L11 5.41421L9.70711 6.70711C9.31658 7.09763 8.68342 7.09763 8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289L11.2929 2.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
