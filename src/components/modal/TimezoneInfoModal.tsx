import { MouseEventHandler } from "react";
import { X } from "react-feather";
import { useRootStore } from "../../store/rootStore";
import Form from "./Form";
import LeaftletMap from "./LeaftletMap";

interface TimezoneInfoModalProps {}

function TimezoneInfoModal(_: TimezoneInfoModalProps) {
  const { modalVisible, dismissModal } = useRootStore();
  const outerClasses = modalVisible
    ? "visible opacity-1"
    : "invisible opacity-0";
  const contentClasses = modalVisible ? "scale-100" : "scale-75";

  const onModalClicked: MouseEventHandler<HTMLDivElement> = (event) => {
    // only dismiss when dark area is clicked
    if (event.target === event.currentTarget) {
      dismissModal();
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
          onClick={dismissModal}
        />
        <h2 className="mt-6 mb-6 font-bold text-3xl">Add New Timezone</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-start-1 col-end-3">
            <p className="text-lg mb-2">
              Pick a point in the map to automatically fill in the values.
            </p>
            <LeaftletMap className="h-[90%]" />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default TimezoneInfoModal;
