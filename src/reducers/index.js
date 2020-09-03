import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import childReducer from "./childReducer";
import PopReducer from "./shared/PopReducer";
import usersR from "./Views/usersR";
import ModalR from "./shared/ModalR";
import FilterReducer from "./Views/FilterReducer";
import FilterStateReducer from "./Views/FilterStateReducer";

console.log("reducer ");

export default combineReducers({
  childReducer: childReducer,
  PopReducerState: PopReducer,
  form: formReducer,
  usersR: usersR,
  ModalR: ModalR,
  FilterReducer: FilterReducer,
  FilterStateReducer: FilterStateReducer,
});
