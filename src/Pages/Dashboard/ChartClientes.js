import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('Janeiro', 10),
  createData('Fevereiro', 14),
  createData('Maio', 20),
  createData('Junho', 30),
  createData('Julho', 35),
  createData('Agosto', 60),
  createData('Setembro', 62),
  createData('Outubro', 99),
  createData('Hoje', 135),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Número de Clientes</Title>
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
              Usuários
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}