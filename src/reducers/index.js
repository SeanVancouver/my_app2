import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import childReducer from "./childReducer";
import PopReducer from "./PopReducer";
import ProfileReducer from "./ProfileReducer";
import ModalReducer from "./ModalReducer";
import FilterReducer from "./FilterReducer";
import FilterStateReducer from "./FilterStateReducer";

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
