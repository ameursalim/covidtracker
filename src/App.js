import React from "react";
import CardBox from "./Components/CardBox";
import Map from "./Components/Map";
import TableInfo from "./Components/TableInfo";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="Left_side">
        <h1>Covid App</h1>
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
