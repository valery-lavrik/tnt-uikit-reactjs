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
                d="M7.16168 3H8.83876C9.36589 2.99998 9.82056 2.99997 10.1951 3.03057C10.5904 3.06288 10.9835 3.13422 11.3618 3.32698C11.9259 3.61439 12.3854 4.07316 12.6732 4.63805C12.8661 5.01653 12.9373 5.40983 12.9696 5.80511C13 6.179 13 6.63288 13 7.15884L13 8.10805C13.1935 7.98798 13.4014 7.88636 13.6341 7.81624C14.1988 7.64603 14.8011 7.64603 15.3658 7.81624C15.7414 7.92948 16.0528 8.12487 16.3431 8.34749C16.6171 8.55754 16.9257 8.83479 17.2813 9.15429L19.607 11.2437C19.6288 11.2633 19.6504 11.2827 19.6719 11.302C19.9981 11.5945 20.2848 11.8516 20.4974 12.1709C20.6835 12.4506 20.8217 12.7599 20.9055 13.0859C21.0009 13.4569 21.0005 13.8417 21.0001 14.2782C21 14.3079 21 14.3379 21 14.368V19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20C1 19.4477 1.44772 19 2 19H3L3 7.16141C2.99998 6.63426 2.99997 6.17951 3.03057 5.80496C3.06287 5.40962 3.13419 5.01642 3.32698 4.63805C3.61447 4.07382 4.07306 3.61473 4.63781 3.32698C5.01624 3.13416 5.40962 3.06286 5.80498 3.03057C6.17965 2.99997 6.6345 2.99998 7.16168 3ZM5 19H11V10.2505C11 10.2477 11 10.2449 11 10.2421V7.19995C11 6.6233 10.9993 6.25105 10.9762 5.96767C10.954 5.69598 10.9164 5.59537 10.8912 5.54603C10.7956 5.35828 10.6424 5.20508 10.4538 5.109C10.4043 5.08377 10.3036 5.04612 10.0321 5.02393C9.74892 5.00078 9.37676 5 8.8002 5H7.2002C6.62365 5 6.25126 5.00078 5.9678 5.02393C5.69595 5.04614 5.59517 5.08383 5.54579 5.109C5.35788 5.20474 5.205 5.35761 5.10899 5.54603C5.0838 5.59549 5.04612 5.6962 5.02393 5.96783C5.00078 6.25115 5 6.6234 5 7.19995V19ZM13 10.6919V19H19V14.368C19 13.7912 18.9927 13.6779 18.9685 13.584C18.9407 13.4758 18.8947 13.3726 18.8324 13.279C18.7786 13.1981 18.6989 13.1165 18.2704 12.7315L15.9704 10.6652C15.5808 10.3152 15.3306 10.0914 15.1262 9.93468C14.9317 9.78552 14.8402 9.74671 14.7885 9.73113C14.6003 9.6744 14.3995 9.6744 14.2113 9.73113C14.1597 9.74668 14.0683 9.78544 13.8738 9.9346C13.6695 10.0913 13.4193 10.3151 13.0297 10.6652L13 10.6919Z"
                fill="currentColor"
            />
        </svg>
    );
}