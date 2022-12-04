import React from "react";
import { useCity } from "../contexts/CityContext";
import { useWeather } from "../contexts/WeatherContext";
import "./styles.css";
import weatherCodeTranslate from "../assets/weatherCodeTranslate.json";
import FavoriteIcon from "@mui/icons-material/Favorite";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

function WeatherBox() {
  const {
    dayName0,
    dayName1,
    dayName2,
    dayName3,
    dayName4,
    dayName5,
    dayName6,
    minTemp0,
    minTemp1,
    minTemp2,
    minTemp3,
    minTemp4,
    minTemp5,
    minTemp6,
    maxTemp0,
    maxTemp1,
    maxTemp2,
    maxTemp3,
    maxTemp4,
    maxTemp5,
    maxTemp6,
    weatherCode0,
    weatherCode1,
    weatherCode2,
    weatherCode3,
    weatherCode4,
    weatherCode5,
    weatherCode6,
  } = useWeather();
  const { cityName } = useCity();

  return (
    <div className="jumbotron bgpic">
      <div className="container">
        <h1>{cityName} Hava Durumu</h1>
        <div className="row">
          <div
            style={{ border: "3px solid #0D2877" }}
            className="col-md-2 mt-2 rounded-lg"
          >
            <div className="text-center mt-4">{dayName0}</div>
            <div className="text-center mt-2">
              <img
                className="img-size"
                src={require(`../assets/icons/${weatherCode0}.png`)}
                alt=""
              />
              <div className="text-center mt-3">
                {weatherCodeTranslate.map((item, i) => (
                  <div key={i}>{item[weatherCode0]}</div>
                ))}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 text-center">
                Min <div>{minTemp0}°C</div>
              </div>
              <div className="col-md-6 text-center">
                Maks <div>{maxTemp0}°C</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <div className="text-center mt-4">{dayName1}</div>
            <div className="text-center mt-2">
              <img
                className="img-size"
                src={require(`../assets/icons/${weatherCode1}.png`)}
                alt=""
              />
              <div className="text-center mt-3">
                {weatherCodeTranslate.map((item, i) => (
                  <div key={i}>{item[weatherCode1]}</div>
                ))}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 text-center">
                Min <div>{minTemp1}°C</div>
              </div>
              <div className="col-md-6 text-center">
                Maks <div>{maxTemp1}°C</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <div className="text-center mt-4">{dayName2}</div>
            <div className="text-center mt-2">
              <img
                className="img-size"
                src={require(`../assets/icons/${weatherCode2}.png`)}
                alt=""
              />
              <div className="text-center mt-3">
                {weatherCodeTranslate.map((item, i) => (
                  <div key={i}>{item[weatherCode2]}</div>
                ))}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 text-center">
                Min <div>{minTemp2}°C</div>
              </div>
              <div className="col-md-6 text-center">
                Maks <div>{maxTemp2}°C</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <div className="text-center mt-4">{dayName3}</div>
            <div className="text-center mt-2">
              <img
                className="img-size"
                src={require(`../assets/icons/${weatherCode3}.png`)}
                alt=""
              />
              <div className="text-center mt-3">
                {weatherCodeTranslate.map((item, i) => (
                  <div key={i}>{item[weatherCode3]}</div>
                ))}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 text-center">
                Min <div>{minTemp3}°C</div>
              </div>
              <div className="col-md-6 text-center">
                Maks <div>{maxTemp3}°C</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <div className="text-center mt-4">{dayName4}</div>
            <div className="text-center mt-2">
              <img
                className="img-size"
                src={require(`../assets/icons/${weatherCode4}.png`)}
                alt=""
              />
              <div className="text-center mt-3">
                {weatherCodeTranslate.map((item, i) => (
                  <div key={i}>{item[weatherCode4]}</div>
                ))}
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 text-center">
                Min <div>{minTemp4}°C</div>
              </div>
              <div className="col-md-6 text-center">
                Maks <div>{maxTemp4}°C</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <div className="text-center mt-4">{dayName5}</div>
            <div className="text-center mt-2">
              <img
                className="img-size"
                src={require(`../assets/icons/${weatherCode5}.png`)}
                alt=""
              />
              <div className="text-center mt-3">
                {weatherCodeTranslate.map((item, i) => (
                  <div key={i}>{item[weatherCode5]}</div>
                ))}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 text-center">
                Min <div>{minTemp5}°C</div>
              </div>
              <div className="col-md-6 text-center">
                Maks <div>{maxTemp5}°C</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <div className="text-center mt-4">{dayName6}</div>
            <div className="text-center mt-2">
              <img
                className="img-size"
                src={require(`../assets/icons/${weatherCode6}.png`)}
                alt=""
              />
              <div className="text-center mt-3">
                {weatherCodeTranslate.map((item, i) => (
                  <div key={i}>{item[weatherCode6]}</div>
                ))}
              </div>
            </div>
            <div className="row mt-3 mb-5">
              <div className="col-md-6 text-center">
                Min <div>{minTemp6}°C</div>
              </div>
              <div className="col-md-6 text-center">
                Maks <div>{maxTemp6}°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 text-center"
        style={{ backgroundColor: "#0D2877", color: "white", borderRadius: 5 }}
      >
        Bekir Uyumaz |{" "}
        <a
          style={{ color: "inherit" }}
          href="https://github.com/cryptobcu"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <OpenInBrowserIcon /> GitHub
        </a>{" "}
        ||{" "}
        <a
          style={{ color: "inherit" }}
          href="https://www.linkedin.com/in/bekir-uyumaz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <OpenInBrowserIcon /> LinkedIn
        </a>{" "}
        || <FavoriteIcon sx={{ color: "red" }} />
      </div>
    </div>
  );
}

export default WeatherBox;
