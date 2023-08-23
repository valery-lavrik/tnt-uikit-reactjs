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
                d="M7.16168 3H16.8388C17.3659 2.99998 17.8206 2.99997 18.1951 3.03057C18.5904 3.06288 18.9835 3.13422 19.3618 3.32698C19.9259 3.61439 20.3854 4.07316 20.6732 4.63805C20.8661 5.01654 20.9373 5.40986 20.9696 5.80515C21 6.17906 21 6.63297 21 7.15895V12.6745C21 12.7029 21 12.731 21.0001 12.7589C21.0001 12.8321 21.0002 12.9038 20.9998 12.9741C21 12.9827 21.0001 12.9913 21.0001 13C21.0001 13.0146 20.9998 13.0291 20.9992 13.0435C20.9958 13.3365 20.9807 13.6072 20.9172 13.8719C20.8435 14.1789 20.7217 14.4715 20.5577 14.7391C20.3699 15.0455 20.1158 15.2992 19.8258 15.5887C19.8074 15.6071 19.7888 15.6257 19.7701 15.6444L15.6446 19.7698C15.6248 19.7896 15.6052 19.8093 15.5858 19.8287C15.2983 20.1168 15.0449 20.3707 14.7393 20.5579C14.4705 20.7227 14.1774 20.8438 13.8717 20.9171C13.6059 20.981 13.3343 20.9959 13.0398 20.9992C13.0266 20.9997 13.0133 21 13 21C12.9926 21 12.9853 20.9999 12.9779 20.9997C12.9062 21.0002 12.8331 21.0001 12.7583 21.0001C12.7307 21 12.7028 21 12.6747 21H7.16209C6.63473 21 6.17973 21 5.80496 20.9694C5.40959 20.9371 5.01623 20.8658 4.63781 20.673C4.07311 20.3853 3.61449 19.9262 3.32698 19.362C3.13419 18.9836 3.06287 18.5904 3.03057 18.195C2.99997 17.8205 2.99998 17.3657 3 16.8386V7.16147C2.99998 6.63432 2.99997 6.17956 3.03057 5.80499C3.06287 5.40965 3.13419 5.01643 3.32698 4.63805C3.61447 4.07382 4.07306 3.61473 4.63781 3.32698C5.01625 3.13416 5.40962 3.06286 5.80499 3.03057C6.17965 2.99997 6.63451 2.99998 7.16168 3ZM14 18.5842C14.0615 18.5239 14.1368 18.4492 14.2304 18.3556L18.3559 14.2302C18.4493 14.1367 18.524 14.0615 18.5841 14H14.6001C14.3036 14 14.1413 14.0008 14.0246 14.0103C14.02 14.0107 14.0156 14.0111 14.0114 14.0114C14.0111 14.0156 14.0107 14.02 14.0103 14.0246C14.0008 14.1412 14 14.3034 14 14.6V18.5842ZM19 12L14.5682 12C14.3158 12 14.07 11.9999 13.8618 12.0169C13.6332 12.0356 13.3634 12.0797 13.0919 12.218C12.7153 12.4099 12.4096 12.716 12.218 13.092C12.0797 13.3634 12.0356 13.6332 12.0169 13.8618C11.9999 14.0699 12 14.3157 12 14.5681L12 19H7.2002C6.62367 19 6.25127 18.9992 5.96782 18.9761C5.69598 18.9538 5.59519 18.9161 5.54579 18.891C5.35784 18.7952 5.20498 18.6424 5.109 18.454C5.0838 18.4045 5.04612 18.3038 5.02393 18.0322C5.00078 17.7488 5 17.3766 5 16.8V7.20001C5 6.62346 5.00078 6.25119 5.02393 5.96786C5.04612 5.6962 5.0838 5.59548 5.109 5.54603C5.205 5.35761 5.35789 5.20474 5.54579 5.109C5.59517 5.08383 5.69595 5.04614 5.9678 5.02393C6.25126 5.00078 6.62365 5 7.2002 5H16.8002C17.3768 5 17.7489 5.00078 18.0321 5.02393C18.3036 5.04612 18.4043 5.08377 18.4538 5.109C18.6424 5.20508 18.7956 5.35828 18.8912 5.54603C18.9164 5.59537 18.954 5.69598 18.9762 5.9677C18.9993 6.2511 19 6.62336 19 7.20001V12Z"
                fill="currentColor"
            />
        </svg>
    );
}
