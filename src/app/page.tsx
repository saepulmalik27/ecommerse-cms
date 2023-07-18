"use client";
import Search from "@/components/atoms/search";
import Table from "@/components/templates/table";
import useProductView from "@/hooks/useProductView";
import React from "react";
import { twMerge } from "tailwind-merge";
import Pagination from "@/components/molecules/pagination";
import NoContent from "@/components/templates/nocontent";
import Select from "@/components/molecules/select";
import TableLoader from "@/components/templates/table/tableLoader";

export default function Home() {
    const {
        handleChange,
        data,
        productColumns,
        handlePagination,
        handleFilterCategory,
        listcategory,
        isLoading,
    } = useProductView();
    return (
        <div className={twMerge("flex flex-col gap-4")}>
            <h1 className="text-2xl font-bold">Product</h1>
            <section
                className={twMerge(
                    "flex flex-col sm:flex-row gap-2 justify-end "
                )}
            >
                {listcategory && (
                    <Select
                        options={listcategory}
                        placeholder="Filter by category"
                        onSelect={handleFilterCategory}
                    />
                )}

                <Search placeholder="Product Name" onChange={handleChange} />
            </section>

            {isLoading ? (
                <TableLoader />
            ) : (
                <section className="flex flex-col gap-4">
                    {data && data.products && data.products.length > 0 ? (
                        <React.Fragment>
                            <Table
                                columns={productColumns}
                                data={data.products}
                            />
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
