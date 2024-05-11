interface ButtonGroupProps {
  children: JSX.Element | JSX.Element[];
}

function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className="flex gap-4">{children}</div>;
}

export default ButtonGroup;
