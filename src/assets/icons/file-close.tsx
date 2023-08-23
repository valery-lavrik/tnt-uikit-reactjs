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
                d="M13.0408 2.00092C13.0273 2.00038 13.0137 2.0001 13 2.0001C12.9923 2.0001 12.9846 2.00019 12.977 2.00036C12.9054 1.99991 12.8325 1.99998 12.758 2.00005C12.7305 2.00008 12.7027 2.0001 12.6747 2.0001L8.16168 2.0001C7.63451 2.00008 7.17965 2.00007 6.80499 2.03067C6.40962 2.06296 6.01625 2.13426 5.63781 2.32708C5.07306 2.61483 4.61447 3.07392 4.32698 3.63815C4.13419 4.01653 4.06287 4.40975 4.03057 4.80509C3.99997 5.17966 3.99998 5.63442 4 6.16157V17.8387C3.99998 18.3658 3.99997 18.8206 4.03057 19.1951C4.06287 19.5905 4.13419 19.9837 4.32698 20.3621C4.61449 20.9263 5.07311 21.3854 5.63781 21.6731C6.01623 21.8659 6.40959 21.9372 6.80496 21.9695C7.17973 22.0001 7.63473 22.0001 8.16209 22.0001H15.8384C16.3657 22.0001 16.8205 22.0001 17.1951 21.9695C17.5904 21.9372 17.9835 21.8658 18.3618 21.6731C18.9258 21.3857 19.3854 20.927 19.6732 20.3621C19.8661 19.9836 19.9373 19.5903 19.9696 19.195C20 18.8211 20 18.3672 20 17.8412L20 9.3256C20 9.29937 20 9.27335 20 9.24753C20.0001 9.17381 20.0002 9.10172 19.9997 9.03103C20 9.02076 20.0002 9.01045 20.0002 9.0001C20.0002 8.98347 19.9998 8.96694 19.999 8.95051C19.9953 8.65928 19.9798 8.39096 19.9167 8.12817C19.8433 7.8225 19.7224 7.52984 19.5577 7.26104C19.3699 6.95457 19.1158 6.70093 18.8258 6.41142C18.8074 6.39301 18.7888 6.37446 18.7701 6.35573L15.6446 3.23025C15.6249 3.21053 15.6053 3.19095 15.586 3.17153C15.2984 2.88341 15.0449 2.62948 14.7393 2.4422C14.471 2.27778 14.1784 2.15651 13.8722 2.08299C13.6066 2.01924 13.3351 2.00427 13.0408 2.00092ZM17.5841 8.0001C17.524 7.93861 17.4493 7.86338 17.3559 7.76995L14.2304 4.64446C14.1368 4.5509 14.0615 4.47615 14 4.41591V5.8001C14 6.37665 14.0008 6.74892 14.0239 7.03226C14.0461 7.30392 14.0838 7.40463 14.109 7.45408C14.205 7.64246 14.3578 7.79531 14.5458 7.89108C14.5952 7.91625 14.696 7.95395 14.9678 7.97616C15.2513 7.99932 15.6237 8.0001 16.2002 8.0001H17.5841ZM18 10.0001V17.8001C18 18.3768 17.9993 18.749 17.9762 19.0324C17.954 19.3041 17.9164 19.4047 17.8912 19.4541C17.7956 19.6418 17.6424 19.795 17.4538 19.8911C17.4043 19.9163 17.3036 19.954 17.0321 19.9762C16.7489 19.9993 16.3767 20.0001 15.8002 20.0001H8.2002C7.62367 20.0001 7.25127 19.9993 6.96782 19.9762C6.69598 19.9539 6.59519 19.9162 6.54579 19.8911C6.35784 19.7953 6.20498 19.6425 6.109 19.4541C6.0838 19.4046 6.04612 19.3039 6.02393 19.0323C6.00078 18.7489 6 18.3767 6 17.8001V6.20011C6 5.62356 6.00078 5.25129 6.02393 4.96796C6.04612 4.6963 6.0838 4.59558 6.109 4.54613C6.205 4.35771 6.35789 4.20484 6.54579 4.1091C6.59517 4.08393 6.69595 4.04624 6.9678 4.02403C7.25126 4.00088 7.62365 4.0001 8.2002 4.0001H12L12 5.83865C12 6.36579 12 6.82055 12.0306 7.19512C12.0629 7.59047 12.1342 7.98368 12.327 8.36206C12.6145 8.92633 13.0731 9.38536 13.6378 9.67309C14.0162 9.86591 14.4096 9.93721 14.805 9.96952C15.1797 10.0001 15.6347 10.0001 16.162 10.0001L18 10.0001ZM9.2929 12.293C9.68342 11.9025 10.3166 11.9025 10.7071 12.293L12 13.5859L13.2929 12.293C13.6834 11.9025 14.3166 11.9025 14.7071 12.293C15.0976 12.6835 15.0976 13.3167 14.7071 13.7072L13.4142 15.0001L14.7071 16.293C15.0976 16.6835 15.0976 17.3167 14.7071 17.7072C14.3166 18.0977 13.6834 18.0977 13.2929 17.7072L12 16.4143L10.7071 17.7072C10.3166 18.0977 9.68342 18.0977 9.2929 17.7072C8.90237 17.3167 8.90237 16.6835 9.2929 16.293L10.5858 15.0001L9.29289 13.7072C8.90237 13.3167 8.90237 12.6835 9.2929 12.293Z"
                fill="currentColor"
            />
        </svg>
    );
}
