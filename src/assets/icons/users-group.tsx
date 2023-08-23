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
                d="M8 6C6.89543 6 6 6.89543 6 8C6 8.59224 6.25615 9.12333 6.66691 9.49097C7.07844 9.8593 7.11346 10.4915 6.74514 10.903C6.37681 11.3145 5.74461 11.3496 5.33309 10.9812C4.51635 10.2502 4 9.18476 4 8C4 5.79086 5.79086 4 8 4C9.02383 4 9.9599 4.38597 10.6669 5.01876C11.0784 5.38708 11.1135 6.01928 10.7451 6.43081C10.3768 6.84233 9.74461 6.87735 9.33309 6.50903C8.97858 6.19174 8.51288 6 8 6ZM13.3331 5.01876C14.0401 4.38597 14.9762 4 16 4C18.2091 4 20 5.79086 20 8C20 9.18476 19.4836 10.2502 18.6669 10.9812C18.2554 11.3496 17.6232 11.3145 17.2549 10.903C16.8865 10.4915 16.9216 9.8593 17.3331 9.49097C17.7438 9.12333 18 8.59224 18 8C18 6.89543 17.1046 6 16 6C15.4871 6 15.0214 6.19174 14.6669 6.50903C14.2554 6.87735 13.6232 6.84233 13.2549 6.43081C12.8865 6.01928 12.9216 5.38708 13.3331 5.01876ZM12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9ZM8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11ZM6.96731 13.9959C7.10736 14.5302 6.78782 15.0768 6.25358 15.2168C5.48611 15.418 4.8906 15.7351 4.50645 16.0805C4.12503 16.4235 4 16.7434 4 16.9999C4 17.5522 3.55228 17.9999 3 17.9999C2.44772 17.9999 2 17.5522 2 16.9999C2 16.0262 2.49202 15.2023 3.16912 14.5934C3.8435 13.987 4.74799 13.5439 5.74642 13.2822C6.28065 13.1421 6.82726 13.4617 6.96731 13.9959ZM17.0327 13.9959C17.1727 13.4617 17.7193 13.1421 18.2536 13.2822C19.252 13.5439 20.1565 13.987 20.8309 14.5934C21.508 15.2023 22 16.0262 22 16.9999C22 17.5522 21.5523 17.9999 21 17.9999C20.4477 17.9999 20 17.5522 20 16.9999C20 16.7434 19.875 16.4235 19.4935 16.0805C19.1094 15.7351 18.5139 15.418 17.7464 15.2168C17.2122 15.0768 16.8926 14.5302 17.0327 13.9959ZM7.94997 17.0212C9.03492 16.3702 10.4692 16 12 16C13.5308 16 14.9651 16.3702 16.05 17.0212C17.1151 17.6602 18 18.6823 18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.6608 15.7656 19.1829 15.021 18.7362C14.2963 18.3014 13.2306 18 12 18C10.7694 18 9.70366 18.3014 8.97896 18.7362C8.23436 19.1829 8 19.6608 8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 18.6823 6.88493 17.6602 7.94997 17.0212Z"
                fill="currentColor"
            />
        </svg>
    );
}
