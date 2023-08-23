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
                d="M12.4143 4.99995L11.1759 3.76147C11.1641 3.74974 11.1521 3.73765 11.1398 3.72527C11.0059 3.59066 10.8372 3.42109 10.6309 3.29465C10.4509 3.18434 10.2552 3.10391 10.0523 3.05521C9.817 2.99871 9.57782 2.99935 9.38791 2.99985C9.37047 2.9999 9.35344 2.99995 9.33687 2.99995H4.59961C4.58897 2.99995 4.57833 2.99995 4.5677 2.99994C4.31534 2.99991 4.0696 2.99988 3.86149 3.0169C3.63286 3.03558 3.36326 3.07968 3.09191 3.21793C2.71533 3.40981 2.40961 3.71591 2.21799 4.09198C2.0797 4.36339 2.03563 4.63311 2.01695 4.86171C1.99994 5.06986 1.99997 5.31564 2 5.56802C2 5.57864 2.00001 5.58928 2.00001 5.59992L2 16.8385C1.99999 17.3656 1.99997 17.8204 2.03057 18.195C2.06288 18.5903 2.13419 18.9835 2.32699 19.3619C2.6145 19.9262 3.07311 20.3852 3.63781 20.6729C4.01623 20.8658 4.40959 20.9371 4.80497 20.9694C5.17974 21 5.63473 21 6.16209 20.9999H7.0002C7.55249 20.9999 8.0002 20.5522 8.0002 19.9999C8.0002 19.4477 7.55249 18.9999 7.0002 18.9999H6.2002C5.62367 18.9999 5.25128 18.9992 4.96783 18.976C4.69598 18.9538 4.59519 18.9161 4.54579 18.8909C4.35785 18.7952 4.20498 18.6423 4.109 18.4539C4.08381 18.4045 4.04613 18.3038 4.02393 18.0321C4.00078 17.7488 4.00001 17.3765 4.00001 16.7999V6.99995H18C18.4796 6.99995 18.7893 7.00049 19.0262 7.01666C19.2542 7.03221 19.3411 7.05883 19.3827 7.07607C19.6276 7.17753 19.8223 7.37214 19.9238 7.61725C19.941 7.65886 19.9676 7.74569 19.9832 7.97369C19.9994 8.21067 19.9999 8.52031 19.9999 8.99993C19.9999 9.55222 20.4476 9.99993 20.9999 9.99993C21.5522 9.99993 21.9999 9.55222 21.9999 8.99993V8.96794C21.9999 8.52929 21.9999 8.15081 21.9786 7.83755C21.956 7.50772 21.9065 7.17781 21.7715 6.85188C21.4671 6.11688 20.8832 5.53282 20.1481 5.22831C19.8221 5.0933 19.4922 5.0438 19.1624 5.0213C18.8491 4.99992 18.4706 4.99993 18.032 4.99995L12.4143 4.99995ZM17.7929 10.2928C18.1834 9.90232 18.8166 9.90232 19.2071 10.2928L21.7071 12.7928C22.0976 13.1834 22.0976 13.8165 21.7071 14.2071L14.2071 21.7071C14.0196 21.8946 13.7652 21.9999 13.5 21.9999H11C10.4477 21.9999 10 21.5522 10 20.9999V18.4999C10 18.2347 10.1054 17.9804 10.2929 17.7928L17.7929 10.2928ZM12 18.9142V19.9999H13.0858L16.8358 16.2499L15.75 15.1642L12 18.9142ZM17.1642 13.7499L18.25 14.8357L19.5858 13.4999L18.5 12.4142L17.1642 13.7499Z"
                fill="currentColor"
            />
        </svg>
    );
}
