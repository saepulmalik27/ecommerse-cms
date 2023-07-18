"use client";
import React from "react";
import useCartView from "../../hooks/useCartView";
import Table from "@/components/templates/table";
import Pagination from "@/components/molecules/pagination";
import NoContent from "@/components/templates/nocontent";
import TableLoader from "@/components/templates/table/tableLoader";

export default function Cart() {
    const { data, handlePagination, colums, isLoading } = useCartView();

    return (
        <div className="py-10 flex flex-col gap-10">
            <h1 className="text-2xl font-bold">Cart Product</h1>
            {isLoading ? (
                <TableLoader />
            ) : (
                <section className="flex flex-col  gap-2">
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
                        <NoContent />
                    )}
                </section>
            )}
        </div>
    );
}
