import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  classNames?: string;
  variant?: "primary" | "secondary";
  children: JSX.Element | string;
}

function Button({
  onClick,
  classNames,
  children,
  variant = "primary",
}: ButtonProps) {
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = "text-white bg-primary-700 hover:bg-primary-900";
  }

  return (
    <button
      className={`my-4 py-2 px-5 rounded-md font-semibold text-lg transition-all hover:-translate-y-1 shadow-md hover:shadow-lg ${variantClasses} ${
        classNames || ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
