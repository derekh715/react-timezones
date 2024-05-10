import { chooseLocation } from "./shared";
import { AddFormSlice, FormNames, Slice, formSchema } from "./types";

export const addFormSlice: Slice<AddFormSlice> = (set) => ({
  addForm: {
    lat: undefined,
    lng: undefined,
    country: "",
    city: "",
  },
  addFieldErrors: {},

  chooseAddFormLocation: (event) => chooseLocation(event, set),
  updateForm: (name: FormNames, value: string) => {
    if (name === "lat" || name === "lng") {
      set((state) => {
        state.addForm[name] = parseFloat(value);
      });
    } else {
      set((state) => {
        state.addForm[name] = value;
      });
    }
  },
  submit: () => {
    set((state) => {
      const result = formSchema.safeParse(state.addForm);
      if (!result.success) {
        state.addFieldErrors = result.error.flatten().fieldErrors;
      }
      // add new result
      state.addFieldErrors = {};
      state.timezoneInfos.push({
        ...result.data!,
        timezone: state.addTimezoneInfo!,
      });
      state.modalMode = "none";
    });
  },
});
