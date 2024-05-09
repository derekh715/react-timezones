import { useRootStore } from "../../store/rootStore";
import Input from "../reusables/Input";
import TimezoneInfoDisplay from "./TimezoneInfoDisplay";

function AddTimezoneInfoForm() {
  const { form, submit, updateForm, fieldErrors, timezoneInfo } =
    useRootStore();

  return (
    <form className="col-start-3 col-end-4">
      <Input
        label="Country Name"
        name="country"
        disabled
        value={form?.country}
        errors={fieldErrors.country}
        handleChange={(value) => updateForm("country", value)}
      />
      <Input
        label="City Name"
        name="city"
        disabled
        value={form?.city}
        errors={fieldErrors.city}
        handleChange={(value) => updateForm("city", value)}
      />
      <Input
        label="Latitude"
        name="lat"
        disabled
        value={form?.lat?.toString()}
        errors={fieldErrors.lat}
        handleChange={(value) => updateForm("lat", value)}
      />
      <Input
        label="Longitude"
        name="lng"
        disabled
        value={form?.lng?.toString()}
        errors={fieldErrors.lng}
        handleChange={(value) => updateForm("lng", value)}
      />
      <TimezoneInfoDisplay geoapifyTimezone={timezoneInfo} />
      <button
        className="my-4 py-2 px-5 rounded-md text-white bg-primary-700 font-semibold text-lg hover:bg-primary-900 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
        onClick={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default AddTimezoneInfoForm;
