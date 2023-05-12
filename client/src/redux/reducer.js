import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_NAME,
  POST_ACTIVITY,
  GET_ACTIVITIES,
  CLEAN_DETAIL,
  BY_ABC,
  BY_NUMBER,
  BY_CONTINENT,
} from "./action";

let initialState = {
  allCountries: [],
  allCountriesCopy: [],
  countryDetail: {},
  newActivity: [],
  activities: [],
};

function rootReducer(state = initialState, action) {
  const { allCountries } = state;
  const { allCountriesCopy } = state;

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
    case BY_ABC:
      let countriesAbc = [];
      if (action.payload === "top") {
        countriesAbc = [...allCountries].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "bottom") {
        countriesAbc = [...allCountries].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        allCountries: countriesAbc,
      };
    case BY_NUMBER:
      let countriesPop = [];
      if (action.payload === "Greater") {
        countriesPop = [...allCountries].sort(
          (a, b) => b.population - a.population
        );
      } else if (action.payload === "Lesser") {
        countriesPop = [...allCountries].sort(
          (a, b) => a.population - b.population
        );
      }
      return {
        ...state,
        allCountries: countriesPop,
      };
    case BY_CONTINENT:
      let continents = [];
      if (action.payload === "all") {
        continents = [...allCountriesCopy];
      } else {
        continents = [...allCountriesCopy].filter(
          (continent) => continent.continent === action.payload
        );
      }
      return {
        ...state,
        allCountries: continents,
      };
    default:
      return state;
  }
}

export default rootReducer;
