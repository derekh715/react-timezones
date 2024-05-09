import { Fragment } from "react/jsx-runtime";
import { useSelectedInfo } from "../../store/rootStore";
import TimeDisplay from "../timezoneCards/CurrentTime";
import DisplayControls from "./DisplayControls";
import ViewInMapButton from "./ViewInMapButton";

function LargeDisplay() {
  const selectedInfo = useSelectedInfo();
  return (
    <div className="min-h-64 rounded-lg text-white p-20 my-12 animate-move-up bg-gradient-to-br from-primary-600 to-primary-900 relative">
      {selectedInfo ? (
        <Fragment>
          <h2 className="text-5xl font-bold mb-12">
            {selectedInfo.country} / {selectedInfo.city}
          </h2>
          <TimeDisplay
            className="text-4xl font-extrabold mb-8"
            info={selectedInfo}
          />
          <ViewInMapButton />
          <DisplayControls />
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="text-4xl font-bold mb-12">No timezones selected.</h2>
        </Fragment>
      )}
    </div>
  );
}

export default LargeDisplay;
