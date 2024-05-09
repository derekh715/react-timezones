import { LatLng, LatLngTuple, LeafletMouseEvent } from "leaflet";
import { typeToFlattenedError, z } from "zod";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { GeoapifyTimezone, TimezoneInfo } from "../types";
import { getTimezoneByLatlng } from "../utils/geoapify";

const formSchema = z.object({
  lat: z.number().gte(-90).lte(90),
  lng: z.number().gte(-180).lte(180),
  country: z.string().min(1),
  city: z.string().min(1),
});

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type FormValues = z.infer<typeof formSchema>;
export type OptionalFormValues = PartialBy<FormValues, "lat" | "lng">;

export type FormNames = keyof FormValues;

export type ModalMode = "add" | "edit" | "delete" | "none";

export interface RootState {
  openModal: (mode: ModalMode) => void;
  dismissModal: () => void;
  chooseLocation: (event: LeafletMouseEvent) => void;
  submit: () => void;
  change: () => void;
  updateForm: (name: keyof FormValues, value: string) => void;
  updateEditForm: (name: keyof FormValues, value: string) => void;
  setSelectedInfo: (index: number) => void;
  toggleShowSeconds: () => void;
  deleteSelectedInfo: () => void;

  modalMode: ModalMode;
  timezoneInfos: TimezoneInfo[];
  form: OptionalFormValues;
  editForm: OptionalFormValues;
  timezoneInfo?: GeoapifyTimezone;
  fieldErrors: typeToFlattenedError<FormValues>["fieldErrors"];
  editFieldErrors: typeToFlattenedError<FormValues>["fieldErrors"];
  editTimezoneInfo?: GeoapifyTimezone;
  selectedInfo: number;
  showSeconds: boolean;
}

export const defaultCenter: LatLngTuple = [24.02, 121.38];

export function defaultOrLatLng(state: RootState) {
  return new LatLng(
    state.form.lat ?? defaultCenter[0],
    state.form.lng ?? defaultCenter[1]
  );
}

export const useRootStore = create<RootState>()(
  persist(
    immer((set) => ({
      timezoneInfos: [],
      modalMode: "none",
      form: {
        lat: undefined,
        lng: undefined,
        country: "",
        city: "",
      },
      editForm: {
        lat: undefined,
        lng: undefined,
        country: "",
        city: "",
      },
      openModal: (mode: ModalMode) => {
        set((state) => {
          state.modalMode = mode;
          if (mode === "edit") {
            state.editForm = state.timezoneInfos[state.selectedInfo];
          }
        });
      },
      dismissModal: () => {
        set((state) => {
          if (state.modalMode === "add" || state.modalMode === "edit") {
            state.form = {
              lat: undefined,
              lng: undefined,
              country: "",
              city: "",
            };
          }
          state.modalMode = "none";
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
          if (state.modalMode === "add") {
            state.form.lat = event.latlng.lat;
            state.form.lng = event.latlng.lng;
            state.form.city = result.city;
            state.form.country = result.country;
            state.timezoneInfo = result.timezone;
          } else if (state.modalMode === "edit") {
            state.editForm.lat = event.latlng.lat;
            state.editForm.lng = event.latlng.lng;
            state.editForm.city = result.city;
            state.editForm.country = result.country;
            state.editTimezoneInfo = result.timezone;
          }
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
      updateEditForm: (name: FormNames, value: string) => {
        if (name === "lat" || name === "lng") {
          set((state) => {
            state.editForm[name] = parseFloat(value);
          });
        } else {
          set((state) => {
            state.editForm[name] = value;
          });
        }
      },
      fieldErrors: {},
      editFieldErrors: {},
      submit: () => {
        set((state) => {
          const result = formSchema.safeParse(state.form);
          if (!result.success) {
            state.fieldErrors = result.error.flatten().fieldErrors;
          }
          // add new result
          state.fieldErrors = {};
          state.timezoneInfos.push({
            ...result.data!,
            timezone: state.timezoneInfo!,
          });
          state.modalMode = "none";
        });
      },
      change: () => {
        set((state) => {
          const result = formSchema.safeParse(state.editForm);
          if (!result.success) {
            state.editFieldErrors = result.error.flatten().fieldErrors;
          }
          // add new result
          state.timezoneInfos[state.selectedInfo] = {
            ...result.data!,
            timezone: state.editTimezoneInfo!,
          };
          state.modalMode = "none";
        });
      },
      selectedInfo: -1,
      setSelectedInfo: (index) => {
        set((state) => {
          state.selectedInfo = index;
        });
      },
      toggleShowSeconds: () => {
        set((state) => {
          state.showSeconds = !state.showSeconds;
        });
      },
      showSeconds: false,
      deleteSelectedInfo: () => {
        set((state) => {
          state.timezoneInfos.splice(state.selectedInfo, 1);
          state.selectedInfo = -1;
        });
      },
    })),
    { name: "state" }
  )
);

export const getSelectedInfo = (state: RootState) => {
  if (
    state.selectedInfo >= 0 &&
    state.selectedInfo < state.timezoneInfos.length
  ) {
    return state.timezoneInfos[state.selectedInfo];
  } else {
    return null;
  }
};

export const useSelectedInfo = () =>
  useRootStore((state) => {
    return getSelectedInfo(state);
  });
