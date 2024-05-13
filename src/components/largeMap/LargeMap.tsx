import { MapContainer, TileLayer } from "react-leaflet";
import { defaultCenter } from "../../store/shared";
import MapMarker from "./MapMaker";

function LargeMap() {
  return (
    <div className="my-8" id="large-map">
      <h2 className="text-3xl font-bold dark:text-gray-100 my-4">Map</h2>
      <MapContainer
        zoom={7}
        scrollWheelZoom={false}
        className="w-full min-h-[28rem] z-0"
        center={defaultCenter}
      >
        <MapMarker />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default LargeMap;
