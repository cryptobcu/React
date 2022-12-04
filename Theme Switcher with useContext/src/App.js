import {useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import "./style.css"
import { MainContext } from './context'

function App() {

  const [theme, setTheme] = useState("light")
  const [logoText, setLogoText] = useState("bcu")

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const data = {
    theme,
    setTheme,
    logoText,
    setLogoText
  }

  return (
    <MainContext.Provider value={data}>
      <Header/>
      <Footer/>
    </MainContext.Provider>
  )
}

export default App