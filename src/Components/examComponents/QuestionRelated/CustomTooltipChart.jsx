import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Question: ${label}`}</p>
                <p className="time">{`Time: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const QuestionTimeChart = ({ data }) => {
    return (
        <BarChart width={400} height={200} data={data}>
            <XAxis dataKey="question" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="time" fill="#8884d8" />
        </BarChart>
    );
};

export default QuestionTimeChart;
