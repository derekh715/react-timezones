import { ArrowRight } from "react-feather";

function ViewInMapButton() {
  return (
    <button className="outline-none bg-none border-b-2 border-white hover:border-gray-200 border-solid text-white  cursor-pointer text-xl hover:text-gray-200 transition-colors">
      <span>View In Map</span>
      <ArrowRight className="inline-block ml-1" />
    </button>
  );
}

export default ViewInMapButton;
