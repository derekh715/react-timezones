type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, name, ...props }: InputProps) {
  return (
    <div className="my-2">
      <label htmlFor={name} className="my-2 text-lg font-semibold block">
        {label}
      </label>
      <input
        {...props}
        className="block pl-6 pr-20 py-2.5 text-gray-700 w-full outline-1 outline-primary-500 rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-primary-500"
      />
    </div>
  );
}

export default Input;
