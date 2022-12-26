import { createContext } from "react";

const initialTwitterAppState = {
  twitter: null,
  // If US weather, we have a state code to search on #[A-Z][A-Z]WX
  query: '(weather OR storm OR rain) -is:retweet has:media',
  tweet_fields: 'created_at,author_id,text,public_metrics',
  isDark: false,
  
  //Geo metadata? Setting *server* home location. 
  hostCoords: {
    lon: 40.1672,
    lat: -105.1019,
  },
};

function twitterAppReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_TWEETS":
      return { ...state, tweets: payload}
    default:
      return state;
    }
  }      

const twitterAppContext = createContext();

export { twitterAppReducer, initialTwitterAppState };  //How to keep this agnostic? export initialWeatherState = intitalAppState
export default twitterAppContext;
