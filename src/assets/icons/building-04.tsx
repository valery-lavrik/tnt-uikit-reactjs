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
                d="M7.16168 2H10.8388C11.3659 1.99998 11.8206 1.99997 12.1951 2.03057C12.5904 2.06288 12.9835 2.13422 13.3618 2.32698C13.9259 2.61439 14.3854 3.07316 14.6732 3.63805C14.8661 4.01653 14.9373 4.40983 14.9696 4.80511C15 5.179 15 5.63288 15 6.15884L15 8.17288C15.2777 8.07903 15.5578 8.04046 15.8378 8.02135C16.1511 7.99998 16.5296 7.99999 16.9682 8H17.0322C17.4709 7.99999 17.8493 7.99998 18.1625 8.02135C18.4923 8.04386 18.8222 8.09337 19.1481 8.22836C19.8832 8.53288 20.4671 9.11693 20.7715 9.85194C20.9065 10.1778 20.9561 10.5077 20.9786 10.8375C21 11.1512 21 11.5301 21 11.9695V19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20C1 19.4477 1.44772 19 2 19H3L3 6.16141C2.99998 5.63426 2.99997 5.17951 3.03057 4.80496C3.06287 4.40962 3.13419 4.01642 3.32698 3.63805C3.61447 3.07382 4.07306 2.61473 4.63781 2.32698C5.01624 2.13416 5.40962 2.06286 5.80498 2.03057C6.17965 1.99997 6.6345 1.99998 7.16168 2ZM5 19H13V11.968C13 11.9497 13 11.9316 13 11.9135V6.19995C13 5.6233 12.9993 5.25105 12.9762 4.96767C12.954 4.69598 12.9164 4.59537 12.8912 4.54603C12.7956 4.35828 12.6424 4.20508 12.4538 4.109C12.4043 4.08377 12.3036 4.04612 12.0321 4.02393C11.7489 4.00078 11.3768 4 10.8002 4H7.2002C6.62365 4 6.25126 4.00078 5.9678 4.02393C5.69595 4.04614 5.59517 4.08383 5.54579 4.109C5.35788 4.20474 5.205 4.35761 5.10899 4.54603C5.0838 4.59549 5.04612 4.6962 5.02393 4.96783C5.00078 5.25115 5 5.6234 5 6.19995V19ZM15 19H19V12C19 11.5204 18.9994 11.2108 18.9832 10.9738C18.9677 10.7459 18.941 10.659 18.9238 10.6173C18.8222 10.3722 18.6276 10.1776 18.3827 10.0761C18.341 10.0589 18.2542 10.0323 18.0263 10.0167C17.7894 10.0005 17.4799 10 17.0002 10C16.5206 10 16.211 10.0005 15.974 10.0167C15.746 10.0323 15.6592 10.0589 15.6175 10.0761C15.3723 10.1777 15.1775 10.3725 15.0761 10.6173C15.0589 10.6589 15.0323 10.7457 15.0167 10.9738C15.0005 11.2107 15 11.5204 15 12V19ZM6 7C6 6.44772 6.44772 6 7 6L11 6C11.5523 6 12 6.44772 12 7C12 7.55229 11.5523 8 11 8L7 8C6.44772 8 6 7.55229 6 7ZM6 10C6 9.44772 6.44772 9 7 9H11C11.5523 9 12 9.44772 12 10C12 10.5523 11.5523 11 11 11H7C6.44772 11 6 10.5523 6 10Z"
                fill="currentColor"
            />
        </svg>
    );
}