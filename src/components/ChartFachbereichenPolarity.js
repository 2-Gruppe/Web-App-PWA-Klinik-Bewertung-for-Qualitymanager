import React, { PureComponent } from 'react';
import {
    ComposedChart,
    BarChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import { FachbereichNamesKurz } from '../Data/Lists'

const data = [
    {
        name: 'Herzogin Elisabeth Hospital',

        pv: 800,

    },
    {
        name: 'Psychiatrische Klinik Lüneburg',

        pv: 967,

    },
    {
        name: 'Page rewrwe',

        pv: 1098,

    },
    {
        name: 'Page sdfsfsdfsdfd fsdfdsfds fs ',

        pv: 1200,

    },
    {
        name: 'Page E',

        pv: 1108,

    },
    {
        name: 'Page 2',

        pv: 1108,

    },
    {
        name: 'Page 3',

        pv: 1108,

    },
    {
        name: 'Page ew',

        pv: 1108,

    },


];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

    render() {

        const klinikDeData = [...this.props.data].filter(e => e.source === "klinikDe")

        let datafordiagram = []

        for (let i of FachbereichNamesKurz) {

            let einKlinik = {
                name: i,
                PolarityMean: 0,
            }


            let j = 0
            klinikDeData.map(r => {
                if (r.fachbereich === i) {
                    einKlinik.PolarityMean = einKlinik.PolarityMean + r.polarity
                    j++
                }
                return r
            })

            einKlinik.PolarityMean = (einKlinik.PolarityMean / j).toFixed(3)
            datafordiagram.push(einKlinik)
        }


        datafordiagram.sort((a, b) => (a.PolarityMean > b.PolarityMean) ? 1 : -1)


        let weit = window.screen.width - 30;
        let hoch = 550
        if (window.screen.width > 900) {
            hoch = 600;
            weit = (weit - 30) / 2
        }
        return (

            <BarChart
                layout="vertical"
                width={weit}
                height={hoch * 2}
                data={datafordiagram}
                margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" domain={[-1, +1]} />
                <YAxis dataKey="name" type="category" scale="band" width={150} style={{ fontSize: "0.9rem", whiteSpace: "nowrap", paddingLeft: "0px" }} />

                <Tooltip />
                <Legend />

                <Bar dataKey="PolarityMean" fill="#9E2631" />

            </BarChart>

        );
    }
}
