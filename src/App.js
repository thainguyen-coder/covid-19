import { sortBy } from 'lodash';
import { useEffect, useState } from 'react';
import { getCountries } from './apis';
import CountrySelector from './components/CountrySelector';
import HighLight from './components/HighLight';
import Sumary from './components/Sumary';

function App() {
   const [countries, setCountries] =useState([]);
  useEffect(() =>{
    getCountries().then((res) =>{
        console.log({res});
       const countries = sortBy(res.data,'Country')
        setCountries(countries);
    });
},[]);
  return (
    <>
      <CountrySelector countries ={countries} ></CountrySelector>
      <HighLight></HighLight>
      <Sumary></Sumary>
    </>
  );
}

export default App;
