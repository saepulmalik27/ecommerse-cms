export type TableHeaderProps = {
    field: string;
    title: string;
    sortable: boolean;
};

export type TableProps = {
    data: Array<any>;
    columns: Array<TableHeaderProps>;
};
