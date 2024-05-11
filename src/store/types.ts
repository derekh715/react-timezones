import { LeafletMouseEvent } from "leaflet";
import { typeToFlattenedError, z } from "zod";
import { StateCreator } from "zustand";
import { GeoapifyTimezone, TimezoneInfo } from "../types";

export const formSchema = z.object({
  lat: z.number().gte(-90).lte(90),
  lng: z.number().gte(-180).lte(180),
  country: z.string().min(1),
  city: z.string().min(1),
});

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Slice<T> = StateCreator<
  RootSlice,
  [["zustand/persist", unknown], ["zustand/immer", never]],
  [],
  T
>;
export type Setter<T> = Parameters<Slice<T>>[0];

export type FormValues = z.infer<typeof formSchema>;
export type OptionalFormValues = PartialBy<FormValues, "lat" | "lng">;

export type FormNames = keyof FormValues;

export type ModalMode = "add" | "edit" | "delete" | "none";

export interface ModalSlice {
  modalMode: ModalMode;
  openModal: (mode: ModalMode) => void;
  dismissModal: () => void;
}

export interface AddFormSlice {
  addTimezoneInfo?: GeoapifyTimezone;
  addFieldErrors: typeToFlattenedError<FormValues>["fieldErrors"];
  addForm: OptionalFormValues;

  chooseAddFormLocation: (event: LeafletMouseEvent) => void;
  updateForm: (name: keyof FormValues, value: string) => void;
  submit: () => void;
}

export interface EditFormSlice {
  editFieldErrors: typeToFlattenedError<FormValues>["fieldErrors"];
  editTimezoneInfo?: GeoapifyTimezone;
  editForm: OptionalFormValues;

  chooseEditFormLocation: (event: LeafletMouseEvent) => void;
  updateEditForm: (name: keyof FormValues, value: string) => void;
  change: () => void;
}

export interface SettingsSlice {
  showSeconds: boolean;
  darkMode: boolean;

  toggleShowSeconds: () => void;
  toggleDarkMode: () => void;
}

export interface InfoSlice {
  timezoneInfos: TimezoneInfo[];
  selectedInfo: number;

  setSelectedInfo: (index: number) => void;
  deleteSelectedInfo: () => void;
}

export type RootSlice = ModalSlice &
  AddFormSlice &
  EditFormSlice &
  SettingsSlice &
  InfoSlice;
