import * as React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  TooltipProps,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

import { colors } from '../../styles';
import { areaChartData } from '../../data';

import ChartTooltip from '../style';

type IAreaChartData = typeof areaChartData;
const meanDataValue = (
  data: IAreaChartData,
  dataKey: 'incomes' | 'expenses'
): number => {
  const r = (data.reduce((agg, i) => agg + i[dataKey], 0) / data.length) * 7;
  return r - (r % 10);
};
const mi = meanDataValue(areaChartData, 'incomes');
const me = meanDataValue(areaChartData, 'expenses');

const AreaGraph = () => (
  <ResponsiveContainer width="80%" aspect={3}>
    <AreaChart
      width={960}
      height={400}
      data={areaChartData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={colors.graphPos} stopOpacity={0.8} />
          <stop offset="95%" stopColor={colors.graphPos} stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="colorNeg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={colors.graphNeg} stopOpacity={0.8} />
          <stop offset="95%" stopColor={colors.graphNeg} stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" />
      <YAxis tickCount={9} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip content={<CustomTooltip />} />
      <ReferenceLine
        y={mi}
        label={`Средний недельный доход: ${mi} рублей`}
        stroke={colors.graphPos}
        strokeWidth={2}
        strokeDasharray="16 4"
      />
      <ReferenceLine
        y={me}
        label={`Средний недельный расход: ${me} рублей`}
        stroke={colors.graphNeg}
        strokeWidth={2}
        strokeDasharray="16 4"
      />
      <Area
        type="monotone"
        dataKey="incomes"
        stroke={colors.graphPos}
        fillOpacity={1}
        fill="url(#colorPos)"
      />
      <Area
        type="monotone"
        dataKey="expenses"
        stroke={colors.graphNeg}
        fillOpacity={1}
        fill="url(#colorNeg)"
      />
    </AreaChart>
  </ResponsiveContainer>
);

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active) {
    return (
      <ChartTooltip>
        <h3 className="date">{`${label} июня`}</h3>
        {payload ? (
          <p className="incomes">
            Доходы:{' '}
            <span style={{ color: payload[0].color }}>{payload[0].value}</span>{' '}
            рублей
          </p>
        ) : null}
        {payload ? (
          <p className="expenses">
            Расходы:{' '}
            <span style={{ color: payload[1].color }}>{payload[1].value}</span>{' '}
            рублей
          </p>
        ) : null}
      </ChartTooltip>
    );
  }
  return null;
};

export default AreaGraph;
