import { useRootStore } from "../../store/rootStore";
import Button from "../reusables/Button";
import ButtonGroup from "../reusables/ButtonGroup";
import Input from "../reusables/Input";
import TimezoneInfoDisplay from "./TimezoneInfoDisplay";

function EditTimezoneInfoForm() {
  const {
    change,
    editForm,
    editFieldErrors,
    updateEditForm,
    editTimezoneInfo,
    resetEdit,
  } = useRootStore();

  return (
    <form className="col-start-3 col-end-4">
      <Input
        label="Country Name"
        name="country"
        disabled
        value={editForm?.country}
        errors={editFieldErrors.country}
        handleChange={(value) => updateEditForm("country", value)}
      />
      <Input
        label="City Name"
        name="city"
        disabled
        value={editForm?.city}
        errors={editFieldErrors.city}
        handleChange={(value) => updateEditForm("city", value)}
      />
      <Input
        label="Latitude"
        name="lat"
        disabled
        value={editForm?.lat?.toString()}
        errors={editFieldErrors.lat}
        handleChange={(value) => updateEditForm("lat", value)}
      />
      <Input
        label="Longitude"
        name="lng"
        disabled
        value={editForm?.lng?.toString()}
        errors={editFieldErrors.lng}
        handleChange={(value) => updateEditForm("lng", value)}
      />
      <TimezoneInfoDisplay geoapifyTimezone={editTimezoneInfo} />
      <ButtonGroup>
        <Button
          onClick={(event) => {
            event.preventDefault();
            change();
          }}
        >
          Change
        </Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
            resetEdit();
          }}
        >
          Reset
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default EditTimezoneInfoForm;
