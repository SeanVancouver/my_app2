const ProfileReducer = (state = null, action) => {
  console.log(action.type + "===> " + action.payload);
  switch (action.type) {
    case "GET_USERS":
      return action.payload;

    default:
      return state;
  }
};

export default ProfileReducer;
