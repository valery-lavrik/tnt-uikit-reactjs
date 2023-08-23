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
                d="M12.4145 5.0001L11.6446 4.23025C11.6249 4.21053 11.6054 4.19096 11.586 4.17154C11.2984 3.88341 11.0449 3.62948 10.7393 3.4422C10.471 3.27778 10.1784 3.15651 9.8722 3.08299C9.52375 2.99934 9.16473 2.99967 8.75784 3.00005C8.73029 3.00008 8.70252 3.0001 8.67452 3.0001H5C3.34315 3.0001 2 4.34325 2 6.0001L2 16.8386C1.99998 17.3658 1.99997 17.8206 2.03057 18.1951C2.06287 18.5905 2.13419 18.9837 2.32698 19.3621C2.61449 19.9263 3.07311 20.3854 3.63781 20.6731C4.01623 20.8659 4.40959 20.9372 4.80496 20.9695C5.17973 21.0001 5.63473 21.0001 6.16209 21.0001H17.8384C18.3657 21.0001 18.8205 21.0001 19.1951 20.9695C19.5904 20.9372 19.9835 20.8658 20.3618 20.6731C20.9258 20.3857 21.3854 19.927 21.6732 19.3621C21.866 18.9837 21.9373 18.5905 21.9696 18.1951C22.0003 17.8205 22.0002 17.3657 22.0002 16.8386L22.0002 9.16156C22.0002 8.63442 22.0002 8.17966 21.9696 7.8051C21.9373 7.40975 21.866 7.01653 21.6732 6.63815C21.3854 6.07326 20.9259 5.61449 20.3618 5.32708C19.9834 5.1343 19.5903 5.06298 19.1949 5.03067C18.8204 5.00007 18.3657 5.00008 17.8386 5.0001L12.4145 5.0001ZM4 7.0001V16.8001C4 17.3767 4.00078 17.7489 4.02393 18.0323C4.04612 18.3039 4.0838 18.4046 4.109 18.4541C4.20498 18.6425 4.35784 18.7953 4.54579 18.8911C4.59519 18.9162 4.69598 18.9539 4.96782 18.9762C5.25127 18.9993 5.62367 19.0001 6.2002 19.0001H17.8002C18.3767 19.0001 18.7489 18.9993 19.0321 18.9762C19.3036 18.954 19.4043 18.9163 19.4538 18.8911C19.6424 18.795 19.7956 18.6418 19.8912 18.4541C19.9164 18.4046 19.9541 18.3039 19.9763 18.0323C19.9994 17.7489 20.0002 17.3766 20.0002 16.8001L20.0002 9.20012C20.0002 8.62357 19.9994 8.2513 19.9763 7.96796C19.9541 7.6963 19.9164 7.59558 19.8912 7.54613C19.7956 7.35838 19.6424 7.20518 19.4538 7.1091C19.4043 7.08389 19.3036 7.04622 19.0321 7.02403C18.7488 7.00088 18.3766 7.0001 17.8 7.0001H4ZM11 11.8686L9.5547 12.8322C9.09517 13.1385 8.4743 13.0143 8.16795 12.5548C7.8616 12.0953 7.98577 11.4744 8.4453 11.168L11.4453 9.16805C11.7812 8.94412 12.2188 8.94412 12.5547 9.16805L15.5547 11.1681C16.0142 11.4744 16.1384 12.0953 15.8321 12.5548C15.5257 13.0143 14.9048 13.1385 14.4453 12.8322L13 11.8686L13 16.0001C13 16.5524 12.5523 17.0001 12 17.0001C11.4477 17.0001 11 16.5524 11 16.0001L11 11.8686Z"
                fill="currentColor"
            />
        </svg>
    );
}
