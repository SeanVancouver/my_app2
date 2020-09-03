import { GET_USERS } from "../actions/types";

console.log("profileReducer GET_USERS ");

const ProfileReducer = (state = null, action) => {
  console.log(action.type + "===> " + action.payload);
  switch (action.type) {
    case GET_USERS:
      return action.payload;

    default:
      return state;
  }
};

export default ProfileReducer;
