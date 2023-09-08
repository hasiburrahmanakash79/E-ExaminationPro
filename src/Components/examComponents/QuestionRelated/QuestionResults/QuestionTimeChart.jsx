import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
// import "./Chart.css"
const QuestionTimeChart = ({ data }) => {
    return (
        <BarChart width={700} height={300} data={data}>
            <XAxis dataKey="Ques" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="time" fill="#8884d8" />
            <Bar dataKey="Ques" fill="#ec11fa" />
        </BarChart>
    );
};

export default QuestionTimeChart;
