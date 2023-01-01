/**
 * @description
 * Get your Twitter API keys at develiper.twitter.com.
 */

//Pull in authentication details from local environment. 

//OpenWeather API 
//Load Twitter authentication tokens.
// oAuth 2.0 app-only 
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
//const TWITTER_CONSUMER_TOKEN = process.env.TWITTER_CONSUMER_TOKEN;
//const TWITTER_USER_TOKEN = process.env.TWITTER_USER_TOKEN;

//Provide the paths to external data services. 
const twitter_endpoints = {
  
  //Twitter endpoint details
  TWITTER_FILTERED_STREAM: `https://api.twitter.com/2/tweets/search/stream`,
  TWITTER_SEARCH_TWEETS: `https://api.twitter.com/2/tweets/search/recent`,
  TWITTER_POST_TWEET: `https://api.twitter.com/2/tweets/`,
  TWITTER_SEND_DM: `https://api.twitter.com/2//`,
};

export default twitter_endpoints;
