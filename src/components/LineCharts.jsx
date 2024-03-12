
import { ResponsiveContainer, CartesianGrid, Tooltip, Line, LineChart, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    value: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    value: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
    value: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
    value: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
    value: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
    value: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineCharts = ({grid, x, y, width, aspect}) => {
    return (
        <ResponsiveContainer width={width ?? '100%'} aspect={aspect ?? 4/1}>
            <LineChart data={data} >
                {grid && <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>}
                <Line type="monotone" dataKey='uv' stroke="#8884d8" />
                {x && <XAxis dataKey="name" />}
                {y && <YAxis />}
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineCharts;
