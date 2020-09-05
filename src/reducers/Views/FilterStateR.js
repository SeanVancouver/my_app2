const FilterStateR = (
  state = { age: "100", gender: { male: false, female: false }, keyword: "" },
  action
) => {
  // console.log(action.type + " fsfsfsfsfs " + JSON.stringify(action.payload));
  switch (action.type) {
    case "FILTER_STATE":
      return (state = action.payload);

    default:
      return state;
  }
};

export default FilterStateR;
