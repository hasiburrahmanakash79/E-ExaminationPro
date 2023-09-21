import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#00C49F',  '#970fd1'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Piechart = ({students , instructorsD}) => {
  console.log("USERR ROLE ", students, instructorsD);
  const data = [
    { name: 'Student', value: students?.length },
    { name: 'Instructor', value: instructorsD?.length },
  ];
    return (
        <div>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        <div className='grid grid-cols-2'>
                {data.map((item,index) =>(<p key={index} className='text-center cursor-pointer'>{item.name}</p>))}
        </div>
        <div className='grid grid-cols-2'>
            {COLORS.map((item, index) =>(<div className='w-6 h-4 mx-auto'  style={{backgroundColor:item}} key={index}>

            </div>))}
        </div>
        </div>
    );
};

export default Piechart;