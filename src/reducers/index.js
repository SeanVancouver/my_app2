import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import childReducer from "./childReducer";
// import usersR from "./Views/usersR";
import ModalR from "./shared/ModalR";
import FilterR from "./Views/FilterR";
import FilterStateR from "./Views/FilterStateR";

export default combineReducers({
  childReducer: childReducer,
  form: formReducer,
  // usersR: usersR,
  ModalR: ModalR,
  FilterR: FilterR,
  FilterStateR: FilterStateR,
});
