export type TableHeaderProps = {
    field: string;
    title: string;
    sortable: boolean;
    callback?: (value: string) => any;
    customelement?: (row: any) => React.ReactElement;
};

export type TableProps = {
    data: Array<any>;
    columns: Array<TableHeaderProps>;
};
