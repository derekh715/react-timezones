import { ArrowRight } from "react-feather";
import { Fragment } from "react/jsx-runtime";
import { useRootStore } from "../../store/rootStore";
import TimeDisplay from "./CurrentTime";

function LargeDisplay() {
  const selectedInfo = useRootStore((state) => {
    if (
      state.selectedInfo >= 0 &&
      state.selectedInfo < state.timezoneInfos.length
    ) {
      return state.timezoneInfos[state.selectedInfo];
    } else {
      return null;
    }
  });

  return (
    <div className="min-h-64 rounded-lg text-white p-20 my-12 animate-move-up bg-gradient-to-br from-primary-600 to-primary-900">
      {selectedInfo ? (
        <Fragment>
          <h2 className="text-5xl font-bold mb-12">
            {selectedInfo.country} / {selectedInfo.city}
          </h2>
          <TimeDisplay
            className="text-4xl font-extrabold mb-8"
            info={selectedInfo}
          />
          <button className="outline-none bg-none border-b-2 border-white hover:border-gray-200 border-solid text-white  cursor-pointer text-xl hover:text-gray-200 transition-colors">
            <span>View In Map</span>
            <ArrowRight className="inline-block ml-1" />
          </button>
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
