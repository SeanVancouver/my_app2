const FilterR = (state = null, action) => {
  console.log("FilterR DISPATCHED?");
  switch (action.type) {
    case "FILTER_USERS":
      return action.payload;

    default:
      return state;
  }
};

export default FilterR;
