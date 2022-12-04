import React, { useState } from "react";
import { useCity } from "../contexts/CityContext";
import cityInfo from "../assets/cityInfo.json";
import { useWeather } from "../contexts/WeatherContext";
import "./styles.css";
//-------------------------
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

//_______________________________

function Navbar() {
  const { setLatitude, setLongitude } = useWeather();
  const { setCityName } = useCity();

  const handleOnClick = (e) => {
    setCityName(e.target.innerText);
    setLatitude(Number(e.target.id.split("/")[0]));
    setLongitude(Number(e.target.id.split("/")[1]));
  };

  const [box, setBox] = useState("");

  const handleChange = (event) => {
    setBox(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 10,
      },
    },
  };

  return (
    <div className="container navbgpic rounded-lg p-4 ">
      <div aria-label="dropdown">
        <Box sx={{ width: 2 / 4 }}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                color: "black",
                backgroundColor: "#AFD8F4",
                borderRadius: 1,
              }}
              id="demo-simple-select-label"
              className="px-2"
            >
              Şehir Seçiniz
            </InputLabel>
            <Select
              sx={{ backgroundColor: "#AFD8F4", color: "black" }}
              labelId="demo-simple-select-label"
              id={"demo-simple-select"}
              value={box}
              label="Box"
              onChange={handleChange}
              MenuProps={MenuProps}
            >
              {cityInfo.map((item) => (
                <MenuItem
                  id={`${Number(item.latitude).toFixed(2)}/${Number(
                    item.longitude
                  ).toFixed(2)}`}
                  key={item.id}
                  onClick={handleOnClick}
                  value={item.id}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
