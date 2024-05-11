import { useRootStore } from "../../store/rootStore";
import { TimezoneInfo } from "../../types";
import TimeDisplay from "./CurrentTime";

interface SavedTimezoneProps {
  info: TimezoneInfo;
  index: number;
}

function SavedTimezone({ info, index }: SavedTimezoneProps) {
  const setSelectedInfo = useRootStore((state) => state.setSelectedInfo);
  return (
    <div
      className="bg-blue-700 text-gray-100 rounded-lg shadow-md p-8 animate-move-up cursor-pointer transition-all hover:-translate-y-4 hover:shadow-lg min-h-48 dark:bg-blue-500"
      onClick={() => setSelectedInfo(index)}
    >
      <h2 className="text-xl font-bold mb-12">
        {info.country} / {info.city}
      </h2>
      <TimeDisplay className="text-lg font-normal mb-2" info={info} />
    </div>
  );
}

export default SavedTimezone;
