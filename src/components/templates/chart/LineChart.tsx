"use client";

import React from "react";
import { ChartProps, Line } from "react-chartjs-2";

const LineChart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div className="w-full">
            <Line
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
export default LineChart;
