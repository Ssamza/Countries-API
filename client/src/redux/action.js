import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_NAME = "GET_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

//filterS
export const BY_ABC = "BY_ABC";
export const BY_NUMBER = "BY_NUMBER";
export const BY_ACT = "BY_ACT";
export const BY_CONTINENT = "BY_CONTINENT";

export function getCountries() {
  return async function (dispatch) {
    const URL = "http://localhost:3001";
    const response = await axios.get(`${URL}/countries`);
    return dispatch({ type: "GET_COUNTRIES", payload: response.data });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    const URL = "http://localhost:3001";
    const response = await axios.get(`${URL}/countries/${id}`);
    return dispatch({ type: "GET_COUNTRY_DETAIL", payload: response.data });
  };
}

export function cleanDetail() {
  return { type: "CLEAN_DETAIL" };
}

export function getName(name) {
  return async function (dispatch) {
    const URL = "http://localhost:3001";
    const response = await axios.get(`${URL}/countries?name=${name}`);
    return dispatch({ type: "GET_NAME", payload: response.data });
  };
}

export function postActivity() {
  return async function (dispatch) {
    const URL = "http://localhost:3001";
    const response = await axios.post(`${URL}/activities`);
    return dispatch({ type: "POST_ACTIVITY", payload: response.data });
  };
}

export function getActivities() {
  return async function (dispatch) {
    const URL = "http://localhost:3001";
    const response = await axios.get(`${URL}/activities`);
    return dispatch({ type: "GET_ACTIVITIES", payload: response.data });
  };
}

//filter

export function byAbc(abc) {
  return { type: "BY_ABC", payload: abc };
}

export function byNumber(population) {
  return { type: "BY_NUMBER", payload: population };
}

export function byAct(act) {
  return { type: "BY_NUMBER", payload: act };
}

export function byContinent(continent) {
  return { type: "BY_CONTINENT", payload: continent };
}
