import { useRootStore } from "../../store/rootStore";
import AddNewTimezone from "./AddNewTimezone";
import SavedTimezone from "./SavedTimeZone";

function SavedTimeZonesList() {
  const { timezoneInfos, selectedInfo } = useRootStore();
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 animate-move-up">
        Saved Timezones
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {timezoneInfos.map((info, index) => {
          // don't show that timezone if it is already shown in large display
          if (index === selectedInfo) {
            return null;
          }
          return <SavedTimezone info={info} index={index} key={index} />;
        })}
        <AddNewTimezone />
      </div>
    </div>
  );
}

export default SavedTimeZonesList;
