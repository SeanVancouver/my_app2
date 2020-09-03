import history from "../history";
import getFakerUsers from "../apis/getFakerUsers";
import resetModals from "../apis/resetModals";
import FilterProfiles from "../helpers/FilterProfiles";

import { SIGN_IN, SIGN_OUT, BG_POPS } from "./types";

export const filterState = (mapSelection) => {
  console.log("fsdffsdfsd " + JSON.stringify(mapSelection));
  return {
    type: "FILTER_STATE",
    payload: mapSelection,
  };
};

export const filterUsers = (filteree, filtered) => async (dispatch) => {
  dispatch({
    type: "FILTER_USERS",
    payload: FilterProfiles(filteree, filtered),
  });
  dispatch({ type: "FILTER_STATE", payload: filtered });
};

// export const filterUsers = (filteree, filtered) => {
//   return {
//     type: "FILTER_USERS",
//     payload: FilterProfiles(filteree, filtered),
//   };
// };

export const showModal = (infoArr) => {
  return {
    type: "SHOW_MODAL",
    payload: infoArr,
  };
};

export const fetchUsers = () => {
  return {
    type: "GET_USERS",
    payload: getFakerUsers(),
    // payload: { test: "123" },
  };
};

export const popBgAction = (onoff) => {
  return {
    type: BG_POPS,
    payload: onoff,
  };
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
