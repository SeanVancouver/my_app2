const FilterReducer = (state = null, action) => {
  switch (action.type) {
    case "FILTER_USERS":
      console.log(" ughhhhh " + JSON.stringify(action.payload));

      return action.payload;

    default:
      return state;
  }
};

export default FilterReducer;
