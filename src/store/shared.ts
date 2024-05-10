import { LatLng, LatLngTuple, LeafletMouseEvent } from "leaflet";
import { getTimezoneByLatlng } from "../utils/geoapify";
import { OptionalFormValues, RootSlice, Setter } from "./types";

export const chooseLocation = async <T>(
  event: LeafletMouseEvent,
  set: Setter<T>
) => {
  const result = await getTimezoneByLatlng(event.latlng.lat, event.latlng.lng);

  if (!result) {
    return;
  }

  set((state) => {
    if (state.modalMode === "add") {
      state.addForm.lat = event.latlng.lat;
      state.addForm.lng = event.latlng.lng;
      state.addForm.city = result.city;
      state.addForm.country = result.country;
      state.addTimezoneInfo = result.timezone;
    } else if (state.modalMode === "edit") {
      state.editForm.lat = event.latlng.lat;
      state.editForm.lng = event.latlng.lng;
      state.editForm.city = result.city;
      state.editForm.country = result.country;
      state.editTimezoneInfo = result.timezone;
    }
  });
};

export const defaultFormState: OptionalFormValues = {
  lat: undefined,
  lng: undefined,
  country: "",
  city: "",
};
export function defaultOrLatLng(state: RootSlice) {
  return new LatLng(
    state.addForm.lat ?? defaultCenter[0],
    state.addForm.lng ?? defaultCenter[1]
  );
}

export const defaultCenter: LatLngTuple = [24.02, 121.38];
