/* eslint-disable react/prop-types */
import ItemList from "./ItemList";

function Content({ items, handleCheck, handleDelete, editRef, setOpenEdit }) {
  return (
    <>
      {items.length !== 0 ? (
        <ItemList
          items={items}
          editRef={editRef}
          setOpenEdit={setOpenEdit}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginBlock: "2rem" }}>Your list is empty.</p>
      )}
    </>
  );
}

export default Content;
