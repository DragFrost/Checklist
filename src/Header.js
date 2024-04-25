import Dark from "./Dark";

const Header = ({ title, dark, setDark }) => {

    return (
        <header>
            <h1>{title}</h1>
            <Dark
                dark={dark}
                setDark={setDark}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Tasks List'
}

export default Header;