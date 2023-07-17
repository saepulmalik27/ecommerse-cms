import React from "react";

type CartLayoutProps = {
    children: React.ReactNode;
};

export const metadata = {
    title: "Cart Page",
    description: "This is the cart page",
};

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => {
    return <div className="flex flex-col gap-2">{children}</div>;
};

export default CartLayout;
