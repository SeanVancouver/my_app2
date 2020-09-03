import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import childReducer from "./childReducer";
import popBgR from "./shared/popBgR";
import usersR from "./Views/usersR";
import ModalR from "./shared/ModalR";
import FilterReducer from "./Views/FilterReducer";
import FilterStateReducer from "./Views/FilterStateReducer";

export default combineReducers({
  childReducer: childReducer,
  popBgR: popBgR,
  form: formReducer,
  usersR: usersR,
  ModalR: ModalR,
  FilterReducer: FilterReducer,
  FilterStateReducer: FilterStateReducer,
});
