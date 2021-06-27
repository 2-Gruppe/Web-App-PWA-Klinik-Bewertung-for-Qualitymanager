import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';



export default class ChartGruppe extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';



    render() {

        const getIntroOfPage = (label) => {
            if (label === 'Gruppe-1') {
                return "Gr-1"
            }
            if (label === 'Gruppe-2') {
                return "Gr-2"
            }
            if (label === 'Gruppe-3') {
                return "Gr-3"
            }
            if (label === 'Gruppe-4') {
                return "Gr-4"
            }
            return '';
        };


        const CustomTooltip = ({ active, payload, label }) => {
            if (active) {

                return (
                    <div className="custom-tooltip flex-row" >
                        <p className="label" style={{ backgroundColor: "white", color: "black", padding: "10px 10px" }}>



                            {`${getIntroOfPage(payload[0].name)} : ${payload[0].value}`}


                        </p>
                    </div>
                );
            }
            return null;
        };

        const getIntroOfGroup = (label) => {
            if (label === 'Gruppe-1') {
                return "Gr-1"
            }
            if (label === 'Gruppe-2') {
                return "Gr-2"
            }
            if (label === 'Gruppe-3') {
                return "Gr-3"
            }
            if (label === 'Gruppe-4') {
                return "Gr-4"
            }
            return '';
        };

        const renderLegend = (props) => {
            const { payload } = props;

            return (
                <div style={{ display: 'flex', justifyContent: "center", gap: '1em' }}>
                    {
                        payload.map((entry, index) => (

                            <div style={{ color: entry.color }}>
                                {getIntroOfGroup(entry.value)}
                            </div>
                        ))
                    }
                </div>
            );
        }



        const COLORS = ['#00C49F', '#FF8042', '#FFBB28', '#0088FE'];

        const RADIAN = Math.PI / 180;

        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 1.08;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill={this.props.dark ? "#dddddd" : "#555555"} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };

        let weit = window.screen.width - 155;
        if (window.screen.width > 900) {
            weit = 300;
        }

        return (

            <PieChart width={weit + 40} height={weit}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={this.props.data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={weit / 3}
                    fill="#8884d8"
                >
                    {this.props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend content={renderLegend} />
                <Tooltip content={<CustomTooltip />} />
            </PieChart>

        );
    }
}









