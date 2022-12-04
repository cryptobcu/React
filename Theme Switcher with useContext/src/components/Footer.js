import ThemeSwitcher from "./ThemeSwitcher"
import { MainContext, useContext } from "../context"


function Footer() {

    const {logoText, setLogoText} = useContext(MainContext)

    const switchLogoText = () => {
        setLogoText(logoText === "bcu" ? "cryptobcu" : "bcu")
    }
   return (
    <div>
        footer component <br />
        <ThemeSwitcher />
        <button onClick={switchLogoText}>Switch Logo Text</button>
    </div>
  )
}

export default Footer