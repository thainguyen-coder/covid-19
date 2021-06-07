import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    wrapper: (props) => {

        if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
        if (props.type === 'recovered') return { borderLeft: '5px solid #15bd3b' };
        else return { borderLeft: '5px solid gray' };
    },
    title: { fontSize: 18, marginBottom: 5 },
    count: { fontWeight: 'bold', fontSize: 18 },
});

function HighLightCard({ title, count, type }) {
    const style = useStyles({ type });
    return (
        <Card className={style.wrapper}>
            <CardContent>
                <Typography variant='body2' component='p' className={style.title}>
                    {title}
                </Typography>
                <Typography component="p" variant='body2' className={style.count}>
                    <CountUp end={count || 0} duration={2}></CountUp>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HighLightCard;