import { MouseEventHandler } from "react";
import { X } from "react-feather";
import Input from "../form/Input";
import LeaftletMap from "./LeaftletMap";

interface TimezoneInfoModalProps {
  visible: boolean;
  dismiss: () => void;
}

function TimezoneInfoModal({ visible, dismiss }: TimezoneInfoModalProps) {
  const outerClasses = visible ? "visible opacity-1" : "invisible opacity-0";
  const contentClasses = visible ? "scale-100" : "scale-75";

  const onModalClicked: MouseEventHandler<HTMLDivElement> = (event) => {
    // only dismiss when dark area is clicked
    if (event.target === event.currentTarget) {
      dismiss();
    }
  };

  return (
    <div
      className={`bg-black/90 z-50 fixed top-0 left-0 w-screen h-screen transition-opacity cursor-pointer ${outerClasses}`}
      onClick={onModalClicked}
    >
      <div
        className={`transition-transform bg-gray-100 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-4/5 rounded-lg px-8 pb-12 ${contentClasses}`}
      >
        <X
          className="absolute right-6 top-6 size-7 transition-all text-slate-700 hover:text-slate-900"
          onClick={dismiss}
        />
        <h2 className="mt-6 mb-12 font-bold text-3xl">Add New Timezone</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-start-1 col-end-3">
            <p>Pick a point in the map to automatically fill in the values.</p>
            <LeaftletMap className="h-[90%]" />
          </div>
          <form className="col-start-3 col-end-4">
            <Input label="Country Name" name="country" />
            <Input label="City Name" name="city" />
            <Input label="Latitude" name="lat" />
            <Input label="Longitude" name="lng" />
            <button className="my-4 py-2 px-5 rounded-md text-white bg-primary-700 font-semibold text-lg hover:bg-primary-900 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TimezoneInfoModal;
