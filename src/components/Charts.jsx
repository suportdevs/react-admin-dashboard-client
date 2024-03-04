
import { ResponsiveContainer, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar, Line, LineChart, PieChart, Pie, Cell } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Charts = ({type, childreen}) => {

    if(type === "bar"){
        return (
            <ResponsiveContainer width="100%" aspect={4/1}>
            <BarChart width={10} height={40} data={data}>
                <Bar dataKey="uv" fill="#e3e3e3" />
                <Bar dataKey="pv" fill="#ff6205"  />
            </BarChart>
        </ResponsiveContainer>
        
        );
    }
    if(type === "line"){
        return (    
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data} >
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey='uv' stroke="#8884d8" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        );
    }

    if(type === "area"){
        return (
            <ResponsiveContainer width="100%" aspect={4/1}>
                <AreaChart width={1000} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
    if(type === "pie"){
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return (
                <ResponsiveContainer width="100%" aspect={4/1}>
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
