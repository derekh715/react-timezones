import { LatLng } from "leaflet";
import { Marker, useMapEvent } from "react-leaflet";
import { useRootStore } from "../../store/rootStore";

function MapClickDetector() {
  const { chooseLocation, position } = useRootStore((state) => ({
    chooseLocation: state.chooseLocation,
    position:
      !state.form.lat || !state.form.lng
        ? null
        : new LatLng(state.form.lat, state.form.lng),
  }));

  useMapEvent("click", (event) => {
    chooseLocation(event);
  });

  if (!position) {
    return null;
  } else {
    return <Marker position={position}></Marker>;
  }
}

export default MapClickDetector;
