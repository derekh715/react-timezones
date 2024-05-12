import { ArrowRight } from "react-feather";

function ViewInMapButton() {
  return (
    <button
      className="outline-none bg-none border-b-2 border-white hover:border-gray-200 border-solid text-gray-100  cursor-pointer text-xl hover:text-gray-300 transition-colors"
      onClick={() => {
        document.getElementById("large-map")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <span>View In Map</span>
      <ArrowRight className="inline-block ml-1" />
    </button>
  );
}

export default ViewInMapButton;
