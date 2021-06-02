import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import React, { useEffect } from "react";
import { getCountries } from "../../apis";

function index({ value, handleOnChange, countries }) {


  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink> Quốc gia</InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: 'country',
          id: 'country-selector'
        }}>
        {
          countries.map((country) => {
            return <option key={country.Country} value={country.ISO2.toLowerCase()}> {country.Country}</option>

          })
        }
      </NativeSelect>
    </FormControl>
  );
}

export default index;
