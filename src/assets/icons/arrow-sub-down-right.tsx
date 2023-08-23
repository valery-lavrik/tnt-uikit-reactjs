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
                d="M7 2C7.55229 2 8 2.44772 8 3V12.8C8 13.3766 8.00078 13.7488 8.02393 14.0322C8.04612 14.3038 8.0838 14.4045 8.109 14.454C8.20487 14.6422 8.35785 14.7951 8.54601 14.891C8.59546 14.9162 8.69617 14.9539 8.96784 14.9761C9.25117 14.9992 9.62345 15 10.2 15H15.5858L12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929C12.6834 9.90237 13.3166 9.90237 13.7071 10.2929L18.7071 15.2929C19.0976 15.6834 19.0976 16.3166 18.7071 16.7071L13.7071 21.7071C13.3166 22.0976 12.6834 22.0976 12.2929 21.7071C11.9024 21.3166 11.9024 20.6834 12.2929 20.2929L15.5858 17H10.1615C9.63432 17 9.17955 17 8.80497 16.9694C8.40963 16.9371 8.01641 16.8658 7.63803 16.673C7.07354 16.3854 6.6146 15.9265 6.32698 15.362C6.13419 14.9836 6.06287 14.5904 6.03057 14.195C5.99997 13.8205 5.99998 13.3657 6 12.8385L6 3C6 2.44772 6.44772 2 7 2Z"
                fill="currentColor"
            />
        </svg>
    );
}
