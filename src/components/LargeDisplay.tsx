function LargeDisplay() {
  return (
    <div className="min-h-64 rounded-lg bg-primary-700 text-white p-20 my-16 animate-move-up">
      <h2 className="text-5xl font-bold mb-12">Country/City</h2>
      <span
        className="text-4xl font-extrabold mb-8 block cursor-pointer"
        title="Show Seconds"
      >
        <span>13</span>
        <span className="animate-blink">:</span>
        <span>04</span>
      </span>
      <button className="border-none outline-none bg-none text-white underline cursor-pointer text-xl hover:text-gray-200 transition-colors">
        <span>View In Map</span>
      </button>
    </div>
  );
}

export default LargeDisplay;
