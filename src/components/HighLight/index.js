import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import HighLighCard from './HighLightCard'

function HighLight({ report }) {

    const data = report && report.length ? report[report.length - 1] : [];
    console.log('data1', report);
    const sumary = [{
        title: 'Số ca nhiễm',
        count: data.Confirmed,
        type: 'confirmed'
    },
    {
        title: 'Số ca hồi phục',
        count: data.Recovered,
        type: 'recovered'
    },
    {
        title: 'Số ca tử vong',
        count: data.Deaths,
        type: 'death'
    },
    ]

    return (
        <Grid container spacing={3}>
            {sumary.map((data) => (
                <Grid item sm={4} key={data.type} xs={12}>
                    <HighLighCard
                        title={data.title}
                        count={data.count}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default HighLight;