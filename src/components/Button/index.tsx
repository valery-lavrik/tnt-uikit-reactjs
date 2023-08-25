import React from "react";
import "./index.scss";

interface Props {
    children: React.ReactNode;
    secondary?: boolean;
    color?: "blue" | "red" | "green" | "yellow";
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    style?: React.CSSProperties;
    className?: string;
}

const Button = ({
    children,
    secondary = false,
    color = "blue",
    disabled = false,
    onClick,
    style = {},
    className = "",
}: Props) => {
    return (
        <button
            className={`button ${
                secondary ? "button--secondary" : ""
            } button--${color} ${className}`}
            disabled={disabled}
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
