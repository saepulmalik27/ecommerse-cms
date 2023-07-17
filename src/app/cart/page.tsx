"use client";
import React from "react";
import useCartView from "../../hooks/useCartView";
import Table from "@/components/templates/table";
import Pagination from "@/components/molecules/pagination";

export default function Cart() {
    const { data, handlePagination, colums } = useCartView();

    return (
        <React.Fragment>
            {data && data.carts && data.carts.length > 0 ? (
                <React.Fragment>
                    <Table columns={colums} data={data.carts} />
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
        </React.Fragment>
    );
}
