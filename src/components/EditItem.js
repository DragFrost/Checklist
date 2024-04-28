import { BiSolidMessageSquareEdit } from "react-icons/bi";

function EditItem({ edit, setEdit, handleEdit, editRef }) {
  return (
    <form className="editForm addForm" onSubmit={handleEdit}>
      <label htmlFor="edit">Edit</label>
      <input
        ref={editRef}
        id="edit"
        type="text"
        placeholder="Edit task"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
      />
      <button type="submit" aria-label="Edit Item">
        <BiSolidMessageSquareEdit />
      </button>
    </form>
  )
}

export default EditItem