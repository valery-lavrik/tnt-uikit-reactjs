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
                d="M16.7857 10.8672L9.93756 15.0865C9.78418 15.1805 9.58782 15.1715 9.44422 15.0605C8.7936 14.5594 8.21234 14.0514 7.82451 13.6244C7.82451 13.6244 7.49041 13.2824 7.34582 13.0654C7.11234 12.7693 7 12.3823 7 12.0063C7 11.5843 7.12309 11.1853 7.36829 10.8662C7.42398 10.8092 7.63597 10.5582 7.83623 10.3532C9.00461 9.07715 12.0545 6.96905 13.6586 6.33002C13.8921 6.22701 14.5153 6.012 14.8387 6C15.1503 6 15.4512 6.068 15.7404 6.21701C16.096 6.42202 16.3744 6.74004 16.5307 7.11706C16.6313 7.37907 16.7866 8.16511 16.7866 8.18811C16.8873 8.74914 16.9625 9.53718 16.9996 10.4572C17.0064 10.6222 16.9234 10.7822 16.7857 10.8672Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M16.3277 13.1398C16.6295 12.9527 17.0095 13.1918 16.9949 13.5508C16.9587 14.3928 16.8962 15.1349 16.82 15.6869C16.8083 15.6989 16.653 16.6779 16.4742 17.0089C16.1626 17.624 15.551 18 14.8936 18H14.8389C14.4149 17.989 13.5132 17.613 13.5132 17.59C13.0589 17.401 12.466 17.081 11.828 16.6959C11.5408 16.5219 11.534 16.0949 11.8212 15.9179L16.3277 13.1398Z"
                fill="#37383C"
            />
        </svg>
    );
}
