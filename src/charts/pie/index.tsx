import * as React from 'react';
import { PieChart, Pie, Cell, PieLabelRenderProps } from 'recharts';

import { colors } from '../../styles';
import { pieChartData } from '../../data';

const data = pieChartData.sort((a, b) => b.value - a.value);

const PieGraph = () => (
  <PieChart width={500} height={300}>
    <Pie
      data={data}
      cx={220}
      cy={150}
      labelLine={false}
      label={customLabel}
      outerRadius={80}
      dataKey="value"
    >
      {data.map((entry, i) => (
        <Cell key={`cell-${i}`} fill={colors[`colorPie${(i % 4) + 1}`]} />
      ))}
    </Pie>
  </PieChart>
);

const customLabel = ({ x, y, cx, percent, category }: PieLabelRenderProps) =>
  percent ? (
    <text x={x} y={y} textAnchor={cx && x > cx ? 'start' : 'end'}>
      {`${(percent * 100).toFixed(0)}% - ${category}`}
    </text>
  ) : null;

export default PieGraph;
