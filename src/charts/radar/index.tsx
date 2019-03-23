import * as React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  LegendValueFormatter,
  Tooltip,
  TooltipProps,
} from 'recharts';

import { colors } from '../../styles';
import { radarChartData } from '../../data';

import ChartTooltip from '../style';

const RadarGraph = () => (
  <RadarChart
    cx={230}
    cy={180}
    outerRadius={150}
    width={500}
    height={360}
    data={radarChartData}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="param" />
    <PolarRadiusAxis angle={18} domain={[0, 10]} tickCount={6} />
    <Radar
      label={() => <p>Player 1</p>}
      dataKey="p1"
      stroke={colors.color1}
      fill={colors.color1}
      fillOpacity={0.6}
    />
    <Radar
      label={() => <p>Player 2</p>}
      dataKey="p2"
      stroke={colors.color2}
      fill={colors.color2}
      fillOpacity={0.6}
    />
    <Tooltip content={<CustomTooltip />} />
    <Legend formatter={LegendValFormatter} />
  </RadarChart>
);

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active) {
    return (
      <ChartTooltip>
        <h3 className="param">{label}</h3>
        {payload ? (
          <p className="player-1">
            Игрок 1:{' '}
            <span style={{ color: payload[0].color }}>{payload[0].value}</span>
          </p>
        ) : null}
        {payload ? (
          <p className="player-2">
            Игрок 2:{' '}
            <span style={{ color: payload[1].color }}>{payload[1].value}</span>
          </p>
        ) : null}
      </ChartTooltip>
    );
  }
  return null;
};

const LegendValFormatter: LegendValueFormatter = (value: string) => (
  <>Игрок {value.slice(-1)}</>
);

export default RadarGraph;
