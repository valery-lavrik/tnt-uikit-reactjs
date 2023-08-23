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
                d="M6 7C6 6.44772 6.44772 6 7 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H9.41421L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L8 9.41421V15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15V7Z"
                fill="currentColor"
            />
        </svg>
    );
}
