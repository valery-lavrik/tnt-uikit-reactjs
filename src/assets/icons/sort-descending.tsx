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
                d="M17.2929 4.29289C17.6834 3.90237 18.3166 3.90237 18.7071 4.29289L21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.7071C21.3166 9.09763 20.6834 9.09763 20.2929 8.70711L19 7.41421V13C19 13.5523 18.5523 14 18 14C17.4477 14 17 13.5523 17 13V7.41421L15.7071 8.70711C15.3166 9.09763 14.6834 9.09763 14.2929 8.70711C13.9024 8.31658 13.9024 7.68342 14.2929 7.29289L17.2929 4.29289ZM3 7C3 6.44772 3.44772 6 4 6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8H4C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H4C3.44772 13 3 12.5523 3 12ZM17 17C17 17.5523 16.5523 18 16 18L4 18C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16L16 16C16.5523 16 17 16.4477 17 17Z"
                fill="currentColor"
            />
        </svg>
    );
}
