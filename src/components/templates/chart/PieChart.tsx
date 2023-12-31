"use client";

import React from "react";
import { Pie, ChartProps } from "react-chartjs-2";

const PieChart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div className="w-full">
            <Pie
                //@ts-ignore
                data={data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "",
                        },
                    },
                }}
            />
        </div>
    );
};
export default PieChart;
