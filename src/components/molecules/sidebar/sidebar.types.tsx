export type list = {
    name: string;
    path: string;
    icon: string;
    children?: Array<list>;
};

export type SidebarProps = {
    lists: Array<list>;
};

export type SidebarMenuProps = {
    list: list;
    active: boolean;
    onClick: () => void;
    children?: React.ReactNode;
};
