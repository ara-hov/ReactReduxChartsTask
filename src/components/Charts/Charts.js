import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export const Charts = ({ data }) => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Temperature Data</h2>
      <BarChart layout="vertical" width={1200} height={800} data={data.list}>
        <XAxis type="number" />
        <YAxis type="category" dataKey="dt_txt" />
        <Tooltip />
        <Legend />
        <Bar name="Temperature" dataKey="main.temp" fill="#9acd32" />
      </BarChart>
    </>
  )
};