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
                d="M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L10.4142 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H8C7.44772 17 7 16.5523 7 16V10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10V13.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
