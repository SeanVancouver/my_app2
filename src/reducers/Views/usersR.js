const usersR = (state = null, action) => {
  console.log(action.type + "===> " + action.payload);
  switch (action.type) {
    case "USERS":
      return action.payload;

    default:
      return state;
  }
};

export default usersR;
