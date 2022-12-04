import { MainContext, useContext } from "../context"

function ThemeSwitcher() {

    const {theme, setTheme} = useContext(MainContext)

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
  return (
    <div>
        <button onClick={switchTheme} >Switch Theme</button>
    </div>
  )
}

export default ThemeSwitcher