import { Plus } from "react-feather";

function AddNewTimezone() {
  return (
    <div className="bg-none text-gray-800 rounded-lg border-gray-200 border-4 border-dashed p-8 animate-move-up cursor-pointer transition-all hover:-translate-y-4 hover:shadow-lg">
      <span className="text-lg font-semibold inline-flex items-center border-gray-800 border-b-2 border-solid">
        <span>Add New Timezone</span>
        <Plus className="ml-1 inline-block" />
      </span>
    </div>
  );
}

export default AddNewTimezone;
