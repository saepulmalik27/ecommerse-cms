"use client";

import React from "react";
import useSidebar from "./useSidebar";
import SVG from "react-inlinesvg";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import useResponsive from "@/utils/hooks/useResponsive";
import SidebarList from "./sidebarlist";

const Sidebar = () => {
    const {
        handleClickMenu,
        lists,
        handleOpenSidebar,
        isOpenSidebar,
        currentRouterPath,
    } = useSidebar();
    const { isScreenLG } = useResponsive();
    return (
        <React.Fragment>
            <div className={twMerge("gap-2  flex ")}>
                <aside
                    className={twMerge(
                        "w-0 lg:w-64 bg-primary bg-opacity-20 lg:p-6 tranition duration-300 ease-in-out flex flex-col gap-4 overflow-hidden ",
                        isOpenSidebar && !isScreenLG
                            ? "w-full sm:w-64 bg-opacity-60"
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
                                    active={currentRouterPath === list.path}
                                    onClick={handleClickMenu}
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
                                                                currentRouterPath ===
                                                                child.path
                                                            }
                                                            onClick={
                                                                handleClickMenu
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
