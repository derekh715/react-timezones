import { SettingsSlice, Slice } from "./types";

export const settingsSlice: Slice<SettingsSlice> = (set) => ({
  toggleShowSeconds: () => {
    set((state) => {
      state.showSeconds = !state.showSeconds;
    });
  },
  showSeconds: false,
});
