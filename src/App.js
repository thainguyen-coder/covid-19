import { Container, Typography } from '@material-ui/core';
import { sortBy } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { getCountries, getReportByCountry } from './apis';
import CountrySelector from './components/CountrySelector';
import HighLight from './components/HighLight';
import Sumary from './components/Sumary';
import 'moment/locale/vi';
import moment from 'moment';
import '@fontsource/roboto';

moment.locale('vi');

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getCountries().then((res) => {
      console.log({ res });
      const countries = sortBy(res.data, 'Country')
      setCountries(countries);
      setSelectedCountryId('vn');
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);

  }
  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find((country) => country.ISO2.toLowerCase() == selectedCountryId);

      getReportByCountry(Slug).then(res => {
        res.data.pop();
        console.log('report', res.data)
        setReport(res.data)
        setIsLoaded(true);
      })
    }
  }, [selectedCountryId, countries])

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: 'Số ca nhiễm',
          count: latestData.Confirmed,
          type: 'confirmed',
        },
        {
          title: 'Khỏi',
          count: latestData.Recovered,
          type: 'recovered',
        },
        {
          title: 'Tử vong',
          count: latestData.Deaths,
          type: 'death',
        },
      ];
    }
    return [];
  }, [report]);

  if (!isLoaded) return null;
  return (
    <Container style={{ marginTop: '20px'}}>
      <Typography variant="h2" component="h2">Số liệu COVID-19</Typography>
      <Typography>{moment().format('LLL')}</Typography>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId}/>
      <HighLight summary={summary}/>
      <Sumary report={report} selectedCountryId={selectedCountryId}/>
    </Container>
  );
}

export default App;
