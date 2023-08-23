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
                d="M17 4.41404L19.5859 6.99995H17.5996C17.3031 6.99995 17.1409 6.99916 17.0244 6.98964C17.0199 6.98927 17.0155 6.98889 17.0115 6.98851C17.0111 6.98436 17.0107 6.97997 17.0103 6.97533C17.0008 6.85873 17 6.69647 17 6.39995V4.41404ZM20 8.99995L17.5678 8.99995C17.3154 8.99998 17.0696 9.00001 16.8615 8.98299C16.6328 8.9643 16.3632 8.92019 16.0919 8.78194C15.7154 8.59012 15.4097 8.28412 15.218 7.90795C15.0797 7.63652 15.0356 7.36678 15.0169 7.13819C14.9999 6.93002 15 6.68422 15 6.43183L15 3.99995H11.5996C11.3031 3.99995 11.1409 4.00073 11.0244 4.01025C11.0199 4.01062 11.0155 4.011 11.0115 4.01137C11.0111 4.01553 11.0107 4.01993 11.0103 4.02458C11.0008 4.14115 11 4.30339 11 4.59992V5.58741C11.0502 5.63524 11.0968 5.68206 11.1398 5.72527C11.1521 5.73765 11.1641 5.74974 11.1759 5.76147L14.2386 8.82421C14.2501 8.83566 14.2618 8.84736 14.2739 8.85934C14.4092 8.99406 14.5785 9.1625 14.7052 9.36916C14.8136 9.54607 14.8955 9.74091 14.945 9.94729C15.0014 10.182 15.0007 10.4214 15.0001 10.6096C15.0001 10.6278 15 10.6455 15 10.6627V16.9999H19.4C19.6965 16.9999 19.8589 16.9992 19.9756 16.9896C19.9801 16.9893 19.9843 16.9889 19.9883 16.9885C19.9888 16.9842 19.9892 16.9796 19.9896 16.9748C19.9991 16.8584 20 16.6961 20 16.3999V8.99995ZM15 18.9999L19.4317 19C19.6842 19 19.9301 19 20.1384 18.983C20.367 18.9643 20.6369 18.9203 20.9084 18.7819C21.2862 18.5894 21.5907 18.2827 21.7816 17.908C21.9197 17.6369 21.964 17.3675 21.9828 17.1387C22.0001 16.9293 22 16.6821 22 16.428V7.66267C22 7.6455 22.0001 7.62781 22.0001 7.60965C22.0007 7.42145 22.0014 7.18204 21.945 6.94729C21.8955 6.74092 21.8136 6.54607 21.7052 6.36916C21.5785 6.16249 21.4092 5.99405 21.2738 5.85933C21.2618 5.84736 21.25 5.83565 21.2386 5.82421L18.1759 2.76147C18.1641 2.74974 18.1521 2.73765 18.1398 2.72527C18.0059 2.59066 17.8372 2.42109 17.6309 2.29465C17.4509 2.18434 17.2552 2.10391 17.0523 2.05521C16.817 1.99871 16.5778 1.99935 16.3879 1.99985C16.3705 1.9999 16.3534 1.99995 16.3369 1.99995L11.5677 1.99994C11.3153 1.99991 11.0696 1.99988 10.8615 2.0169C10.6329 2.03558 10.3633 2.07968 10.0919 2.21793C9.71533 2.40981 9.40961 2.71591 9.21799 3.09198C9.0797 3.36339 9.03563 3.63311 9.01695 3.86171C8.99994 4.06986 8.99997 4.31565 9 4.56803C9 4.57865 9.00001 4.58928 9.00001 4.59992V4.99995H4.59961C4.58897 4.99995 4.57833 4.99995 4.5677 4.99994C4.31534 4.99991 4.0696 4.99989 3.86149 5.0169C3.63286 5.03558 3.36326 5.07968 3.09191 5.21793C2.71533 5.40981 2.40961 5.71591 2.21799 6.09198C2.0797 6.36339 2.03563 6.63311 2.01695 6.86171C1.99994 7.06986 1.99997 7.31564 2 7.56802C2 7.57864 2.00001 7.58928 2.00001 7.59992L2 19.4318C1.99997 19.6842 1.99994 19.93 2.01695 20.1382C2.03562 20.3668 2.07969 20.6365 2.21799 20.908C2.40966 21.2841 2.71544 21.5901 3.09191 21.7819C3.36324 21.9202 3.63283 21.9643 3.86147 21.983C4.06963 22 4.31543 22 4.56786 22H12.4313C12.6838 22 12.9298 22 13.1382 21.983C13.3667 21.9643 13.6367 21.9203 13.9084 21.7819C14.2862 21.5894 14.5907 21.2827 14.7816 20.908C14.9197 20.6369 14.964 20.3675 14.9828 20.1387C15.0001 19.9293 15 19.6821 15 19.4281L15 18.9999ZM13 11.9999L10.5679 11.9999C10.3154 12 10.0696 12 9.86147 11.983C9.63283 11.9643 9.36324 11.9202 9.09191 11.7819C8.71544 11.5901 8.40966 11.2841 8.21799 10.908C8.07969 10.6365 8.03563 10.3668 8.01695 10.1382C7.99994 9.93002 7.99997 9.68423 8 9.43185C8 9.42122 8.00001 9.41059 8.00001 9.39995V6.99995H4.59961C4.30307 6.99995 4.14092 7.00073 4.02442 7.01025C4.01986 7.01062 4.01554 7.011 4.01146 7.01137C4.01107 7.01553 4.01069 7.01993 4.01031 7.02458C4.00078 7.14115 4.00001 7.30339 4.00001 7.59992V19.3999C4.00001 19.6964 4.00078 19.8587 4.01031 19.9753C4.01069 19.98 4.01107 19.9844 4.01145 19.9885C4.01554 19.9889 4.01988 19.9893 4.02444 19.9896C4.14093 19.9992 4.30309 19.9999 4.59961 19.9999H12.3996C12.6961 19.9999 12.8586 19.9992 12.9754 19.9896C12.98 19.9893 12.9843 19.9889 12.9884 19.9885C12.9888 19.9842 12.9892 19.9796 12.9896 19.9748C12.9991 19.8584 13 19.6961 13 19.3999V11.9999ZM10 7.41404V9.39995C10 9.69647 10.0008 9.85873 10.0103 9.97533C10.0107 9.97997 10.0111 9.98436 10.0115 9.98851C10.0155 9.98889 10.0199 9.98927 10.0244 9.98964C10.1409 9.99916 10.3031 9.99995 10.5996 9.99995H12.5859L10 7.41404Z"
                fill="currentColor"
            />
        </svg>
    );
}