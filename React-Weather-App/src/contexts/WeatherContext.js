import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [latitude, setLatitude] = useState("39.75");
  const [longitude, setLongitude] = useState("37.02");

  //-------------------date data from API------------------------
  const [day0, setDay0] = useState();
  const [day1, setDay1] = useState();
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();
  const [day5, setDay5] = useState();
  const [day6, setDay6] = useState();

  //------------------------Date to Day---------------------------
  const [dayName0, setDayName0] = useState("Yükleniyor...");
  const [dayName1, setDayName1] = useState("Yükleniyor...");
  const [dayName2, setDayName2] = useState("Yükleniyor...");
  const [dayName3, setDayName3] = useState("Yükleniyor...");
  const [dayName4, setDayName4] = useState("Yükleniyor...");
  const [dayName5, setDayName5] = useState("Yükleniyor...");
  const [dayName6, setDayName6] = useState("Yükleniyor...");

  //---------------------------Min. Temp--------------------------------
  const [minTemp0, setMinTemp0] = useState(0);
  const [minTemp1, setMinTemp1] = useState(1);
  const [minTemp2, setMinTemp2] = useState(2);
  const [minTemp3, setMinTemp3] = useState(3);
  const [minTemp4, setMinTemp4] = useState(4);
  const [minTemp5, setMinTemp5] = useState(5);
  const [minTemp6, setMinTemp6] = useState(6);

  //---------------------------Max. Temp---------------------------------
  const [maxTemp0, setMaxTemp0] = useState(0);
  const [maxTemp1, setMaxTemp1] = useState(1);
  const [maxTemp2, setMaxTemp2] = useState(2);
  const [maxTemp3, setMaxTemp3] = useState(3);
  const [maxTemp4, setMaxTemp4] = useState(4);
  const [maxTemp5, setMaxTemp5] = useState(5);
  const [maxTemp6, setMaxTemp6] = useState(6);

  //---------------------------Weather Code-------------------------------
  const [weatherCode0, setWeatherCode0] = useState(0);
  const [weatherCode1, setWeatherCode1] = useState(0);
  const [weatherCode2, setWeatherCode2] = useState(0);
  const [weatherCode3, setWeatherCode3] = useState(0);
  const [weatherCode4, setWeatherCode4] = useState(0);
  const [weatherCode5, setWeatherCode5] = useState(0);
  const [weatherCode6, setWeatherCode6] = useState(0);

  useEffect(() => {
    //----------------------------Date to Day Area Start------------------------------------
    function getDayName0(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    }

    var dateStr0 = day0;
    var day0Name = getDayName0(dateStr0, "tr-TR");
    setDayName0(day0Name);
    // ---------------------------------------------------------------
    function getDayName1(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    }

    var dateStr1 = day1;
    var day1Name = getDayName1(dateStr1, "tr-TR");
    setDayName1(day1Name);
    // -----------------------------------------------------------
    function getDayName2(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    }

    var dateStr2 = day2;
    var day2Name = getDayName2(dateStr2, "tr-TR");
    setDayName2(day2Name);
    // -----------------------------------------------------------
    function getDayName3(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    }

    var dateStr3 = day3;
    var day3Name = getDayName3(dateStr3, "tr-TR");
    setDayName3(day3Name);
    // -----------------------------------------------------------
    function getDayName4(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    }

    var dateStr4 = day4;
    var day4Name = getDayName4(dateStr4, "tr-TR");
    setDayName4(day4Name);
    // -----------------------------------------------------------
    function getDayName5(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    }

    var dateStr5 = day5;
    var day5Name = getDayName5(dateStr5, "tr-TR");
    setDayName5(day5Name);
    // -----------------------------------------------------------
    function getDayName6(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: "long" });
    }

    var dateStr6 = day6;
    var day6Name = getDayName6(dateStr6, "tr-TR");
    setDayName6(day6Name);

    // ---------------------------Date to Day Area End--------------------------------

    // ---------------------------Min Temperature Area Start--------------------------------
  }, [day0, day1, day2, day3, day4, day5, day6]);

  const handleThen = (data) => {
    // ---------------------Date data to state---------------------------------
    setDay0(data.daily.time[0]);
    setDay1(data.daily.time[1]);
    setDay2(data.daily.time[2]);
    setDay3(data.daily.time[3]);
    setDay4(data.daily.time[4]);
    setDay5(data.daily.time[5]);
    setDay6(data.daily.time[6]);

    // -------------------------Min Temperature to state-------------------------------------
    setMinTemp0(data.daily.temperature_2m_min[0]);
    setMinTemp1(data.daily.temperature_2m_min[1]);
    setMinTemp2(data.daily.temperature_2m_min[2]);
    setMinTemp3(data.daily.temperature_2m_min[3]);
    setMinTemp4(data.daily.temperature_2m_min[4]);
    setMinTemp5(data.daily.temperature_2m_min[5]);
    setMinTemp6(data.daily.temperature_2m_min[6]);

    //---------------------------Max Temperature to state-------------------------------------------
    setMaxTemp0(data.daily.temperature_2m_max[0]);
    setMaxTemp1(data.daily.temperature_2m_max[1]);
    setMaxTemp2(data.daily.temperature_2m_max[2]);
    setMaxTemp3(data.daily.temperature_2m_max[3]);
    setMaxTemp4(data.daily.temperature_2m_max[4]);
    setMaxTemp5(data.daily.temperature_2m_max[5]);
    setMaxTemp6(data.daily.temperature_2m_max[6]);

    //--------------------------------------Weather Code---------------------------------------------
    setWeatherCode0(Number(data.daily.weathercode[0]));
    setWeatherCode1(Number(data.daily.weathercode[1]));
    setWeatherCode2(Number(data.daily.weathercode[2]));
    setWeatherCode3(Number(data.daily.weathercode[3]));
    setWeatherCode4(Number(data.daily.weathercode[4]));
    setWeatherCode5(Number(data.daily.weathercode[5]));
    setWeatherCode6(Number(data.daily.weathercode[6]));
  };

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
    )
      .then((res) => res.json())
      .then(handleThen);
      
  }, [
    latitude,
    longitude,
    dayName0,
    dayName1,
    dayName2,
    dayName3,
    dayName4,
    dayName5,
    dayName6,
  ]);

  const values = {
    latitude,
    setLatitude,
    longitude,
    setLongitude,
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
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const weather = useContext(WeatherContext);

  if (weather === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider.");
  }

  return weather;
};
