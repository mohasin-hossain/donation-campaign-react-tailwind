import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import { getStoredData } from '../../utilities/localStorage';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    const [numberOfDonation, setNumberOfDonation] = useState();

    useEffect(() => {
        const donationNum = getStoredData();
        setNumberOfDonation(donationNum.length);
    }, [])


    const data = [
        { name: 'Your Donation', value: numberOfDonation },
        { name: 'Total Donation', value: 12 },
      ];
    const COLORS = ['#00C49F','#ff444a',];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <Helmet>
        <title>Donation Statistics</title>
      </Helmet>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
