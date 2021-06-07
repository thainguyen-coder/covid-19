import { Container } from '@material-ui/core';
import { sortBy } from 'lodash';
import { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './components/apis';
import CountrySelector from './components/CountrySelector';
import HighLight from './components/HighLight';
import Sumary from './components/Sumary';

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
  if (!isLoaded) return null;
  return (
    <Container>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId} ></CountrySelector>
      <HighLight report={report}></HighLight>
      <Sumary report={report}></Sumary>
    </Container>
  );
}

export default App;
