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
                d="M9.25902 3.61166C9.96438 1.46279 13.0356 1.46277 13.741 3.61165L15.1334 7.85348L19.6392 7.85348C21.9218 7.85348 22.8709 10.7448 21.0242 12.0728L17.3789 14.6944L18.7713 18.9363C19.4766 21.0851 16.992 22.8721 15.1453 21.544L11.5 18.9224L7.85472 21.544C6.00805 22.872 3.52336 21.0851 4.22873 18.9363L5.6211 14.6944L1.97582 12.0729C0.129153 10.7448 1.07821 7.85348 3.36082 7.85348H7.86664L9.25902 3.61166ZM12.8924 8.57423L11.5 4.33241L10.1076 8.57423C9.79218 9.53524 8.88745 10.1859 7.86664 10.1859L3.36083 10.1859L7.00611 12.8075C7.83196 13.4014 8.17754 14.4542 7.86209 15.4152L6.46971 19.657L10.115 17.0354C10.9409 16.4415 12.0591 16.4415 12.885 17.0354L16.5303 19.657L15.1379 15.4152C14.8225 14.4542 15.168 13.4014 15.9939 12.8075L19.6392 10.1859H15.1334C14.1125 10.1859 13.2078 9.53524 12.8924 8.57423Z"
                fill="currentColor"
            />
        </svg>
    );
}