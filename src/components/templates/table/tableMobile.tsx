import React from "react";
import { TableProps } from "./table.types";
import { twMerge } from "tailwind-merge";
import useTable from "./useTable";

const TableMobile: React.FC<TableProps> = ({ columns, data }) => {
    const { formatedColumn } = useTable();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {data.map((row, index) => {
                return (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        {columns.map((column, index) => {
                            return (
                                <div
                                    className={
                                        "text-sm  text-gray-700 grid grid-cols-3 gap-2"
                                    }
                                    key={index}
                                >
                                    <div>{column.title}</div>
                                    <div className="col-span-2">
                                        {" "}
                                        :{" "}
                                        <span
                                            className={twMerge(
                                                index === 0
                                                    ? "text-primary"
                                                    : "",
                                                "font-bold"
                                            )}
                                        >
                                            {formatedColumn(column, row)}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default TableMobile;
