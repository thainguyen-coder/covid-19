import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';

highchartsMap(Highcharts);

function HighMap({ mapData }) {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={{}}

            >

            </HighchartsReact>
        </div>
    );
}

export default HighMap;