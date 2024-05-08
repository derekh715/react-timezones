import { TimezoneInfo } from "../../types";
import TimeDisplay from "./CurrentTime";

interface SavedTimezoneProps {
  info: TimezoneInfo;
}

function SavedTimezone({ info }: SavedTimezoneProps) {
  return (
    <div className="bg-blue-700 text-white rounded-lg shadow-md p-8 animate-move-up cursor-pointer transition-all hover:-translate-y-4 hover:shadow-lg">
      <h2 className="text-xl font-bold mb-12">
        {info.country} / {info.city}
      </h2>
      <TimeDisplay className="text-lg font-normal mb-2" />
    </div>
  );
}

export default SavedTimezone;
