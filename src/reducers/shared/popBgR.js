const popBgR = (state = false, action) => {
  switch (action.type) {
    case "POP_BG":
      return action.payload;

    default:
      return state;
  }
};

export default popBgR;
