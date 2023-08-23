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
                d="M15.1369 4.02773C15.0486 4.00654 14.9423 4.0001 14.4054 4.0001H9.59385C9.05708 4.0001 8.95175 4.00653 8.86343 4.02773C8.76123 4.05227 8.66367 4.09268 8.57434 4.14742C8.49725 4.19466 8.41973 4.26367 8.03894 4.64446L4.64471 8.0387C4.26516 8.41825 4.19512 8.49738 4.14766 8.57483C4.09246 8.66491 4.05206 8.76245 4.02773 8.8638C4.00653 8.95211 4.0001 9.05755 4.0001 9.59434V14.4059C4.0001 14.9426 4.00653 15.048 4.02773 15.1364C4.05207 15.2377 4.09248 15.3353 4.14766 15.4254C4.19511 15.5028 4.2651 15.5818 4.64471 15.9615L8.03894 19.3557C8.41975 19.7365 8.49726 19.8055 8.57434 19.8527C8.66368 19.9075 8.76124 19.9479 8.86343 19.9724C8.95178 19.9936 9.05722 20.0001 9.59385 20.0001H14.4054C14.9422 20.0001 15.0485 19.9936 15.1369 19.9724C15.2389 19.9479 15.3364 19.9076 15.4258 19.8527C15.5033 19.8053 15.5823 19.7353 15.9619 19.3557L19.3562 15.9615C19.7347 15.583 19.8049 15.5032 19.8525 15.4255C19.907 15.3365 19.9474 15.2389 19.9721 15.1364C19.9934 15.0477 20.0001 14.9412 20.0001 14.4059V9.59434C20.0001 9.05899 19.9934 8.95245 19.9721 8.8638C19.9475 8.76139 19.9071 8.66398 19.8525 8.57483C19.8048 8.49699 19.7344 8.41689 19.3562 8.03869L15.9619 4.64446C15.5823 4.26486 15.5033 4.19487 15.4258 4.14742C15.3364 4.09262 15.2389 4.05224 15.1369 4.02773ZM14.4888 2.00005C14.8956 1.99967 15.2553 1.99934 15.6037 2.08299C15.9098 2.15647 16.2024 2.27763 16.4708 2.44214C16.7763 2.62935 17.0298 2.88326 17.3171 3.17115C17.3366 3.1907 17.3563 3.2104 17.3762 3.23025L20.7704 6.62448C20.7886 6.64267 20.8066 6.66069 20.8245 6.67858C21.1155 6.96911 21.3697 7.22291 21.5578 7.52983C21.7225 7.79857 21.8434 8.09117 21.9168 8.39691C22.0008 8.74659 22.0005 9.10604 22.0001 9.51627C22.0001 9.54209 22.0001 9.56811 22.0001 9.59434V14.4059C22.0001 14.4321 22.0001 14.4581 22.0001 14.4839C22.0005 14.8942 22.0008 15.2536 21.9168 15.6033C21.8434 15.9088 21.7226 16.2016 21.5578 16.4705C21.3699 16.7771 21.1159 17.0306 20.8256 17.3205C20.8074 17.3387 20.7889 17.3571 20.7704 17.3757L17.3762 20.7699C17.3563 20.7898 17.3365 20.8095 17.317 20.8291C17.0297 21.1169 16.7763 21.3708 16.4708 21.558C16.2024 21.7225 15.9098 21.8437 15.6037 21.9172C15.2552 22.0009 14.8954 22.0005 14.4883 22.0002C14.4609 22.0001 14.4332 22.0001 14.4054 22.0001H9.59385C9.56602 22.0001 9.53842 22.0001 9.51104 22.0002C9.10383 22.0005 8.7451 22.0009 8.39654 21.9172C8.09059 21.8437 7.7979 21.7226 7.52935 21.558C7.22516 21.3716 6.97264 21.1185 6.68814 20.8334C6.66719 20.8124 6.64606 20.7912 6.62473 20.7699L3.23049 17.3757C3.21064 17.3558 3.19094 17.3361 3.17139 17.3166C2.88351 17.0293 2.62959 16.7758 2.44238 16.4704C2.27825 16.2025 2.15664 15.91 2.08299 15.6033C1.99934 15.2548 1.99967 14.8961 2.00005 14.4892C2.00008 14.4616 2.0001 14.4339 2.0001 14.4059V9.59434C2.0001 9.56634 2.00008 9.53858 2.00005 9.51103C1.99967 9.10414 1.99934 8.74535 2.08299 8.39691C2.15665 8.09011 2.27827 7.79764 2.44238 7.52983C2.62963 7.22427 2.88359 6.97078 3.17162 6.68329C3.19109 6.66385 3.21072 6.64426 3.23049 6.62449L3.23049 6.62449L6.62473 3.23025C6.64604 3.20894 6.66714 3.18779 6.68807 3.16682C6.97261 2.88164 7.22514 2.62856 7.52935 2.44214C7.7979 2.27757 8.09059 2.15644 8.39654 2.08299C8.74498 1.99934 9.10365 1.99967 9.51055 2.00005C9.53809 2.00008 9.56586 2.0001 9.59385 2.0001H14.4054C14.4334 2.0001 14.4612 2.00008 14.4888 2.00005ZM15.7072 9.293C16.0977 9.68352 16.0977 10.3167 15.7072 10.7072L11.7072 14.7072C11.3167 15.0977 10.6835 15.0977 10.293 14.7072L8.29299 12.7072C7.90247 12.3167 7.90247 11.6835 8.29299 11.293C8.68352 10.9025 9.31668 10.9025 9.70721 11.293L11.0001 12.5859L14.293 9.293C14.6835 8.90247 15.3167 8.90247 15.7072 9.293Z"
                fill="currentColor"
            />
        </svg>
    );
}