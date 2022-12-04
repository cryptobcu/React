import { createContext, useContext, useState } from "react";

const CityContext = createContext();

export const CityContextProvider = ({ children }) => {
  const [cityName, setCityName] = useState("SİVAS");

  const values = {
    cityName,
    setCityName,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => {
  const city = useContext(CityContext);

  if (city === undefined) {
    throw new Error("useCity must be used within a CityProvider.");
  }

  return city;
};
