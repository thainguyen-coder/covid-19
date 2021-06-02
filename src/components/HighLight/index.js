import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import HighLighCard from './HighLightCard'

function HighLight({ report }) {
    if (report.length > 0) {
        const data = report[report.length - 1];
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
    }
    else {
        return null;
    }

    return (
        <Grid container spacing={3}>
            {sumary.map((item, index) => {
                <HighLighCard title={item.title} count={item.count} />
            })}
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant='body2'>Số ca mắc</Typography>
                        <Typography component="p" variant='body2'>1000</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant='body2'>Số ca hồi phục</Typography>
                        <Typography component="p" variant='body2'>1000</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant='body2'>Số ca tử vong</Typography>
                        <Typography component="p" variant='body2'>1000</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default HighLight;