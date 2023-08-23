import React from 'react';
export default function Icon({
    className = '',
    style = {},
    onClick,
}: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: (...args: any) => void;
}) {
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
                d="M6.16168 3H17.8388C18.3659 2.99998 18.8206 2.99997 19.1951 3.03057C19.5904 3.06288 19.9835 3.13422 20.3618 3.32698C20.9259 3.61439 21.3854 4.07316 21.6732 4.63805C21.8661 5.01653 21.9373 5.40983 21.9696 5.80511C22 6.17899 22 6.63286 22 7.1588V16.841C22 17.367 22 17.8209 21.9696 18.1949C21.9373 18.5902 21.8661 18.9835 21.6732 19.362C21.3854 19.927 20.9258 20.3856 20.3618 20.673C19.9835 20.8657 19.5904 20.9371 19.1951 20.9694C18.8205 21 18.3657 21 17.8384 21H6.16209C5.63473 21 5.17973 21 4.80496 20.9694C4.40959 20.9371 4.01623 20.8658 3.63781 20.673C3.07317 20.3853 2.61453 19.9264 2.32698 19.362C2.13418 18.9836 2.06287 18.5904 2.03057 18.195C1.99997 17.8204 1.99998 17.3656 2 16.8385V7.1614C1.99998 6.63426 1.99997 6.17951 2.03057 5.80496C2.06287 5.40962 2.13419 5.01642 2.32698 4.63805C2.61447 4.07382 3.07306 3.61473 3.63781 3.32698C4.01625 3.13416 4.40962 3.06286 4.80499 3.03057C5.17965 2.99997 5.63451 2.99998 6.16168 3ZM4.9678 5.02393C4.69595 5.04614 4.59517 5.08383 4.54579 5.109C4.35789 5.20474 4.205 5.35761 4.109 5.54603C4.0838 5.59549 4.04612 5.6962 4.02393 5.96783C4.00078 6.25115 4 6.6234 4 7.19995V16.8C4 17.3765 4.00078 17.7488 4.02393 18.0322C4.04613 18.3039 4.08381 18.4046 4.109 18.454C4.20495 18.6424 4.35778 18.7952 4.54579 18.891C4.59519 18.9161 4.69598 18.9538 4.96782 18.9761C5.25127 18.9992 5.62367 19 6.2002 19H17.8002C18.3767 19 18.7489 18.9992 19.0321 18.9761C19.3036 18.9539 19.4043 18.9162 19.4538 18.891C19.6425 18.7948 19.7956 18.6417 19.8912 18.454C19.9164 18.4047 19.954 18.3041 19.9762 18.0323C19.9993 17.7489 20 17.3766 20 16.8V7.19995C20 6.6233 19.9993 6.25105 19.9762 5.96767C19.954 5.69598 19.9164 5.59537 19.8912 5.54603C19.7956 5.35828 19.6424 5.20508 19.4538 5.109C19.4043 5.08377 19.3036 5.04612 19.0321 5.02393C18.7489 5.00078 18.3768 5 17.8002 5H6.2002C5.62365 5 5.25126 5.00078 4.9678 5.02393ZM9 7C9.55229 7 10 7.44772 10 8C10 9.10457 10.8954 10 12 10C13.1046 10 14 9.10457 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 7.44772 8.44772 7 9 7Z"
                fill="currentColor"
            />
        </svg>
    );
}
