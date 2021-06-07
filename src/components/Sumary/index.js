import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import LineChart from '../Charts/LineChart';
import HighMap from '../Charts/HighMap';
import { getMapDataByCountryId } from '../apis';

function Sumary({ report, selectCountryId }) {
    const [mapData, setMapData] = useState({});
    useEffect(() => {
        if (selectCountryId) {
            getMapDataByCountryId(selectCountryId).then((res) => {
                setMapData(res)

            })
                .catch((err) => console.log({ err }));
        }
    }, [selectCountryId])
    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report}></LineChart>
            </Grid>
            <Grid item sm={8} xs={12}>
                <HighMap mapData={mapData}></HighMap>
            </Grid>
        </Grid>
    );

}

export default Sumary;