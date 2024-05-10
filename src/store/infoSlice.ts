import { InfoSlice, Slice } from "./types";

export const infoSlice: Slice<InfoSlice> = (set) => ({
  selectedInfo: -1,
  setSelectedInfo: (index) => {
    set((state) => {
      state.selectedInfo = index;
    });
  },
  deleteSelectedInfo: () => {
    set((state) => {
      state.timezoneInfos.splice(state.selectedInfo, 1);
      state.selectedInfo = -1;
    });
  },
  timezoneInfos: [],
});
