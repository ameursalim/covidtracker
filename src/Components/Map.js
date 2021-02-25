import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../utils";
function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="h-2/3 rounded-lg  bg-gray-800 p-3">
      <MapContainer center={center} zoom={zoom} className="h-full  w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
