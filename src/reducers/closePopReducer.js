import { CLOSE_POPS } from "../actions/types";

const INTIAL_STATE = {
  popBg: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    default:
      return state;
  }
};
