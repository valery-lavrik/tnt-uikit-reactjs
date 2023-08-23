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
                d="M10.968 2H13.032C13.4706 1.99999 13.8491 1.99998 14.1624 2.02135C14.4922 2.04386 14.8221 2.09336 15.1481 2.22836C15.8832 2.53288 16.4671 3.11693 16.7715 3.85194C16.9065 4.1778 16.9561 4.50766 16.9786 4.83752C16.9822 4.88987 16.9851 4.94404 16.9876 5H20C20.5523 5 21 5.44772 21 6C21 6.55229 20.5523 7 20 7H19L19 17.8411C19 18.3671 19 18.821 18.9696 19.1949C18.9373 19.5902 18.8661 19.9835 18.6732 20.362C18.3854 20.927 17.9257 21.3856 17.3618 21.673C16.9835 21.8657 16.5904 21.9371 16.1951 21.9694C15.8205 22 15.3657 22 14.8384 22H9.16208C8.63472 22 8.17973 22 7.80496 21.9694C7.40959 21.9371 7.01623 21.8658 6.63781 21.673C6.07317 21.3853 5.61452 20.9264 5.32698 20.362C5.13418 19.9836 5.06287 19.5904 5.03057 19.1951C4.99997 18.8205 4.99998 18.3657 5 17.8385L5 7H4C3.44772 7 3 6.55229 3 6C3 5.44772 3.44772 5 4 5H7.01233C7.01481 4.94407 7.01778 4.88993 7.02135 4.83761C7.04385 4.50778 7.09336 4.17787 7.22836 3.85194C7.53275 3.11707 8.11639 2.53294 8.85169 2.22836C9.17766 2.09334 9.50766 2.04385 9.8375 2.02135C10.1508 1.99998 10.5294 1.99999 10.968 2ZM9.015 5H14.985C14.9844 4.99118 14.9838 4.98247 14.9832 4.97385C14.9677 4.74587 14.941 4.65898 14.9238 4.6173C14.8222 4.37219 14.6276 4.17758 14.3827 4.07612C14.3411 4.05888 14.2542 4.03227 14.0262 4.01671C13.7893 4.00054 13.4796 4 13 4H11C10.5204 4 10.2107 4.00054 9.97362 4.01671C9.7455 4.03227 9.65864 4.0589 9.61706 4.07612C9.37225 4.17752 9.17771 4.37205 9.07612 4.6173C9.05888 4.65892 9.03227 4.74575 9.01671 4.97375C9.01612 4.9824 9.01555 4.99115 9.015 5ZM7 7V17.8C7 18.3766 7.00078 18.7488 7.02393 19.0322C7.04612 19.3039 7.0838 19.4046 7.10899 19.454C7.20494 19.6424 7.35778 19.7952 7.54579 19.891C7.59519 19.9161 7.69598 19.9538 7.96782 19.9761C8.25127 19.9992 8.62367 20 9.2002 20H14.8002C15.3767 20 15.7489 19.9992 16.0321 19.9761C16.3036 19.9539 16.4043 19.9162 16.4538 19.891C16.6425 19.7948 16.7956 19.6417 16.8912 19.454C16.9164 19.4047 16.954 19.3041 16.9762 19.0324C16.9993 18.7489 17 18.3767 17 17.8V7H7ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z"
                fill="currentColor"
            />
        </svg>
    );
}