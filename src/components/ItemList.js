import Lineitem from "./Lineitem";

const ItemList = ({ items, handleCheck, handleDelete, openEdit, setOpenEdit }) => {
  return (
    <ul>
      {items.map((item) => (
        <Lineitem
          key={item.id}
          item={item}
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
