import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import MapClickDetector from "./MapClickDetector";

interface LeafletMapProps {
  className: string;
}

const defaultCenter: LatLngExpression = [24.02, 121.38];

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
