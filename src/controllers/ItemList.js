/* eslint-disable react/prop-types */
import Lineitem from "./Lineitem";

const ItemList = ({
  items,
  handleCheck,
  handleDelete,
  editRef,
  setOpenEdit,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <Lineitem
          key={item.id}
          item={item}
          editRef={editRef}
          setOpenEdit={setOpenEdit}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
