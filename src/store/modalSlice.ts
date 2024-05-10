import { defaultFormState } from "./shared";
import { ModalMode, ModalSlice, Slice } from "./types";

export const modalSlice: Slice<ModalSlice> = (set) => ({
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
      if (state.modalMode === "add") {
        state.addForm = defaultFormState;
      } else if (state.modalMode === "edit") {
        state.editForm = defaultFormState;
      }
      state.modalMode = "none";
      state.addTimezoneInfo = undefined;
    });
  },
  modalMode: "none",
});
