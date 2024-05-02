import { ArrowRight } from "react-feather";
import TimeDisplay from "./CurrentTime";

function LargeDisplay() {
  return (
    <div className="min-h-64 rounded-lg text-white p-20 my-12 animate-move-up bg-gradient-to-br from-primary-600 to-primary-900">
      <h2 className="text-5xl font-bold mb-12">Country/City</h2>
      <TimeDisplay className="text-4xl font-extrabold mb-8" />
      <button className="outline-none bg-none border-b-2 border-white hover:border-gray-200 border-solid text-white  cursor-pointer text-xl hover:text-gray-200 transition-colors">
        <span>View In Map</span>
        <ArrowRight className="inline-block ml-1" />
      </button>
    </div>
  );
}

export default LargeDisplay;
