import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import childReducer from "./childReducer";
import PopReducer from "./shared/PopReducer";
import ProfileReducer from "./Views/ProfileReducer";
import ModalReducer from "./shared/ModalReducer";
import FilterReducer from "./Views/FilterReducer";
import FilterStateReducer from "./Views/FilterStateReducer";

console.log("reducer ");

export default combineReducers({
  childReducer: childReducer,
  PopReducerState: PopReducer,
  form: formReducer,
  ProfileReducerState: ProfileReducer,
  ModalReducer: ModalReducer,
  FilterReducer: FilterReducer,
  FilterStateReducer: FilterStateReducer,
});
