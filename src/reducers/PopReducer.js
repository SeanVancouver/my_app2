import { BG_POPS } from "../actions/types";

console.log("popreducer ");

const PopReducer = (state = false, action) => {
  switch (action.type) {
    case BG_POPS:
      return action.payload;

    default:
      return state;
  }
};

export default PopReducer;
