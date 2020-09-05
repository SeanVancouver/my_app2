import getFakerUsers from "../helpers/Views/getFakerUsers";
import FilterProfiles from "../helpers/Views/FilterProfiles";

// export const filterState = (mapSelection) => {
//   return {
//     type: "FILTER_STATE",
//     payload: mapSelection,
//   };
// };

export const usersA = (FilterStateR) => {
  return {
    type: "FILTER_USERS",
    payload: FilterProfiles(getFakerUsers(), FilterStateR),
  };
};

// export const usersA = () => {
//   return {
//     type: "USERS",
//     payload: getFakerUsers(),
//   };
// };

export const filterA = (profileList, selection) => async (dispatch) => {
  dispatch({
    type: "FILTER_USERS",
    payload: FilterProfiles(profileList, selection),
  });

  console.log(
    "FILTER_STATEFILTER_STATEFILTER_STATE " + JSON.stringify(selection)
  );
  dispatch({ type: "FILTER_STATE", payload: selection });
};
