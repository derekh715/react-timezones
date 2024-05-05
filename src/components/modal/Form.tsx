import Input from "../form/Input";

function Form() {
  return (
    <form className="col-start-3 col-end-4">
      <Input label="Country Name" name="country" />
      <Input label="City Name" name="city" />
      <Input label="Latitude" name="lat" />
      <Input label="Longitude" name="lng" />
      <button className="my-4 py-2 px-5 rounded-md text-white bg-primary-700 font-semibold text-lg hover:bg-primary-900 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg">
        Submit
      </button>
    </form>
  );
}

export default Form;
