import Clock from "react-live-clock";
import { useRootStore } from "../../store/rootStore";
import { TimezoneInfo } from "../../types";

interface TimeDisplayProps {
  className: string;
  info: TimezoneInfo;
}

function TimeDisplay({ className, info: { timezone } }: TimeDisplayProps) {
  const { showSeconds, toggleShowSeconds } = useRootStore();

  return (
    <span
      className={"cursor-pointer block " + className}
      title="Click to show seconds"
      onClick={toggleShowSeconds}
    >
      <Clock
        ticking
        blinking={"all"}
        format={showSeconds ? "HH:mm:ss" : "HH:mm"}
        timezone={timezone.name}
        // this forces the clock to re-render
        // Clock isn't updating correctly
        key={showSeconds.toString()}
      />
    </span>
  );
}

export default TimeDisplay;
