
import { ResponsiveContainer, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar, Line, LineChart, PieChart, Pie, Cell, XAxis, YAxis } from 'recharts';

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

const Charts = ({type, grid, x, y, width, height, aspect, childreen}) => {

    if(type === "bar"){
        return (
            <ResponsiveContainer width={width ?? '100%'} aspect={aspect ?? 4/1}>
            <BarChart width={10} height={40} data={data}>
                <Bar dataKey="uv" fill="#e3e3e3" barSize={5} radius={8}/>
                <Bar dataKey="pv" fill="#ff6205" barSize={5} radius={8}/>
            </BarChart>
        </ResponsiveContainer>
        
        );
    }
    if(type === "line"){
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

    if(type === "area"){
        return (
            <ResponsiveContainer width={width ?? '100%'} aspect={aspect ?? 4/1}>
                <AreaChart width={500} data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                    {x && <XAxis dataKey="name" />}
                    {y && <YAxis />}
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
    if(type === "pie"){
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return (
                <ResponsiveContainer width={width ?? '100%'} aspect={aspect ?? 4/1}>
                    <PieChart width={800} height={400} >
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Pie
                            data={data}
                            cx={420}
                            cy={200}
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
            </ResponsiveContainer>
        );
    }
}

export default Charts;
