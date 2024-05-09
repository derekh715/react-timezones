import Clock from "react-live-clock";
import { TimezoneInfo } from "../../types";

interface TimeDisplayProps {
  className: string;
  info: TimezoneInfo;
}

function TimeDisplay({ className, info: { timezone } }: TimeDisplayProps) {
  return (
    <span
      className={"cursor-pointer block " + className}
      title="Click to show seconds"
    >
      <Clock ticking format="HH:mm:ss" timezone={timezone.name} />
    </span>
  );
}

export default TimeDisplay;
