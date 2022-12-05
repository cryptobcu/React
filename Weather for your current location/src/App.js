import {useState, useEffect} from "react";
import { usePosition } from 'use-position';
import axios from "axios";
import HavaDurumu from "./components/HavaDurumu";


function App() {

  const [weather, setWeather] = useState();
  const {latitude, longitude} = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    try{
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c25855f6380348034ae1e3e35996ae6a&lang=${lang}&units=metric
      `);
      setWeather(data);
    }catch{
      alert("veri alınamadı");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);


  return (
    <div>
      <h1>Hava durumu</h1>
      <HavaDurumu weather={weather} />
    </div>
  );
}

export default App;
