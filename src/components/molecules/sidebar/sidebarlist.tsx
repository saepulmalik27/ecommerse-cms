import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { SidebarMenuProps } from "./sidebar.types";
import SVG from "react-inlinesvg";
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

export default SidebarList;
