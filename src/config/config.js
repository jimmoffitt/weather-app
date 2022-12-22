/**
 * @description
 * Get your openweathermap.org api key and paste it into the .env file.
 * If you don't see an .env file, then rename sample.env to .env
 * and follow the instructions there.
 * @link https://home.openweathermap.org/api_keys
 */
const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_API_KEY;

const config = {
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=39c6c434c04695179274a4dcd85a8eed&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/2.5/onecall?appid=39c6c434c04695179274a4dcd85a8eed&exclude=minutely&units=metric&`,
};

export default config;
