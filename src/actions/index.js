import history from "../history";
import { SIGN_IN, SIGN_OUT } from "./types";

export const closePops = () => {
  return {
    type: CLOSE_POPS,
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
