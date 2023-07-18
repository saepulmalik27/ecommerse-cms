"use client";

import React from "react";
import { Pie, ChartProps } from "react-chartjs-2";

const PieChart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div className="w-full">
            <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
            <Pie
                //@ts-ignore
                data={data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Products to stock",
                        },
                    },
                }}
            />
        </div>
    );
};
export default PieChart;
