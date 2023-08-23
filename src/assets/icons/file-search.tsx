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
                d="M13.066 2.00225C13.0442 2.00083 13.0222 2.00011 13 2.00011C12.9879 2.00011 12.9759 2.00033 12.9639 2.00075C12.8747 1.99988 12.7835 1.99996 12.6899 2.00006C12.6609 2.00008 12.6316 2.00011 12.6021 2.00011L8.16168 2.00011C7.63451 2.00009 7.17965 2.00008 6.80499 2.03068C6.40962 2.06297 6.01625 2.13427 5.63781 2.32709C5.07306 2.61484 4.61447 3.07394 4.32698 3.63816C4.13419 4.01654 4.06287 4.40976 4.03057 4.8051C3.99997 5.17967 3.99998 5.63443 4 6.16158V17.8387C3.99998 18.3658 3.99997 18.8206 4.03057 19.1951C4.06287 19.5905 4.13419 19.9837 4.32698 20.3621C4.61449 20.9263 5.07311 21.3854 5.63781 21.6731C6.01623 21.8659 6.40959 21.9372 6.80496 21.9695C7.17973 22.0001 7.63473 22.0001 8.16209 22.0001H15.8384C16.3657 22.0001 16.8205 22.0001 17.1951 21.9695C17.5904 21.9372 17.9835 21.8659 18.3618 21.6731C18.9258 21.3857 19.3854 20.927 19.6732 20.3621C19.8661 19.9836 19.9373 19.5903 19.9696 19.195C20 18.8211 20 18.3672 20 17.8412L20 9.6541C20 9.62672 20 9.59957 20.0001 9.57264C20.0002 9.40834 20.0004 9.25213 19.9946 9.10121C19.9979 9.06796 19.9996 9.03424 19.9996 9.00011C19.9996 8.9094 19.9875 8.82151 19.9649 8.73797C19.9548 8.66372 19.9418 8.59026 19.9252 8.51722C19.8588 8.22602 19.7494 7.94566 19.5996 7.68573C19.4296 7.39084 19.1983 7.14148 18.9364 6.85917C18.9185 6.8398 18.9003 6.82027 18.8821 6.80056L15.684 3.34658C15.6642 3.32525 15.6446 3.30407 15.6252 3.28307C15.334 2.96794 15.0776 2.6905 14.762 2.48526C14.4847 2.30484 14.1794 2.17192 13.8598 2.09127C13.6056 2.02713 13.3454 2.00789 13.066 2.00225ZM17.2671 8.00011L14.2164 4.7054C14.1301 4.61219 14.0591 4.53604 14 4.4734V7.40011C14 7.69664 14.0008 7.8589 14.0103 7.97549C14.0107 7.98014 14.0111 7.98453 14.0115 7.98868C14.0155 7.98906 14.0199 7.98943 14.0244 7.98981C14.1409 7.99933 14.3031 8.00011 14.5996 8.00011H17.2671ZM18 10.0001V17.8001C18 18.3768 17.9993 18.749 17.9762 19.0324C17.954 19.3041 17.9164 19.4048 17.8912 19.4541C17.7956 19.6418 17.6424 19.795 17.4538 19.8911C17.4043 19.9163 17.3036 19.954 17.0321 19.9762C16.7489 19.9993 16.3767 20.0001 15.8002 20.0001H8.2002C7.62367 20.0001 7.25127 19.9993 6.96782 19.9762C6.69598 19.954 6.59519 19.9163 6.54579 19.8911C6.35784 19.7953 6.20498 19.6425 6.109 19.4541C6.0838 19.4046 6.04612 19.3039 6.02393 19.0323C6.00078 18.7489 6 18.3767 6 17.8001V6.20012C6 5.62357 6.00078 5.2513 6.02393 4.96797C6.04612 4.69631 6.0838 4.59559 6.109 4.54614C6.205 4.35772 6.35789 4.20485 6.54579 4.10911C6.59517 4.08394 6.69595 4.04625 6.9678 4.02404C7.25126 4.00089 7.62365 4.00011 8.2002 4.00011H12V7.40011C12 7.41076 12 7.42139 12 7.43201C12 7.68439 11.9999 7.93019 12.0169 8.13835C12.0356 8.36694 12.0797 8.63669 12.218 8.90812C12.4097 9.28429 12.7154 9.59029 13.0919 9.78211C13.3632 9.92036 13.6328 9.96446 13.8615 9.98315C14.0696 10.0002 14.3154 10.0001 14.5678 10.0001L18 10.0001ZM11.5 13.0001C10.6716 13.0001 10 13.6717 10 14.5001C10 15.3285 10.6716 16.0001 11.5 16.0001C12.3284 16.0001 13 15.3285 13 14.5001C13 13.6717 12.3284 13.0001 11.5 13.0001ZM8 14.5001C8 12.5671 9.56701 11.0001 11.5 11.0001C13.433 11.0001 15 12.5671 15 14.5001C15 15.1031 14.8475 15.6704 14.5791 16.1657L15.7065 17.2931C16.097 17.6836 16.097 18.3168 15.7065 18.7073C15.316 19.0979 14.6828 19.0979 14.2923 18.7073L13.1646 17.5797C12.6696 17.8478 12.1026 18.0001 11.5 18.0001C9.56701 18.0001 8 16.4331 8 14.5001Z"
                fill="currentColor"
            />
        </svg>
    );
}