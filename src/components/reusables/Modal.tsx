import { MouseEventHandler } from "react";
import { X } from "react-feather";
import { ModalMode, useRootStore } from "../../store/rootStore";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  mode: ModalMode;
}

function Modal({ children, mode }: ModalProps) {
  const { modalMode, dismissModal } = useRootStore();
  const outerClasses =
    modalMode === mode ? "visible opacity-1" : "invisible opacity-0";
  const contentClasses = modalMode === mode ? "scale-100" : "scale-75";

  const onModalClicked: MouseEventHandler<HTMLDivElement> = (event) => {
    // only dismiss when dark area is clicked
    if (event.target === event.currentTarget) {
      dismissModal();
    }
  };

  return (
    <div
      className={`bg-black/90 z-50 fixed top-0 left-0 w-screen h-screen transition-opacity cursor-pointer ${outerClasses}`}
      onClick={onModalClicked}
    >
      <div
        className={`transition-transform bg-gray-100 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-4/5 rounded-lg px-8 pb-12 ${contentClasses}`}
      >
        <X
          className="absolute right-6 top-6 size-7 transition-all text-slate-700 hover:text-slate-900"
          onClick={dismissModal}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
