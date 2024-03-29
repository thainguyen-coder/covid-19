import { FormControl, FormHelperText, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";


function index({ value, handleOnChange, countries }) {


  return (
    <FormControl style={{ marginTop: 10 }}>
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
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>

  );
}

export default index;
