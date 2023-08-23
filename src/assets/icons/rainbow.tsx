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
                d="M12 7C7.58172 7 4 10.5817 4 15V17C4 17.5523 3.55228 18 3 18C2.44772 18 2 17.5523 2 17V15C2 9.47715 6.47715 5 12 5C17.5228 5 22 9.47715 22 15V17C22 17.5523 21.5523 18 21 18C20.4477 18 20 17.5523 20 17V15C20 10.5817 16.4183 7 12 7ZM12 10C9.23858 10 7 12.2386 7 15V17C7 17.5523 6.55228 18 6 18C5.44772 18 5 17.5523 5 17V15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15V17C19 17.5523 18.5523 18 18 18C17.4477 18 17 17.5523 17 17V15C17 12.2386 14.7614 10 12 10ZM12 13C10.8954 13 10 13.8954 10 15V17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17V15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V15C14 13.8954 13.1046 13 12 13Z"
                fill="currentColor"
            />
        </svg>
    );
}
