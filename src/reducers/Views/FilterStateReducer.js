const FilterStateReducer = (state = null, action) => {
  console.log("FILTER_STATEFILTER_STATE " + action.type);
  switch (action.type) {
    case "FILTER_STATE":
      return (state = action.payload);

    default:
      return state;
  }
};

export default FilterStateReducer;
