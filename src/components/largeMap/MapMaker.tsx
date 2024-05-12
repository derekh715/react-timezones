import { LatLng } from "leaflet";
import { useEffect, useMemo } from "react";
import { Marker, useMap } from "react-leaflet";
import { useSelectedInfo } from "../../store/hooks";
import { defaultCenter } from "../../store/shared";

function MapMarker() {
  const selectedInfo = useSelectedInfo();

  let position = useMemo(() => {
    if (selectedInfo) {
      return new LatLng(selectedInfo.lat, selectedInfo.lng);
    } else {
      return new LatLng(defaultCenter[0], defaultCenter[1]);
    }
  }, [selectedInfo]);

  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 7);
    }
  }, [position]);

  if (selectedInfo) {
    return <Marker position={position}></Marker>;
  } else {
    return null;
  }

  return;
}

export default MapMarker;
