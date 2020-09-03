const ModalReducer = (state = null, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      console.log("action.payload " + action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default ModalReducer;
