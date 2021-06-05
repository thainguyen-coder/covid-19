import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    wrapper: (props) => {
      if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
      if (props.type === 'recovered') return { borderLeft: '5px solid #28a745' };
      else return { borderLeft: '5px solid gray' };
    },
    title: { fontSize: 18, marginBottom: 5 },
    count: { fontWeight: 'bold', fontSize: 18 },
  });

export default function HighLightCard({ title, count, type }) {
  const styles = useStyles({ type });
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography variant='body2' component='p' className={styles.title}>
          {title}
        </Typography>
        <Typography variant='body2' component='span' className={styles.count}>
          {/* {count} */}
            <CountUp end={count} separator=' ' duration={2} />
        </Typography>
      </CardContent>
    </Card>
  );
}