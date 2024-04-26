import ItemList from "./ItemList";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length !== 0 ? (
        <ItemList
          items={items}
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
