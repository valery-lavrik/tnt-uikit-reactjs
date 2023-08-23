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
                d="M7 8C7 7.44772 7.44772 7 8 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H10.4142L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L9 10.4142V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8Z"
                fill="currentColor"
            />
        </svg>
    );
}
