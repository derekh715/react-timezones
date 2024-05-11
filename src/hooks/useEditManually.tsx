import { useReducer } from "react";

export const useEditManually = () => {
  const [canEditManually, toggle] = useReducer((state) => !state, false);
  const checkbox = (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        onClick={toggle}
        checked={canEditManually}
        name="edit_manually"
        className="size-4"
      />
      <label htmlFor="edit_manually">Edit country and city name manually</label>
    </div>
  );

  return { checkbox, canEditManually, toggle };
};
