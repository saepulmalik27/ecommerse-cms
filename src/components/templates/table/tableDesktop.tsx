import React from "react";
import { TableProps } from "./table.types";
import { twMerge } from "tailwind-merge";

const TableDesktop: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <div className="overflow-auto rounded-lg shadow  hidden md:block">
            <table className="w-full shadow border-collapse border border-gary-200 ">
                <thead className="bg-gray-50 ">
                    <tr>
                        {columns.map((column, index) => {
                            return (
                                <th
                                    className="border border-gray-200 p-3 text-sm font-semibold tracking-wide text-left"
                                    key={index}
                                >
                                    {column.title}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return (
                            <tr
                                key={index}
                                className={twMerge(
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                )}
                            >
                                {columns.map((column, index) => {
                                    return (
                                        <td
                                            className="border border-gray-200 text-sm p-3 text-gray-700 whitespace-nowrap"
                                            key={index}
                                        >
                                            {row[column.field]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TableDesktop;
