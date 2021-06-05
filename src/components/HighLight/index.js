import Grid from '@material-ui/core/Grid';
import React from 'react';
import HighLightCard from './HighLightCard';

export default function HighLight({ summary }) {
    // console.log('report',report);
    // const data = report && report.lenght ? report[report.lenght -1] : []; 
    // console.log("data",report.lenght)
    // const summary = [
    //     {
    //         title: 'So ca nhiễm',
    //         count: data.Confirmed,
    //         type: 'confirmed'
    //     },
    //     {
    //         title: 'So ca khỏi',
    //         count: data.Recovered,
    //         type: 'recovered'
    //     },
    //     {
    //         title: 'So ca chết',
    //         count: data.Deaths,
    //         type: 'death'
    //     }
    // ]

  return (
    <Grid container spacing={3} style={{ marginTop: 10 }}>

        {summary.map((item,idx)=> (
            <Grid key={idx} item sm={4} xs={12}>
                <HighLightCard title={item.title} count={item.count} type={item.type}/>
            </Grid>
        ))}
        
    </Grid>
  );
}