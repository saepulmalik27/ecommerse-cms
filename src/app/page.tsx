"use client";
import Search from "@/components/atoms/search";
import Table from "@/components/templates/table";
import useProductView from "@/app/useProductView";
import React from "react";
import { twMerge } from "tailwind-merge";
import Pagination from "@/components/molecules/pagination";

export default function Home() {
    const { handleChange, data, productColumns, handlePagination } =
        useProductView();
    return (
        <div className={twMerge("flex flex-col gap-4")}>
            <div className={twMerge("flex justify-end ")}>
                <Search placeholder="Product Name" onChange={handleChange} />
            </div>
            {data && data.products && data.products.length > 0 ? (
                <React.Fragment>
                    <Table columns={productColumns} data={data.products} />
                    <Pagination
                        limit={data.limit}
                        skip={data.skip}
                        total={data.total}
                        onPaginate={handlePagination}
                    />
                </React.Fragment>
            ) : (
                <div className="text-center text-2xl text-gray-500">
                    No Data
                </div>
            )}
        </div>
    );
}
