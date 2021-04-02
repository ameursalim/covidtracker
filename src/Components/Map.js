import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../utils";
function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="h-2/3 rounded-lg  p-4">
      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full  w-full rounded-full py-4 px-8"
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/salimameur/ckky7y6qx19fk17od79pe7y1e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FsaW1hbWV1ciIsImEiOiJja2t5N3JleGkybndzMm9xbmZ6cXA3NXFtIn0.i8b6gAuKf9ZdhG8cosM0PA"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
