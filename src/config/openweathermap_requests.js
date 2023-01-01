/**
 * @description
 * Get your openweathermap.org api key and paste it into the .env file.
 * If you don't see an .env file, then rename sample.env to .env
 * and follow the instructions there.
 * @link https://home.openweathermap.org/api_keys
 */

//Pull in authentication details from local environment. 

//OpenWeather API 
const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_API_KEY;

//Provide the paths to external data services. 
const openweathermap_requests = {
  //OpenWeather API endpoints {Include docs link}

  //These API requests include the single 'app-only' authentication key needed for the request. 
  //"weather" endpoint with no query parameters. 
  WEATHER_API_REQUEST: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  
  //One Call endpoint with time bucket and data units query parameters:
  WEATHER_DATA_REQUEST: `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&`,
};

//export openweathermap;
export default openweathermap_requests;
