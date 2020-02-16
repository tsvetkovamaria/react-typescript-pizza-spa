import React from "react";
import { LineChart, Line, XAxis } from 'recharts';

const HistoryChart = ({data}) => {
    const serializedData = data.labels.map((label, i) => ({
        label,
        value: data.data[i]
    }));

    return (
        <LineChart width={500} height={200} data={serializedData}>
            <Line type="monotone" dataKey="value" stroke="#e4550f" />
            <XAxis dataKey="label" />
        </LineChart>
    );
}

export default HistoryChart;