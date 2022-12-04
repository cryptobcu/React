import "./App.css";
import Navbar from "./components/Navbar";
import WeatherBox from "./components/WeatherBox";
import { CityContextProvider } from "./contexts/CityContext";
import { WeatherContextProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <div className="p-3">
      <CityContextProvider>
        <WeatherContextProvider>
          <div className="container">
            <Navbar className="col-md-12"/>
            <WeatherBox className="col-md-12" />
          </div>
        </WeatherContextProvider>
      </CityContextProvider>
    </div>
  );
}

export default App;
