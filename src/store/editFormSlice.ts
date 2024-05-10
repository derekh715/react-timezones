import { chooseLocation } from "./shared";
import { EditFormSlice, FormNames, Slice, formSchema } from "./types";

export const editFormSlice: Slice<EditFormSlice> = (set) => ({
  editForm: {
    lat: undefined,
    lng: undefined,
    country: "",
    city: "",
  },
  editFieldErrors: {},
  chooseEditFormLocation: (event) => chooseLocation(event, set),
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
});
