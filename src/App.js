import React from "react";
import CardBox from "./Components/CardBox";
import Map from "./Components/Map";
import TableInfo from "./Components/TableInfo";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex justify-between ">
      <div className="bg-current w-5/6">
        <h1 className="text-xl font-medium text-white ">Covid App</h1>
        <CardBox />
        <Map />
        <Footer />
      </div>
      <div className="Sidebar">
        <TableInfo />
        <Chart />
      </div>
    </div>
  );
}

export default App;
