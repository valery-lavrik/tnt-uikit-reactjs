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
                d="M10.1617 2H17.8388C18.3659 1.99998 18.8206 1.99997 19.1951 2.03057C19.5904 2.06288 19.9835 2.13422 20.3618 2.32698C20.9259 2.61439 21.3854 3.07316 21.6732 3.63805C21.866 4.01643 21.9373 4.40965 21.9696 4.805C22.0002 5.17956 22.0002 5.63432 22.0002 6.16146V13.8386C22.0002 14.3657 22.0002 14.8205 21.9696 15.195C21.9373 15.5904 21.866 15.9836 21.6732 16.362C21.3854 16.9269 20.9258 17.3856 20.3618 17.673C19.9835 17.8657 19.5904 17.9371 19.1951 17.9694C18.8205 18 18.3657 18 17.8384 18H10.162C9.6347 18 9.17972 18 8.80496 17.9694C8.40958 17.9371 8.01623 17.8658 7.6378 17.673C7.0731 17.3853 6.61449 16.9262 6.32698 16.362C6.13419 15.9836 6.06287 15.5904 6.03057 15.195C5.99996 14.8205 5.99998 14.3657 6 13.8386V6.16147C5.99998 5.63432 5.99996 5.17956 6.03057 4.80499C6.06287 4.40965 6.13418 4.01643 6.32698 3.63805C6.61447 3.07382 7.07306 2.61473 7.6378 2.32698C8.01624 2.13416 8.40961 2.06286 8.80498 2.03057C9.17965 1.99997 9.6345 1.99998 10.1617 2ZM8.96779 4.02393C8.69595 4.04614 8.59517 4.08383 8.54579 4.109C8.35788 4.20474 8.205 4.35761 8.10899 4.54603C8.0838 4.59548 8.04612 4.6962 8.02392 4.96786C8.00078 5.25119 8 5.62346 8 6.20001V13.8C8 14.3766 8.00078 14.7488 8.02392 15.0322C8.04612 15.3038 8.0838 15.4045 8.10899 15.454C8.20497 15.6424 8.35784 15.7952 8.54578 15.891C8.59519 15.9161 8.69598 15.9538 8.96782 15.9761C9.25127 15.9992 9.62366 16 10.2002 16H17.8002C18.3767 16 18.7489 15.9992 19.0321 15.9761C19.3036 15.9539 19.4043 15.9162 19.4538 15.891C19.6424 15.7949 19.7956 15.6417 19.8912 15.454C19.9164 15.4045 19.9541 15.3038 19.9763 15.0322C19.9994 14.7488 20.0002 14.3765 20.0002 13.8V6.20002C20.0002 5.62347 19.9994 5.2512 19.9763 4.96786C19.9541 4.6962 19.9164 4.59548 19.8912 4.54603C19.7956 4.35828 19.6424 4.20508 19.4538 4.109C19.4043 4.08377 19.3036 4.04612 19.0321 4.02393C18.7489 4.00078 18.3768 4 17.8002 4H10.2002C9.62365 4 9.25125 4.00078 8.96779 4.02393ZM16.2929 7.2929C16.6834 6.90237 17.3166 6.90237 17.7071 7.2929C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711L13.7071 12.7071C13.3166 13.0976 12.6834 13.0976 12.2929 12.7071L10.2929 10.7071C9.90237 10.3166 9.90237 9.68342 10.2929 9.2929C10.6834 8.90237 11.3166 8.90237 11.7071 9.2929L13 10.5858L16.2929 7.2929ZM3 8C3.55228 8 4 8.44772 4 9V19.4C4 19.6965 4.00078 19.8588 4.0103 19.9754C4.01068 19.98 4.01106 19.9844 4.01144 19.9885C4.01559 19.9889 4.01999 19.9893 4.02462 19.9897C4.14127 19.9992 4.30359 20 4.6001 20H15.0001C15.5524 20 16.0001 20.4477 16.0001 21C16.0001 21.5523 15.5524 22 15.0001 22L4.5684 22C4.31592 22 4.07002 22.0001 3.86176 21.983C3.63319 21.9644 3.36337 21.9203 3.09191 21.782C2.71543 21.5902 2.40966 21.2842 2.21798 20.908C2.07968 20.6366 2.03562 20.3668 2.01694 20.1382C1.99994 19.9301 1.99996 19.6843 1.99999 19.4319L2 9C2 8.44772 2.44771 8 3 8Z"
                fill="currentColor"
            />
        </svg>
    );
}
