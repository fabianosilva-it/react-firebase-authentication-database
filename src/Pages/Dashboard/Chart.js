import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('07:00', 0),
  createData('08:00', 100),
  createData('09:00', 200),
  createData('10:00', 100),
  createData('11:00', 200),
  createData('12:00', 50),
  createData('13:00', 30),
  createData('14:00', 100),
  createData('15:00', 80),
  createData('16:00', 75),
  createData('17:00', 300),
  createData('18:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Faturamento do dia</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Valor (R$)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}