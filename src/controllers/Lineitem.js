/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Lineitem = ({
  item,
  handleCheck,
  handleDelete,
  editRef,
  setOpenEdit,
}) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      <FaEdit
        onClick={() => {
          setOpenEdit(true);
          JSON.stringify(localStorage.setItem("editid", item.id));
          if (editRef.current) {
            editRef.current.focus();
          }
        }}
        role="button"
        tabIndex="0"
        aria-label={item.item}
      />
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={item.item}
      />
    </li>
  );
};

export default Lineitem;
