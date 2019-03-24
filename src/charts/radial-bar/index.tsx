import * as React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

import { radialBarChartData } from '../../data';

const RadialBarGraph = () => (
  <RadialBarChart
    width={540}
    height={300}
    cx={150}
    cy={150}
    innerRadius={20}
    outerRadius={140}
    barSize={16}
    data={radialBarChartData}
  >
    <RadialBar
      label={{ position: 'insideStart', fill: '#fff' }}
      background
      dataKey="value"
    />
    <Legend
      iconSize={10}
      width={180}
      height={150}
      layout="vertical"
      verticalAlign="middle"
      wrapperStyle={{
        top: 0,
        left: 350,
        lineHeight: '24px',
      }}
    />
  </RadialBarChart>
);

export default RadialBarGraph;
