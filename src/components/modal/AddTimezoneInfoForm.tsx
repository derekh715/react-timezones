import { useRootStore } from "../../store/rootStore";
import Button from "../reusables/Button";
import ButtonGroup from "../reusables/ButtonGroup";
import Input from "../reusables/Input";
import TimezoneInfoDisplay from "./TimezoneInfoDisplay";

function AddTimezoneInfoForm() {
  const {
    addForm,
    submit,
    updateForm,
    addFieldErrors,
    addTimezoneInfo,
    resetAdd,
  } = useRootStore();

  return (
    <form className="col-start-3 col-end-4">
      <Input
        label="Country Name"
        name="country"
        disabled
        value={addForm?.country}
        errors={addFieldErrors.country}
        handleChange={(value) => updateForm("country", value)}
      />
      <Input
        label="City Name"
        name="city"
        disabled
        value={addForm?.city}
        errors={addFieldErrors.city}
        handleChange={(value) => updateForm("city", value)}
      />
      <Input
        label="Latitude"
        name="lat"
        disabled
        value={addForm?.lat?.toString()}
        errors={addFieldErrors.lat}
        handleChange={(value) => updateForm("lat", value)}
      />
      <Input
        label="Longitude"
        name="lng"
        disabled
        value={addForm?.lng?.toString()}
        errors={addFieldErrors.lng}
        handleChange={(value) => updateForm("lng", value)}
      />
      <TimezoneInfoDisplay geoapifyTimezone={addTimezoneInfo} />
      <ButtonGroup>
        <Button
          onClick={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          Submit
        </Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
            resetAdd();
          }}
        >
          Reset
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default AddTimezoneInfoForm;
