import React from "react";

export type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
};
