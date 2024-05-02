import { TimezoneInfo } from "../../types";
import AddNewTimezone from "./AddNewTimezone";
import SavedTimezone from "./SavedTimeZone";

// temporary
const timezones: TimezoneInfo[] = [
  {
    country: "Country1",
    city: "City1",
  },
  {
    country: "Country2",
    city: "City2",
  },
];

function SavedTimeZonesList() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 animate-move-up">
        Saved Timezones
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {timezones.map((info) => {
          return <SavedTimezone info={info} />;
        })}
        <AddNewTimezone />
      </div>
    </div>
  );
}

export default SavedTimeZonesList;
