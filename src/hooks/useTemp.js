import { useContext } from "react";
import weatherAppContext from "../provider/weatherAppContext";

function useTemp(temp, toFixed = 0) {
  const {
    app: { unit },
  } = useContext(weatherAppContext);

  if (unit.toLowerCase() === "f") {
    return ((temp * 9) / 5 + 32).toFixed(toFixed);
  }

  return parseFloat(temp).toFixed(toFixed);
}

export default useTemp;
