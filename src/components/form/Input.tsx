import { FormNames, useRootStore } from "../../store/rootStore";

type InputProps = {
  label: string;
  name: FormNames;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, name, ...props }: InputProps) {
  const { value, updateForm, error } = useRootStore((state) => ({
    value: state.form[name],
    updateForm: state.updateForm,
    error: state.fieldErrors[name],
  }));

  return (
    <div className="my-2">
      <label htmlFor={name} className="my-2 text-lg font-semibold block">
        {label}
      </label>
      <input
        {...props}
        value={value ?? ""}
        onChange={(event) => {
          updateForm(name, event.target.value);
        }}
        className={`block pl-6 pr-20 py-2.5 text-gray-700 w-full outline-1 outline-primary-500 rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-primary-500 ${
          props.disabled ? "cursor-not-allowed" : ""
        }`}
      />
      {error?.map((error) => {
        return <p className="text-red-500 mb-1 text-sm">{error}</p>;
      })}
    </div>
  );
}

export default Input;
