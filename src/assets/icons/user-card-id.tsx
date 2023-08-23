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
                d="M6.16168 5H17.8388C18.3659 4.99998 18.8206 4.99997 19.1951 5.03057C19.5904 5.06288 19.9835 5.13422 20.3618 5.32698C20.9259 5.61439 21.3854 6.07316 21.6732 6.63805C21.8661 7.01653 21.9373 7.40983 21.9696 7.80511C22 8.17899 22 8.63286 22 9.1588V14.841C22 15.367 22 15.8209 21.9696 16.1949C21.9373 16.5902 21.8661 16.9835 21.6732 17.362C21.3854 17.927 20.9258 18.3856 20.3618 18.673C19.9835 18.8657 19.5904 18.9371 19.1951 18.9694C18.8205 19 18.3657 19 17.8384 19H6.16204C6.10968 19 6.05803 19 6.0071 19C6.00474 19 6.00237 19 6 19C5.99721 19 5.99443 19 5.99164 19C5.53615 18.9997 5.13874 18.9967 4.80496 18.9694C4.40959 18.9371 4.01623 18.8658 3.63781 18.673C3.07317 18.3853 2.61453 17.9264 2.32698 17.362C2.13418 16.9836 2.06287 16.5904 2.03057 16.195C1.99997 15.8204 1.99998 15.3656 2 14.8385V9.1614C1.99998 8.63426 1.99997 8.17951 2.03057 7.80496C2.06287 7.40962 2.13419 7.01642 2.32698 6.63805C2.61447 6.07382 3.07306 5.61473 3.63781 5.32698C4.01625 5.13416 4.40962 5.06286 4.80499 5.03057C5.17965 4.99997 5.63451 4.99998 6.16168 5ZM5.22408 16.9905C5.13035 16.9871 5.04572 16.9824 4.96782 16.9761C4.69598 16.9538 4.59519 16.9161 4.54579 16.891C4.35778 16.7952 4.20495 16.6424 4.109 16.454C4.08381 16.4046 4.04613 16.3039 4.02393 16.0322C4.00078 15.7488 4 15.3765 4 14.8V9.19995C4 8.6234 4.00078 8.25115 4.02393 7.96783C4.04612 7.6962 4.0838 7.59549 4.109 7.54603C4.205 7.35761 4.35789 7.20474 4.54579 7.109C4.59517 7.08383 4.69595 7.04614 4.9678 7.02393C5.25126 7.00078 5.62365 7 6.2002 7H17.8002C18.3768 7 18.7489 7.00078 19.0321 7.02393C19.3036 7.04612 19.4043 7.08377 19.4538 7.109C19.6424 7.20508 19.7956 7.35828 19.8912 7.54603C19.9164 7.59537 19.954 7.69598 19.9762 7.96767C19.9993 8.25105 20 8.6233 20 9.19995V14.8C20 15.3766 19.9993 15.7489 19.9762 16.0323C19.954 16.3041 19.9164 16.4047 19.8912 16.454C19.7956 16.6417 19.6425 16.7948 19.4538 16.891C19.4043 16.9162 19.3036 16.9539 19.0321 16.9761C18.7489 16.9992 18.3767 17 17.8002 17H12.7803C12.5416 16.4801 12.1327 16.0582 11.676 15.7537C10.9474 15.268 9.99832 15 9 15C8.00169 15 7.05265 15.268 6.32398 15.7537C5.87007 16.0563 5.46338 16.475 5.22408 16.9905ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12C9.55229 12 10 11.5523 10 11C10 10.4477 9.55229 10 9 10ZM6 11C6 9.34315 7.34315 8 9 8C10.6569 8 12 9.34315 12 11C12 12.6569 10.6569 14 9 14C7.34315 14 6 12.6569 6 11ZM14 11C14 10.4477 14.4477 10 15 10L18 10C18.5523 10 19 10.4477 19 11C19 11.5523 18.5523 12 18 12L15 12C14.4477 12 14 11.5523 14 11ZM13 14C13 13.4477 13.4477 13 14 13L18 13C18.5523 13 19 13.4477 19 14C19 14.5523 18.5523 15 18 15L14 15C13.4477 15 13 14.5523 13 14Z"
                fill="currentColor"
            />
        </svg>
    );
}