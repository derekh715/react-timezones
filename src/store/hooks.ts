import { useRootStore } from "./rootStore";
import { RootSlice } from "./types";

export const getSelectedInfo = (state: RootSlice) => {
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
