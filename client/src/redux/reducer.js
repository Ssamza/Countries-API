import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_NAME,
  POST_ACTIVITY,
  GET_ACTIVITIES,
  CLEAN_DETAIL,
} from "./action";

let initialState = {
  allCountries: [],
  allCountriesCopy: [],
  countryDetail: {},
  newActivity: [],
  activities: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        allCountriesCopy: action.payload,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        countryDetail: {},
      };
    case GET_NAME:
      return {
        ...state,
        allCountries: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
        newActivity: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
