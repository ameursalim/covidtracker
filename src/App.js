import { React, useState, useEffect } from "react";
import CardBox from "./Components/CardBox";
import Map from "./Components/Map";
import TableInfo from "./Components/TableInfo";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";
import { FormControl, MenuItem, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("wordwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode);
  };
  return (
    <div className="flex justify-between ">
      <div className=" LeftSide w-5/6">
        <h1 className="text-xl font-medium text-black ">Covid App</h1>
        <div className="card flex flex-row justify-between">
          <CardBox title="Coronavirus" total={3000} />
          <CardBox title="Recovred" total={2000} />
          <CardBox title="Death" total={2000} />
          <CardBox title="Vaccin" total={2000} />
        </div>
        <Map />
        <Footer />
      </div>
      <div className="Sidebar text-black ">
        <FormControl className="dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value={country}>wordwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TableInfo />
        <Chart />
      </div>
    </div>
  );
}

export default App;
