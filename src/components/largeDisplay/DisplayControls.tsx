import { Edit, Trash } from "react-feather";
import { useRootStore } from "../../store/rootStore";

function DisplayControls() {
  const { deleteSelectedInfo, openModal } = useRootStore();
  const classNames =
    "size-10 mb-8 cursor-pointer hover:text-gray-200 transition-colors";
  return (
    <div className="absolute top-12 right-8 text-white">
      <Edit className={classNames} onClick={() => openModal("edit")} />
      <Trash className={classNames} onClick={deleteSelectedInfo} />
    </div>
  );
}

export default DisplayControls;
