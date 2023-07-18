"use client";
import React from "react";
import useCartDetailView from "@/hooks/useCartDetailView";
import Table from "@/components/templates/table";

const CartDetail = () => {
    const { data, dataProduct, colums } = useCartDetailView();
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Cart {data?.id} </h1>
            <section className="flex flex-col gap-2">
                <h1>Details</h1>
                <div className="p-3 border border-gray-200 rounded-md bg-primary bg-opacity-20 grid grid-cols-2 text-sm tracking-wide leading-6 ">
                    <div>
                        <p>
                            User :{" "}
                            <span className="font-bold">
                                Test {data?.userId}
                            </span>{" "}
                        </p>
                        <p>Total Products :{data?.totalProducts}</p>
                        <p>Total Item : {data?.totalQuantity}</p>
                    </div>
                    <div>
                        <p>Total Discounted : {data?.discountedTotal}</p>
                        <p>Total Amount : {data?.total}</p>
                    </div>
                </div>
            </section>
            {dataProduct && (
                <section className="flex flex-col gap-2">
                    <h1>Products</h1>
                    <Table columns={colums} data={dataProduct} />
                </section>
            )}
        </div>
    );
};

export default CartDetail;
