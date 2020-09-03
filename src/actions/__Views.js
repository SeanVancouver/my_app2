import getFakerUsers from "../helpers/Views/getFakerUsers";
import FilterProfiles from "../helpers/Views/FilterProfiles";

// export const filterState = (mapSelection) => {
//   return {
//     type: "FILTER_STATE",
//     payload: mapSelection,
//   };
// };

export const usersA = () => {
  return {
    type: "USERS",
    payload: getFakerUsers(),
    // payload: { test: "123" },
  };
};

export const filterUsers = (filteree, filtered) => async (dispatch) => {
  dispatch({
    type: "FILTER_USERS",
    payload: FilterProfiles(filteree, filtered),
  });
  dispatch({ type: "FILTER_STATE", payload: filtered });
};
