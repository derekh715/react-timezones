import Modal from "../reusables/Modal";
import EditTimezoneInfoForm from "./EditTimezoneInfoForm";
import LeaftletMap from "./LeaftletMap";

function EditTimezoneInfoModal() {
  return (
    <Modal mode={"edit"}>
      <h2 className="mt-6 mb-6 font-bold text-3xl">Add New Timezone</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-start-1 col-end-3">
          <p className="text-lg mb-2">
            Pick a point in the map to automatically fill in the values.
          </p>
          <LeaftletMap className="h-[90%]" />
        </div>
        <EditTimezoneInfoForm />
      </div>
    </Modal>
  );
}

export default EditTimezoneInfoModal;
