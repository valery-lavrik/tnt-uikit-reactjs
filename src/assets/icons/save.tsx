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
                d="M15.8579 4.03155C15.7641 4.00745 15.6511 4.00012 15.075 4.00012H6.2002C5.62365 4.00012 5.25126 4.00089 4.9678 4.02405C4.69595 4.04625 4.59517 4.08395 4.54579 4.10911C4.35789 4.20485 4.205 4.35773 4.109 4.54615C4.0838 4.59559 4.04612 4.69631 4.02393 4.96797C4.00078 5.2513 4 5.62358 4 6.20013V17.8001C4 18.3767 4.00078 18.7489 4.02393 19.0323C4.04612 19.3039 4.0838 19.4046 4.109 19.4541C4.20498 19.6425 4.35784 19.7953 4.54579 19.8911C4.59519 19.9163 4.69598 19.954 4.96782 19.9762C5.21703 19.9965 5.535 19.9996 6 20L6 17.1616C5.99998 16.6344 5.99997 16.1797 6.03057 15.8051C6.06287 15.4098 6.13419 15.0165 6.32698 14.6382C6.61447 14.0739 7.07306 13.6148 7.63781 13.3271C8.01625 13.1343 8.40962 13.063 8.80499 13.0307C9.17965 13.0001 9.6345 13.0001 10.1617 13.0001H13.8388C14.3659 13.0001 14.8206 13.0001 15.1951 13.0307C15.5904 13.063 15.9835 13.1343 16.3618 13.3271C16.9259 13.6145 17.3854 14.0733 17.6732 14.6382C17.8661 15.0167 17.9373 15.41 17.9696 15.8053C18 16.1792 18 16.6331 18 17.159L18 20C18.4652 19.9996 18.783 19.9965 19.0321 19.9762C19.3036 19.954 19.4043 19.9163 19.4538 19.8911C19.6424 19.795 19.7956 19.6418 19.8912 19.4541C19.9164 19.4048 19.954 19.3041 19.9762 19.0324C19.9993 18.749 20 18.3768 20 17.8001V9.22808C20 8.73075 19.9943 8.63242 19.9757 8.54949C19.9541 8.45283 19.9189 8.36111 19.8715 8.27683C19.8298 8.20292 19.7686 8.12647 19.4355 7.75636L16.7103 4.72841C16.3253 4.30062 16.2436 4.221 16.1628 4.1673C16.0696 4.10536 15.9665 4.05943 15.8579 4.03155ZM17.0048 22.0001H17.8384C18.3657 22.0001 18.8205 22.0002 19.1951 21.9695C19.5904 21.9372 19.9835 21.8659 20.3618 21.6731C20.9258 21.3857 21.3854 20.927 21.6732 20.3621C21.8661 19.9836 21.9373 19.5903 21.9696 19.195C22 18.8211 22 18.3672 22 17.8413V9.22808C22 9.20309 22 9.17829 22 9.15369C22.0003 8.77387 22.0006 8.44009 21.9276 8.11334C21.8638 7.82789 21.7587 7.55216 21.614 7.2953C21.45 7.00404 21.2267 6.75638 20.9733 6.47529C20.9564 6.4565 20.9393 6.43755 20.9221 6.41843L18.1969 3.39048C18.1773 3.36866 18.1578 3.34699 18.1385 3.3255C17.8461 3.00001 17.5889 2.71371 17.2698 2.50163C16.9899 2.31561 16.6807 2.17797 16.3554 2.09442C15.9848 1.99924 15.6007 1.99962 15.1646 2.00006C15.135 2.00009 15.1051 2.00012 15.075 2.00012L6.16168 2.00012C5.63451 2.0001 5.17965 2.00008 4.80499 2.03068C4.40962 2.06298 4.01625 2.13427 3.63781 2.3271C3.07306 2.61485 2.61447 3.07394 2.32698 3.63817C2.13419 4.01655 2.06287 4.40976 2.03057 4.80511C1.99997 5.17968 1.99998 5.63444 2 6.16158V17.8387C1.99998 18.3658 1.99997 18.8206 2.03057 19.1951C2.06287 19.5905 2.13419 19.9837 2.32698 20.3621C2.61449 20.9263 3.07311 21.3854 3.63781 21.6731C4.01623 21.8659 4.40959 21.9372 4.80496 21.9695C5.17973 22.0002 5.63473 22.0001 6.16209 22.0001L17 22.0001C17.0016 22.0001 17.0032 22.0001 17.0048 22.0001ZM16 20.0001V17.2001C16 16.6235 15.9993 16.2512 15.9762 15.9678C15.954 15.6961 15.9164 15.5955 15.8912 15.5461C15.7956 15.3584 15.6424 15.2052 15.4538 15.1091C15.4043 15.0839 15.3036 15.0462 15.0321 15.024C14.7489 15.0009 14.3768 15.0001 13.8002 15.0001H10.2002C9.62365 15.0001 9.25126 15.0009 8.9678 15.024C8.69595 15.0462 8.59517 15.0839 8.54579 15.1091C8.35789 15.2049 8.205 15.3577 8.109 15.5461C8.0838 15.5956 8.04612 15.6963 8.02393 15.968C8.00078 16.2513 8 16.6236 8 17.2001V20.0001H16ZM8 7.00012C8 6.44783 8.44772 6.00012 9 6.00012H15C15.5523 6.00012 16 6.44783 16 7.00012C16 7.5524 15.5523 8.00012 15 8.00012H9C8.44772 8.00012 8 7.5524 8 7.00012Z"
                fill="currentColor"
            />
        </svg>
    );
}
