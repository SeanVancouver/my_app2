import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import childReducer from "./childReducer";

export default combineReducers({
  childReducer: childReducer,
  closePopReducer: closePopReducer,
  form: formReducer,
});
