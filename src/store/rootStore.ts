import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { addFormSlice } from "./addFormSlice";
import { editFormSlice } from "./editFormSlice";
import { infoSlice } from "./infoSlice";
import { modalSlice } from "./modalSlice";
import { settingsSlice } from "./settingsSlice";
import { RootSlice } from "./types";

export const useRootStore = create<RootSlice>()(
  persist(
    immer((...a) => {
      return {
        ...addFormSlice(...a),
        ...editFormSlice(...a),
        ...modalSlice(...a),
        ...settingsSlice(...a),
        ...infoSlice(...a),
      };
    }),
    { name: "state" }
  )
);
