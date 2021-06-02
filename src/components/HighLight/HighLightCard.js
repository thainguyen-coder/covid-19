import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function HighLightCard({ title, count }) {
    return (
        <Card>
            <CardContent>
                <Typography component="p" variant='body2'>{title}</Typography>
                <Typography component="p" variant='body2'>{count}</Typography>
            </CardContent>
        </Card>
    );
}

export default HighLightCard;