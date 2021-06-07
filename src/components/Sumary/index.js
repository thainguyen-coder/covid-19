import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getMapDataByCountryId } from '../apis';
import HighMap from '../Charts/HighMap';
import LineChart from '../Charts/LineChart';

function Sumary({ report, selectCountryId }) {
    const [mapData, setMapData] = useState({});

    useEffect(() => {
        if (selectCountryId) {
            getMapDataByCountryId(selectCountryId).then((res) => {
                //console.log('hello res', res)
                setMapData(res)

            })
                .catch((err) => console.log({ err }));
        }
    }, [selectCountryId])


    return (
        <div style={{ height: '500px', marginTop: 10 }}>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LineChart data={report} />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <HighMap mapData={mapData} />
                </Grid>
            </Grid>
        </div>
    );

}

export default Sumary;