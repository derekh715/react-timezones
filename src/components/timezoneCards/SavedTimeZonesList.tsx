import { useRootStore } from "../../store/rootStore";
import AddNewTimezone from "./AddNewTimezone";
import SavedTimezone from "./SavedTimeZone";

function SavedTimeZonesList() {
  const timezoneInfos = useRootStore((state) => state.timezoneInfos);
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 animate-move-up">
        Saved Timezones
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {timezoneInfos.map((info) => {
          return <SavedTimezone info={info} />;
        })}
        <AddNewTimezone />
      </div>
    </div>
  );
}

export default SavedTimeZonesList;
