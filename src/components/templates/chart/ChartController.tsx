import React from "react";
import { ChartProps } from "react-chartjs-2";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

type ChartControllerProps = {
    type: "bar" | "line" | "pie";
    data: ChartProps["data"];
};

const ChartController: React.FC<ChartControllerProps> = ({ type, data }) => {
    switch (type) {
        case "bar":
            return <BarChart data={data} type={type} />;
        case "pie":
            return <PieChart data={data} type={type} />;
        case "line":
            return <LineChart data={data} type={type} />;
        default:
            return <BarChart data={data} type={type} />;
    }
};

export default ChartController;
