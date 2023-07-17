import React from "react";
import { list } from "./sidebar.types";

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
    const [active, setActive] = React.useState<list>(sidebarmenu[0]);

    const [isOpenSidebar, setIsOpenSidebar] = React.useState<boolean>(false);

    const handleClickMenu = (list: list) => {
        setActive(list);
        handleOpenSidebar();
    };

    const handleOpenSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };

    return {
        lists: sidebarmenu,
        activeMenu: active,
        handleClickMenu,
        handleOpenSidebar,
        isOpenSidebar,
    };
};

export default useSidebar;
