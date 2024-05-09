import { LatLng } from "leaflet";
import { useEffect } from "react";
import { Marker, useMap, useMapEvent } from "react-leaflet";
import { useRootStore } from "../../store/rootStore";

function MapClickDetector() {
  const { chooseLocation, position } = useRootStore((state) => {
    let position: LatLng | null = null;
    if (state.modalMode === "add") {
      position =
        !state.form.lat || !state.form.lng
          ? null
          : new LatLng(state.form.lat, state.form.lng);
    } else if (state.modalMode === "edit") {
      position =
        !state.editForm?.lat || !state.editForm?.lng
          ? null
          : new LatLng(state.editForm.lat, state.editForm.lng);
    }
    return {
      chooseLocation: state.chooseLocation,
      position,
    };
  });

  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position);
    }
  }, [position]);

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
