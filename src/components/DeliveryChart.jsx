import React from "react";
import { PieChart, Pie,  Cell } from 'recharts';

const DeliveryChart = ({data, color}) => {
    return (<PieChart width={200} height={200}>
        <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="grey"
            paddingAngle={0}
            dataKey="value"
            startAngle={-270}
            endAngle={90}

        >
            <Cell key={`cell-0`} fill='#CBD5E0' />
            <Cell key={`cell-1`} fill={color} />
        </Pie>
    </PieChart>
    )
}

export default DeliveryChart;