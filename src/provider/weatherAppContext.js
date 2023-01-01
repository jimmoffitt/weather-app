import { createContext } from "react";

const initialWeatherAppState = {
  weather: null,

  // Defaults for opening Temperature unit and starting location. 
  unit: "f",
  city: "Longmont",
  country: "CO",
  geoCoords: {
    lon: 40.1672,
    lat: -105.1019,
  },
  isDark: false,
};

function weatherAppReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "WEATHER":
      return { ...state, weather: payload };
    case "CITY":
      return { ...state, city: payload };
    case "COUNTRY":
      return { ...state, country: payload };
    case "UNIT":
      return { ...state, unit: payload };
    case "GEO_COORDS":
      return { ...state, geoCoords: payload };
    case "DARK":
      return { ...state, isDark: payload };
    default:
      return state;
  }
}

const WeatherAppContext = createContext();

export { weatherAppReducer, initialWeatherAppState };
export default WeatherAppContext;
