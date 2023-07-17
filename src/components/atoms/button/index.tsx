import React from "react";
import { ButtonProps } from "./button.types";
import { twMerge } from "tailwind-merge";
const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
    disabled,
}) => {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                "rounded-md text-sm px-2 py-1 border-gray-200 border disabled:cursor-not-allowed disabled:hidden hover:bg-primary hover:text-white ",
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
