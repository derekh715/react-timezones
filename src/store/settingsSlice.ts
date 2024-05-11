import { SettingsSlice, Slice } from "./types";

export const settingsSlice: Slice<SettingsSlice> = (set) => ({
  showSeconds: false,
  darkMode: false,

  toggleShowSeconds: () => {
    set((state) => {
      state.showSeconds = !state.showSeconds;
    });
  },
  toggleDarkMode: () => {
    set((state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
  },
});
