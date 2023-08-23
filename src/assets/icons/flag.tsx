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
                d="M15.9709 4.59852C17.0318 4.71294 18.1357 4.50156 19.384 3.52547C19.6853 3.28992 20.0945 3.24679 20.4382 3.41436C20.7819 3.58192 21 3.93084 21 4.31324V15.6867C21 15.9943 20.8584 16.2849 20.616 16.4744C18.9552 17.773 17.3318 18.1303 15.7564 17.9604C14.2804 17.8012 12.8849 17.1775 11.6593 16.6297C11.6368 16.6197 11.6144 16.6097 11.5921 16.5997C10.2883 16.0171 9.1624 15.5236 8.02913 15.4014C7.07826 15.2988 6.09291 15.458 5 16.1948V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V4.31329C3 4.00561 3.14164 3.71505 3.38403 3.52553C5.0448 2.22693 6.66819 1.86964 8.24359 2.03954C9.71962 2.19873 11.1151 2.82243 12.3407 3.3702C12.3632 3.38024 12.3856 3.39026 12.4079 3.40026C13.7117 3.98279 14.8376 4.4763 15.9709 4.59852ZM5 13.9128C6.10079 13.4231 7.18306 13.2985 8.24359 13.4129C9.71962 13.5721 11.1151 14.1958 12.3407 14.7436C12.3632 14.7536 12.3856 14.7637 12.4079 14.7737C13.7117 15.3562 14.8376 15.8497 15.9709 15.9719C16.9217 16.0745 17.9071 15.9153 19 15.1785V6.08706C17.8992 6.57683 16.8169 6.70137 15.7564 6.58699C14.2804 6.42781 12.8849 5.8041 11.6593 5.25634C11.6368 5.24629 11.6144 5.23627 11.5921 5.22628C10.2883 4.64374 9.1624 4.15023 8.02914 4.02801C7.07826 3.92546 6.09291 4.08461 5 4.82143V13.9128Z"
                fill="currentColor"
            />
        </svg>
    );
}
