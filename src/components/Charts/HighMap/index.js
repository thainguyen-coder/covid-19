import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';

highchartsMap(Highcharts);
const initOptions = {
    chart: {
        height: '500',
    },
    title: {
        text: null,
    },
    mapNavigation: {
        enabled: true,
    },
    colorAxis: {
        min: 0,
        stops: [
            [0.2, '#FFC4AA'],
            [0.4, '#FF8A66'],
            [0.6, '#FF392B'],
            [0.8, '#B71525'],
            [1, '	#7A0826'],
        ],
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
    },
    series: [
        {
            mapData: {},
            name: 'Dân số',
            joinBy: ['hc-key', 'key'],
        },
    ],
};

function HighMap({ mapData }) {
    const [option, setOption] = useState({})
    const chartRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (mapData && Object.keys(mapData).length) {

            const fakeData = mapData.features.map((feature, index) => ({
                key: feature.properties['hc-key'],
                value: index,
            }));
            setOption({
                ...initOptions,
                series: [
                    { ...initOptions.series[0], mapData: mapData, data: fakeData },
                ],
            });
            if (!loaded) setLoaded(true);
        }

    }, [mapData, loaded]);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            chartRef.current.chart.series[0].update({
                mapData,
            });
        }
    }, [option, mapData]);

    if (!loaded) return null;

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={cloneDeep(option)}
                constructorType={'mapChart'}
                ref={chartRef}

            />
        </div>
    );
}

export default React.memo(HighMap);