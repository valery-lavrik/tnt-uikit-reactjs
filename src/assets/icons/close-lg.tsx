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
                d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L12 10.5858L20.2929 2.29289C20.6835 1.90237 21.3166 1.90237 21.7072 2.29289C22.0977 2.68342 22.0977 3.31658 21.7072 3.70711L13.4142 12L21.7071 20.2928C22.0976 20.6834 22.0976 21.3165 21.7071 21.7071C21.3165 22.0976 20.6834 22.0976 20.2928 21.7071L12 13.4142L3.70711 21.7072C3.31658 22.0977 2.68342 22.0977 2.29289 21.7072C1.90237 21.3166 1.90237 20.6835 2.29289 20.2929L10.5858 12L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z"
                fill="currentColor"
            />
        </svg>
    );
}
