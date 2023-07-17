import React from "react";
import { TableProps } from "./table.types";
import TableDesktop from "./tableDesktop";
import TableMobile from "./tableMobile";

const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <React.Fragment>
            <TableDesktop columns={columns} data={data} />
            <TableMobile columns={columns} data={data} />
        </React.Fragment>
    );
};

export default Table;
