const INTIAL_STATE = {};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_OUT":
    default:
      return state;
  }
};
