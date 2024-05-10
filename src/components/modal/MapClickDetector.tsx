import { LatLng } from "leaflet";
import { useEffect } from "react";
import { Marker, useMap, useMapEvent } from "react-leaflet";
import { useRootStore } from "../../store/rootStore";

function MapClickDetector() {
  const { chooseLocation, position } = useRootStore((state) => {
    let position: LatLng | null = null;
    let chooseLocation = null;
    if (state.modalMode === "add") {
      position =
        !state.addForm.lat || !state.addForm.lng
          ? null
          : new LatLng(state.addForm.lat, state.addForm.lng);
      chooseLocation = state.chooseAddFormLocation;
    } else if (state.modalMode === "edit") {
      position =
        !state.editForm?.lat || !state.editForm?.lng
          ? null
          : new LatLng(state.editForm.lat, state.editForm.lng);
      chooseLocation = state.chooseEditFormLocation;
    }
    return {
      chooseLocation,
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
    if (chooseLocation) {
      chooseLocation(event);
    }
  });

  if (!position) {
    return null;
  } else {
    return <Marker position={position}></Marker>;
  }
}

export default MapClickDetector;
