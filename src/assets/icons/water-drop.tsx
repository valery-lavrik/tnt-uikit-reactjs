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
                d="M12.59 1.19261L12 2L11.41 1.19261C11.7614 0.935797 12.2386 0.935797 12.59 1.19261ZM12 3.27878C11.8726 3.38563 11.7281 3.50968 11.57 3.65002C10.9413 4.20786 10.1037 5.01692 9.26837 6.01982C7.57648 8.05101 6 10.7491 6 13.6923C6 15.3788 6.64213 16.9879 7.7724 18.1678C8.90127 19.3463 10.423 20 12 20C13.5771 20 15.0987 19.3464 16.2276 18.1679C17.3579 16.9879 18 15.3788 18 13.6923C18 10.7491 16.4235 8.05101 14.7316 6.01982C13.8963 5.01692 13.0587 4.20786 12.43 3.65002C12.2719 3.50968 12.1274 3.38563 12 3.27878ZM11.4094 1.19302C11.4097 1.19281 11.41 1.19261 12 2C12.59 1.19261 12.5903 1.19281 12.5906 1.19302L12.5913 1.19355L12.5932 1.19497L12.599 1.19921L12.618 1.21331C12.6339 1.22519 12.6563 1.24202 12.6847 1.26369C12.7416 1.30703 12.8227 1.36975 12.9245 1.45097C13.128 1.61334 13.4149 1.85008 13.7575 2.15407C14.4413 2.76089 15.3537 3.64173 16.2684 4.7398C18.0765 6.91053 20 10.0585 20 13.6923C20 15.8821 19.1671 17.9904 17.6719 19.5514C16.1753 21.1138 14.136 22 12 22C9.86408 22 7.82475 21.1138 6.32811 19.5513C4.83286 17.9904 4 15.8821 4 13.6923C4 10.0585 5.92352 6.91053 7.73163 4.7398C8.64627 3.64173 9.55868 2.76089 10.2425 2.15407C10.5851 1.85008 10.872 1.61334 11.0755 1.45097C11.1773 1.36975 11.2584 1.30703 11.3153 1.26369C11.3437 1.24202 11.3661 1.22519 11.382 1.21331L11.401 1.19921L11.4068 1.19497L11.4087 1.19355L11.4094 1.19302ZM16.0001 12.3846C16.5524 12.3846 17.0001 12.8324 17.0001 13.3846C17.0001 14.8659 16.4267 16.2914 15.3981 17.3463C14.8138 17.9456 14.1094 18.3975 13.3409 18.6761C12.8217 18.8644 12.2482 18.5962 12.0599 18.077C11.8716 17.5578 12.1399 16.9842 12.6591 16.796C13.1443 16.62 13.5922 16.3336 13.9661 15.9501C14.6254 15.2739 15.0001 14.3516 15.0001 13.3846C15.0001 12.8324 15.4479 12.3846 16.0001 12.3846Z"
                fill="currentColor"
            />
        </svg>
    );
}
