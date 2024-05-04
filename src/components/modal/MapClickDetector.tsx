import { LatLng } from "leaflet";
import { useState } from "react";
import { Marker, useMapEvent } from "react-leaflet";

function MapClickDetector() {
  const [location, setLocation] = useState<null | LatLng>(null);

  useMapEvent("click", (event) => {
    setLocation(event.latlng);
  });

  if (!location) {
    return null;
  } else {
    return <Marker position={location}></Marker>;
  }
}

export default MapClickDetector;
