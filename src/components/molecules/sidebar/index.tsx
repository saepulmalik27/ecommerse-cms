"use client";

import React from "react";
import useSidebar from "./useSidebar";
import SVG from "react-inlinesvg";
import Link from "next/link";
import { SidebarMenuProps } from "./sidebar.types";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import useResponsive from "@/utils/hooks/useResponsive";

const SidebarList: React.FC<SidebarMenuProps> = ({
    list,
    active,
    onClick,
    children,
}) => {
    return (
        <li
            className={twMerge(
                "py-2 px-4 hover:bg-primary hover:text-white transition duration-300 ease-in",
                active
                    ? "border-l-primary border-l-4 text-primary font-bold"
                    : "text-tertiary"
            )}
        >
            <Link
                href={list.path}
                className={twMerge(`flex items-center gap-2`)}
                onClick={onClick}
            >
                <SVG src={list.icon} className="w-6 h-6 aspect-square" />
                <span>{list.name}</span>
            </Link>
            {children}
        </li>
    );
};
const Sidebar = () => {
    const {
        activeMenu,
        handleClickMenu,
        lists,
        handleOpenSidebar,
        isOpenSidebar,
    } = useSidebar();
    const { isScreenLG } = useResponsive();
    return (
        <React.Fragment>
            <div className={twMerge("flex gap-1")}>
                <aside
                    className={twMerge(
                        "w-0 lg:w-64 bg-primary bg-opacity-20 lg:p-6 tranition duration-300 ease-in-out flex-col gap-2 overflow-hidden ",
                        isOpenSidebar && !isScreenLG
                            ? "w-64 bg-opacity-60"
                            : "w-0"
                    )}
                >
                    <div className="border-b-tertiary border-solid border-b-2 p-2 flex gap-1 items-center select-none">
                        <Image
                            width={40}
                            height={40}
                            src={"/logo.png"}
                            className="w-10 h-10 aspect-square"
                            alt="logo"
                        />
                        <h1 className="text-lg font-bold text-tertiary">
                            Saepul Malik
                        </h1>
                    </div>
                    <ul>
                        {lists.map((list, index) => {
                            return (
                                <SidebarList
                                    key={index}
                                    list={list}
                                    active={activeMenu.path === list.path}
                                    onClick={() => handleClickMenu(list)}
                                >
                                    {list.children && (
                                        <ul className="pl-4">
                                            {list.children.map(
                                                (child, index) => {
                                                    return (
                                                        <SidebarList
                                                            key={index}
                                                            list={child}
                                                            active={
                                                                activeMenu.path ===
                                                                child.path
                                                            }
                                                            onClick={() =>
                                                                handleClickMenu(
                                                                    child
                                                                )
                                                            }
                                                        />
                                                    );
                                                }
                                            )}
                                        </ul>
                                    )}
                                </SidebarList>
                            );
                        })}
                    </ul>
                </aside>
                <div className="py-2">
                    {isOpenSidebar && !isScreenLG ? (
                        <SVG
                            src="icons/cross.svg"
                            className="w-4 h-4 lg:hidden cursor-pointer"
                            onClick={handleOpenSidebar}
                        />
                    ) : (
                        <SVG
                            src="icons/menu-burger.svg"
                            className="w-6 h-6 lg:hidden cursor-pointer"
                            onClick={handleOpenSidebar}
                        />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;
