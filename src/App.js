import { React, useState, useEffect } from "react";
import CardBox from "./Components/CardBox";
import Map from "./Components/Map";
import TableInfo from "./Components/TableInfo";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("wordwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countriesData, setCountriesData] = useState([]);

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
          setCountriesData(data);
        });
    };
    getCountriesData();
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode);

    const url =
      countryCode === "wordwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };

  console.log("countruy info", countryInfo);
  return (
    <div className="flex justify-evenly h-screen ">
      <div className=" LeftSide w-3/4 bg-gray-700 p-6">
        <div className="header flex justify-between mb-10">
          <div className="title flex flex-col">
            <h1 className="text-2xl font-medium text-white ">
              Coronavirus COVID-19
            </h1>
            <h2 className="text-l font-medium text-white ">Global Cases</h2>
          </div>
          <FormControl className="dropdown ">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value={country} className="text-white">
                wordwide
              </MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="card flex flex-row justify-between p-8 ">
          <CardBox
            title="Infected"
            total={countryInfo.cases}
            icon={<AccessAlarm />}
            cases={countryInfo.todayCases}
          />
          <CardBox
            title="Active"
            total={countryInfo.active}
            icon={<ThreeDRotation />}
            cases={countryInfo.active}
          />
          <CardBox
            title="Recovred"
            total={countryInfo.recovered}
            icon={<AccessAlarm />}
            cases={countryInfo.todayRecovered}
          />
          <CardBox
            title="Death"
            total={countryInfo.deaths}
            icon={<ThreeDRotation />}
            cases={countryInfo.todayDeaths}
          />
          <CardBox
            title="Vaccin"
            total={2000}
            icon={<ThreeDRotation />}
            cases={127663}
          />
        </div>
        <Map />
        <Footer />
      </div>
      <div className="Sidebar w-1/4 text-white bg-gray-800 p-6 ">
        <h1 className="text-xl font-medium text-white ">Cases Info</h1>
        <TableInfo countriesData={countriesData} />
        <Chart />
      </div>
    </div>
  );
}

export default App;
