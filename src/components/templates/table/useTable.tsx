import React from "react";
import { TableHeaderProps } from "./table.types";

const useTable = () => {
    const formatedColumn = (column: TableHeaderProps, row: any) => {
        if (column.customelement) {
            return column.customelement(row);
        } else if (column.callback) {
            return column.callback(row[column.field]);
        }
        return row[column.field];
    };

    return { formatedColumn };
};

export default useTable;
