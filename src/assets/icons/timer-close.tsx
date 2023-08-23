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
                d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2ZM18.2929 3.29289C18.6834 2.90237 19.3166 2.90237 19.7071 3.29289L21.7071 5.29289C22.0976 5.68342 22.0976 6.31658 21.7071 6.70711C21.3166 7.09763 20.6834 7.09763 20.2929 6.70711L18.2929 4.70711C17.9024 4.31658 17.9024 3.68342 18.2929 3.29289ZM12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6ZM3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13ZM9.29289 11.7071C8.90237 11.3166 8.90237 10.6834 9.29289 10.2929C9.68342 9.90237 10.3166 9.90237 10.7071 10.2929L12 11.5858L13.2929 10.2929C13.6834 9.90237 14.3165 9.90237 14.7071 10.2929C15.0976 10.6834 15.0976 11.3166 14.7071 11.7071L13.4142 13L14.7071 14.2929C15.0976 14.6834 15.0976 15.3166 14.7071 15.7071C14.3165 16.0976 13.6834 16.0976 13.2929 15.7071L12 14.4142L10.7071 15.7071C10.3166 16.0976 9.68342 16.0976 9.29289 15.7071C8.90237 15.3165 8.90237 14.6834 9.29289 14.2929L10.5858 13L9.29289 11.7071Z"
                fill="currentColor"
            />
        </svg>
    );
}
