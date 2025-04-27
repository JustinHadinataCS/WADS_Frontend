import { AreaChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Area } from 'recharts';

const data = [
    { time: '12:00', responseTime: 180 },
    { time: '13:00', responseTime: 200 },
    { time: '14:00', responseTime: 170 },
    { time: '15:00', responseTime: 220 },
    { time: '16:00', responseTime: 210 },
  ];

export default function PerformanceMetricsContent(){
    return(
        <div className="h-72 p-4">
            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ right: 40 }}>
                    {/* Define the gradient for the shade */}
                    <defs>
                        <linearGradient id="colorResponseTime" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.9}/>
                        <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.4}/>
                        </linearGradient>
                    </defs>

                    {/* Horizontal grid lines */}
                    <CartesianGrid stroke="#cacaca" strokeDasharray="5 0" horizontal={true} vertical={false} />
                    <XAxis dataKey="time" stroke="#bababa" tick={{ dx: 0, dy:10,textAnchor: 'start' }}/>
                    <YAxis stroke="#bababa" strokeDasharray="0 1"/>
                    <Tooltip 
                        contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                        itemStyle={{ color: "#fff" }}
                    />
                    
                    {/* Shaded area under the line */}
                    <Area 
                        type="linear" 
                        dataKey="responseTime" 
                        stroke="#60A5FA" 
                        strokeWidth={3}
                        dot={true} 
                        fill="url(#colorResponseTime)" 
                    />

                    {/* Actual line */}
                    <Line 
                        type="linear" 
                        dataKey="responseTime" 
                        stroke="#60A5FA" 
                        strokeWidth={3}
                        dot={true} 
                    />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}