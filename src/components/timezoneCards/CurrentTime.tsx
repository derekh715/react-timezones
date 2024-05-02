interface TimeDisplayProps {
  className: string;
}

function TimeDisplay({ className }: TimeDisplayProps) {
  return (
    <span className={"cursor-pointer block " + className} title="Show Seconds">
      <span>13</span>
      <span className="animate-blink">:</span>
      <span>04</span>
    </span>
  );
}

export default TimeDisplay;
