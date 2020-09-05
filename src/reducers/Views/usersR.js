const usersR = (state = null, action) => {
  console.log("USERS DISPATCHED?");
  switch (action.type) {
    case "USERS":
      return action.payload;

    default:
      return state;
  }
};

export default usersR;
