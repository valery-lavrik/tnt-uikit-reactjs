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
                d="M18.1474 5.27727C16.4877 3.61754 13.7968 3.61754 12.137 5.27727L5.24275 12.1716C4.85223 12.5621 4.21906 12.5621 3.82854 12.1716C3.43801 11.781 3.43801 11.1479 3.82854 10.7573L10.7228 3.86305C13.1636 1.42228 17.1208 1.42228 19.5616 3.86305C22.0024 6.30386 22.0022 10.2611 19.5615 12.7018L11.6065 20.6568C9.84918 22.4141 7.0002 22.4142 5.24282 20.6568C3.48555 18.8995 3.48516 16.0503 5.2426 14.2929L13.1976 6.33791C14.2715 5.26397 16.013 5.26397 17.087 6.33791C18.1611 7.41203 18.1605 9.15321 17.0867 10.227L10.1925 17.1213C9.80193 17.5118 9.16877 17.5118 8.77824 17.1213C8.38772 16.7307 8.38772 16.0976 8.77824 15.7071L15.6725 8.81276C15.9656 8.51969 15.9655 8.04483 15.6728 7.75212C15.3799 7.45923 14.9047 7.45923 14.6118 7.75212L6.65681 15.7071C5.68059 16.6833 5.68064 18.2662 6.65704 19.2426C7.63333 20.2189 9.21598 20.2189 10.1923 19.2426L18.1473 11.2876C19.807 9.62785 19.8071 6.93696 18.1474 5.27727Z"
                fill="currentColor"
            />
        </svg>
    );
}
