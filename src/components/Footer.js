const Footer = ({length}) => {

  return (
      <footer>
          <p>{length > 0 ? "Task count: " + length : ""}</p>
      </footer>
  )
}

export default Footer