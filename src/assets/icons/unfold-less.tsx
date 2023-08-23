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
                d="M7.29289 4.29289C7.68342 3.90237 8.31658 3.90237 8.70711 4.29289L12 7.58579L15.2929 4.29289C15.6834 3.90237 16.3166 3.90237 16.7071 4.29289C17.0976 4.68342 17.0976 5.31658 16.7071 5.70711L12.7071 9.70711C12.3166 10.0976 11.6834 10.0976 11.2929 9.70711L7.29289 5.70711C6.90237 5.31658 6.90237 4.68342 7.29289 4.29289ZM12 16.4142L8.70711 19.7071C8.31658 20.0976 7.68342 20.0976 7.29289 19.7071C6.90237 19.3166 6.90237 18.6834 7.29289 18.2929L11.2929 14.2929C11.6834 13.9024 12.3166 13.9024 12.7071 14.2929L16.7071 18.2929C17.0976 18.6834 17.0976 19.3166 16.7071 19.7071C16.3166 20.0976 15.6834 20.0976 15.2929 19.7071L12 16.4142Z"
                fill="currentColor"
            />
        </svg>
    );
}
