import TimeDisplay from "./CurrentTime";

function LargeDisplay() {
  return (
    <div className="min-h-64 rounded-lg text-white p-20 my-12 animate-move-up bg-gradient-to-br from-primary-600 to-primary-900">
      <h2 className="text-5xl font-bold mb-12">Country/City</h2>
      <TimeDisplay className="text-4xl font-extrabold mb-8" />
      <button className="border-none outline-none bg-none text-white underline cursor-pointer text-xl hover:text-gray-200 transition-colors">
        <span>View In Map</span>
      </button>
    </div>
  );
}

export default LargeDisplay;
