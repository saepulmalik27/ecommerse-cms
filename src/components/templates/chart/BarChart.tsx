"use client";

import React from "react";
import { ChartProps, Bar } from "react-chartjs-2";

const BarChart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div className="w-full">
            <Bar
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
export default BarChart;
