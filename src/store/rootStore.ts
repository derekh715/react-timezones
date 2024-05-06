import { LatLng, LatLngTuple, LeafletMouseEvent } from "leaflet";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { GeoapifyTimezone } from "../types";
import { getTimezoneByLatlng } from "../utils/geoapify";

export interface RootState {
  modalVisible: boolean;
  openModal: () => void;
  dismissModal: () => void;
  chooseLocation: (event: LeafletMouseEvent) => void;
  form: FormValues;
  timezoneInfo?: GeoapifyTimezone;
  updateForm: (name: keyof FormValues, value: string) => void;
}

export interface FormValues {
  lat?: number;
  lng?: number;
  country: string;
  city: string;
}

export type FormNames = keyof FormValues;

export const defaultCenter: LatLngTuple = [24.02, 121.38];

export function defaultOrLatLng(state: RootState) {
  return new LatLng(
    state.form.lat ?? defaultCenter[0],
    state.form.lng ?? defaultCenter[1]
  );
}

export const useRootStore = create<RootState>()(
  immer((set) => ({
    modalVisible: false,
    form: {
      lat: undefined,
      lng: undefined,
      country: "",
      city: "",
    },
    openModal: () => {
      set((state) => {
        state.modalVisible = true;
      });
    },
    dismissModal: () => {
      set((state) => {
        state.modalVisible = false;
        state.form = {
          lat: undefined,
          lng: undefined,
          country: "",
          city: "",
        };
        state.timezoneInfo = undefined;
      });
    },
    chooseLocation: async (event: LeafletMouseEvent) => {
      const result = await getTimezoneByLatlng(
        event.latlng.lat,
        event.latlng.lng
      );

      if (!result) {
        return;
      }

      set((state) => {
        state.form.lat = event.latlng.lat;
        state.form.lng = event.latlng.lng;
        state.form.city = result.city;
        state.form.country = result.country;
        state.timezoneInfo = result.timezone;
      });
    },
    updateForm: (name: FormNames, value: string) => {
      if (name === "lat" || name === "lng") {
        set((state) => {
          state.form[name] = parseFloat(value);
        });
      } else {
        set((state) => {
          state.form[name] = value;
        });
      }
    },
  }))
);
