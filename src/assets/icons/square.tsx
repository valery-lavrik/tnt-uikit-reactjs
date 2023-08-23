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
                d="M6.16168 2H17.8388C18.3659 1.99998 18.8206 1.99997 19.1951 2.03057C19.5904 2.06288 19.9835 2.13422 20.3618 2.32698C20.9259 2.61439 21.3854 3.07316 21.6732 3.63805C21.8661 4.01653 21.9373 4.40983 21.9696 4.80511C22 5.17899 22 5.63286 22 6.1588V17.841C22 18.367 22 18.8209 21.9696 19.1949C21.9373 19.5902 21.8661 19.9835 21.6732 20.362C21.3854 20.927 20.9257 21.3856 20.3618 21.673C19.9835 21.8657 19.5904 21.9371 19.1951 21.9694C18.8205 22 18.3657 22 17.8384 22H6.16209C5.63473 22 5.17973 22 4.80496 21.9694C4.40959 21.9371 4.01623 21.8658 3.63781 21.673C3.07317 21.3853 2.61453 20.9264 2.32698 20.362C2.13418 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8204 1.99998 18.3656 2 17.8385V6.1614C1.99998 5.63426 1.99997 5.17951 2.03057 4.80496C2.06287 4.40962 2.13419 4.01642 2.32698 3.63805C2.61447 3.07382 3.07306 2.61473 3.63781 2.32698C4.01625 2.13416 4.40962 2.06286 4.80499 2.03057C5.17965 1.99997 5.63451 1.99998 6.16168 2ZM4.9678 4.02393C4.69595 4.04614 4.59517 4.08383 4.54579 4.109C4.35789 4.20474 4.205 4.35761 4.109 4.54603C4.0838 4.59549 4.04612 4.6962 4.02393 4.96783C4.00078 5.25115 4 5.6234 4 6.19995V17.8C4 18.3765 4.00078 18.7488 4.02393 19.0322C4.04613 19.3039 4.08381 19.4046 4.109 19.454C4.20494 19.6424 4.35778 19.7952 4.54579 19.891C4.59519 19.9161 4.69598 19.9538 4.96782 19.9761C5.25127 19.9992 5.62367 20 6.2002 20H17.8002C18.3767 20 18.7489 19.9992 19.0321 19.9761C19.3036 19.9539 19.4043 19.9162 19.4538 19.891C19.6425 19.7948 19.7956 19.6417 19.8912 19.454C19.9163 19.4047 19.954 19.3041 19.9762 19.0323C19.9993 18.7489 20 18.3766 20 17.8V6.19995C20 5.6233 19.9993 5.25105 19.9762 4.96767C19.954 4.69598 19.9164 4.59537 19.8912 4.54603C19.7956 4.35828 19.6424 4.20508 19.4538 4.109C19.4043 4.08377 19.3036 4.04612 19.0321 4.02393C18.7489 4.00078 18.3768 4 17.8002 4H6.2002C5.62365 4 5.25126 4.00078 4.9678 4.02393ZM12 7.44995C12.5523 7.44995 13 7.89767 13 8.44995V12.45C13 13.0022 12.5523 13.45 12 13.45C11.4477 13.45 11 13.0022 11 12.45V8.44995C11 7.89767 11.4477 7.44995 12 7.44995ZM10.9502 15.45C10.9502 14.8977 11.3979 14.45 11.9502 14.45H12.0498C12.6021 14.45 13.0498 14.8977 13.0498 15.45V15.55C13.0498 15.8152 12.9444 16.0696 12.7568 16.2571C12.5692 16.4447 12.3148 16.55 12.0496 16.55L11.9499 16.5499C11.3978 16.5498 10.9502 16.1021 10.9502 15.5499V15.45Z"
                fill="currentColor"
            />
        </svg>
    );
}
