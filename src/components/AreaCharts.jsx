
import { ResponsiveContainer, CartesianGrid, Tooltip, AreaChart, Area, XAxis, YAxis } from 'recharts';

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

const AreaCharts = ({grid, x, y, width, aspect, color}) => {
    return (
        <ResponsiveContainer width={width ?? '100%'} aspect={aspect ?? 4/1}>
            <AreaChart width={500} data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color ?? '#82ca9d'} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={color ?? '#82ca9d'} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                {grid && <CartesianGrid strokeDasharray="3 3" />}
                {x && <XAxis dataKey="name" />}
                {y && <YAxis />}
                <Tooltip />
                <Area type="monotone" dataKey="pv" stroke="#a0b8fe" fillOpacity={1} fill={`url(#color${color})`} />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default AreaCharts;
