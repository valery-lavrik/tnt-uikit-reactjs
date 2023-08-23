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
                d="M7.16168 3H16.8388C17.3659 2.99998 17.8206 2.99997 18.1951 3.03057C18.5904 3.06288 18.9835 3.13422 19.3618 3.32698C19.9259 3.61439 20.3854 4.07316 20.6732 4.63805C20.8661 5.01654 20.9373 5.40986 20.9696 5.80515C21 6.17906 21 6.63297 21 7.15895L21 16.8411C21 17.3671 21 17.821 20.9696 18.1949C20.9373 18.5902 20.8661 18.9835 20.6732 19.362C20.3854 19.9269 19.9258 20.3856 19.3618 20.673C18.9835 20.8657 18.5904 20.9371 18.1951 20.9694C17.8205 21 17.3657 21 16.8384 21L7.16135 21C6.63433 21 6.17958 21 5.80501 20.9695C5.40965 20.9372 5.01626 20.8659 4.63781 20.6731C4.07304 20.3853 3.61446 19.9262 3.32698 19.362C3.13419 18.9836 3.06287 18.5904 3.03057 18.195C2.99997 17.8205 2.99998 17.3657 3 16.8386V7.16147C2.99998 6.63432 2.99997 6.17956 3.03057 5.80499C3.06287 5.40965 3.13419 5.01643 3.32698 4.63805C3.61447 4.07382 4.07306 3.61473 4.63781 3.32698C5.01625 3.13416 5.40962 3.06286 5.80499 3.03057C6.17965 2.99997 6.63451 2.99998 7.16168 3ZM16 19H16.8002C17.3767 19 17.7489 18.9992 18.0321 18.9761C18.3036 18.9539 18.4043 18.9162 18.4538 18.891C18.6424 18.7949 18.7956 18.6417 18.8912 18.454C18.9164 18.4046 18.954 18.304 18.9762 18.0323C18.9993 17.7489 19 17.3767 19 16.8L19 7.20001C19 6.62336 18.9993 6.2511 18.9762 5.9677C18.954 5.69598 18.9164 5.59537 18.8912 5.54603C18.7956 5.35828 18.6424 5.20508 18.4538 5.109C18.4043 5.08377 18.3036 5.04612 18.0321 5.02393C17.7489 5.00078 17.3768 5 16.8002 5H16L16 19ZM14 5L14 19L7.2002 19C6.62364 19 6.25125 18.9992 5.96778 18.9761C5.69592 18.9539 5.59516 18.9162 5.54579 18.891C5.35791 18.7953 5.20501 18.6424 5.109 18.454C5.0838 18.4045 5.04612 18.3038 5.02393 18.0322C5.00078 17.7488 5 17.3766 5 16.8V7.20001C5 6.62346 5.00078 6.25119 5.02393 5.96786C5.04612 5.6962 5.0838 5.59548 5.109 5.54603C5.205 5.35761 5.35788 5.20474 5.54579 5.109C5.59517 5.08383 5.69595 5.04614 5.9678 5.02393C6.25126 5.00078 6.62365 5 7.2002 5H14Z"
                fill="currentColor"
            />
        </svg>
    );
}
