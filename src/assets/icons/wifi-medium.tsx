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
                d="M14.7577 10.566C13.8787 10.1893 12.932 9.9967 11.9757 10C11.0195 10.0034 10.0741 10.2026 9.1978 10.5855C8.32151 10.9683 7.53295 11.5267 6.88077 12.226C6.50411 12.6299 5.87133 12.652 5.46742 12.2754C5.0635 11.8987 5.04141 11.2659 5.41806 10.862C6.25658 9.96284 7.27044 9.24498 8.39711 8.75275C9.52375 8.26053 10.7392 8.00435 11.9687 8.00005C13.1982 7.99576 14.4155 8.24342 15.5456 8.72777C16.6756 9.21209 17.6947 9.92281 18.5395 10.8162C18.919 11.2175 18.9013 11.8504 18.5 12.2299C18.0987 12.6093 17.4658 12.5916 17.0863 12.1904C16.4294 11.4956 15.6367 10.9428 14.7577 10.566ZM13.5756 14.3234C13.0734 14.1082 12.5323 13.9981 11.9858 14C11.4395 14.0019 10.8995 14.1158 10.3986 14.3346C9.8979 14.5533 9.44729 14.8724 9.07462 15.272C8.69796 15.6759 8.06518 15.698 7.66127 15.3214C7.25735 14.9447 7.23525 14.3119 7.61191 13.908C8.17092 13.3086 8.84683 12.83 9.59794 12.5018C10.349 12.1737 11.1591 12.0029 11.9789 12C12.7985 11.9971 13.6102 12.1623 14.3635 12.4852C15.1168 12.808 15.7962 13.2818 16.3595 13.8774C16.7389 14.2787 16.7213 14.9116 16.32 15.2911C15.9187 15.6706 15.2858 15.6529 14.9063 15.2516C14.5309 14.8547 14.078 14.5388 13.5756 14.3234ZM10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18Z"
                fill="currentColor"
            />
        </svg>
    );
}