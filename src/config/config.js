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

//Load Twitter authentication tokens.
const TWITTER_CONSUMER_TOKEN = process.env.TWITTER_CONSUMER_TOKEN;
const TWITTER_USER_TOKEN = process.env.TWITTER_USER_TOKEN;

//Provide the paths to external data services. 
const config = {
  //OpenWeather API endpoints {Include docs link}
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&`,
  //Twitter endpoint details
  TWITTER_FILTERED_STREAM: `https://api.twitter.com/2/tweets/search/stream`,
  TWITTER_SEARCH_TWEETS: `https://api.twitter.com/2/tweets/search/recent`,
};

export default config;
