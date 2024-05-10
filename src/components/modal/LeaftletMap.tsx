import { MapContainer, TileLayer } from "react-leaflet";
import { defaultCenter } from "../../store/shared";
import MapClickDetector from "./MapClickDetector";

interface LeafletMapProps {
  className: string;
}

function LeaftletMap({ className }: LeafletMapProps) {
  return (
    <MapContainer
      center={defaultCenter}
      zoom={7}
      className={className}
      scrollWheelZoom={false}
    >
      <MapClickDetector />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default LeaftletMap;
