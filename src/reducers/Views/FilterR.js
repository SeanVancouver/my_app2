const FilterR = (state = null, action) => {
  switch (action.type) {
    case "FILTER_USERS":
      return action.payload;

    default:
      return state;
  }
};

export default FilterR;
