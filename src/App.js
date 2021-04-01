import { React, useState, useEffect } from "react";
import CardBox from "./Components/CardBox";
import Map from "./Components/Map";
import TableInfo from "./Components/TableInfo";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { sortData, prettyPrintStat } from "./utils";
import "leaflet/dist/leaflet.css";
import { RiVirusFill } from "react-icons/ri";
import { GiDeathSkull } from "react-icons/gi";
import { FaBiohazard, FaBriefcaseMedical } from "react-icons/fa";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countriesData, setCountriesData] = useState([]);
  const [center, setCenter] = useState({ lat: 34.366, lng: -21.798 });
  const [zoom, setZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setCountries(countries);
          setCountriesData(sortedData);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setCenter([data.countryInfo.lat, data.countryInfo.long]);
        setZoom(4);
      });
  };

  console.log("countruy info", countryInfo);
  return (
    <div className="flex justify-evenly h-screen ">
      <div
        className=" LeftSide w-3/4 bg-gray-700 p-6"
        style={{ backgroundColor: "#282b2e" }}
      >
        <div className="header flex justify-between mb-10">
          <div className="flex flex-row text-white text-2xl ml-4 ">
            <RiVirusFill />

            <div className="title flex flex-col">
              <h1 className="text-2xl font-medium text-white ">
                Coronavirus COVID-19
              </h1>
              <h2 className="text-l font-small text-gray-500 ">Global Cases</h2>
            </div>
          </div>
          <FormControl className="dropdown ">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide" style={{ color: "white" }}>
                worldwide
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
            total={prettyPrintStat(countryInfo.cases)}
            icon={<FaBiohazard size={30} />}
            cases={prettyPrintStat(countryInfo.todayCases)}
            color="#ba3131"
          />
          <CardBox
            title="Active"
            total={prettyPrintStat(countryInfo.active)}
            icon={<RiVirusFill size={30} />}
            cases={prettyPrintStat(countryInfo.activePerOneMillion)}
            color="#f5c778"
          />
          <CardBox
            title="Recovred"
            total={prettyPrintStat(countryInfo.recovered)}
            icon={<FaBriefcaseMedical size={30} />}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            color="#4f4e53"
          />
          <CardBox
            title="Death"
            total={prettyPrintStat(countryInfo.deaths)}
            icon={<GiDeathSkull size={30} />}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            color="#5cc1ac"
          />
          {/* <CardBox
            title="Vaccin"
            total={2000}
            icon={<ThreeDRotation />}
            cases={127663}
          /> */}
        </div>

        <Map countries={mapCountries} center={center} zoom={zoom} />

        <Footer />
      </div>
      <div
        className="Sidebar w-1/4 text-white  p-6 "
        style={{ backgroundColor: "#222529" }}
      >
        <h1 className="text-xl font-medium text-white ">Cases Info</h1>
        <TableInfo countriesData={countriesData} />
        <h1 className="text-2xl font-medium text-white ">
          Last worldwide Cases
        </h1>
        <Chart />
      </div>
    </div>
  );
}

export default App;
