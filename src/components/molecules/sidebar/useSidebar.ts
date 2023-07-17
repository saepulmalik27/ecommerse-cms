import React from "react";
import { list } from "./sidebar.types";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export const sidebarmenu: Array<list> = [
    {
        icon: "icons/box-open.svg",
        name: "Products",
        path: "/",
    },
    {
        icon: "icons/shopping-cart.svg",
        name: "Carts",
        path: "/cart",
    },
];

const useSidebar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = React.useState<boolean>(false);

    const handleClickMenu = () => {
        handleOpenSidebar();
    };

    const handleOpenSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };

    const currentRouterPath = usePathname();

    return {
        lists: sidebarmenu,
        handleClickMenu,
        handleOpenSidebar,
        isOpenSidebar,
        currentRouterPath,
    };
};

export default useSidebar;
