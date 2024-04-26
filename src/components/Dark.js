function Dark({ dark, setDark }) {
    const darkMode = () => {
        setDark(!dark);
        localStorage.setItem("bgcolor", !dark);
    }

    return (
        <>
            <button onClick={darkMode}>
                {dark ? 'Dark' : 'Light'}
            </button>
        </>
    )
}

export default Dark