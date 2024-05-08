import { useRootStore } from "../../store/rootStore";
import Input from "../form/Input";
import TimezoneInfoDisplay from "./TimezoneInfoDisplay";

function Form() {
  const submit = useRootStore((state) => state.submit);

  return (
    <form className="col-start-3 col-end-4">
      <Input label="Country Name" name="country" disabled />
      <Input label="City Name" name="city" disabled />
      <Input label="Latitude" name="lat" disabled />
      <Input label="Longitude" name="lng" disabled />
      <TimezoneInfoDisplay />
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

export default Form;
