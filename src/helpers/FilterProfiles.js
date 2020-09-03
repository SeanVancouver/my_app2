// export default getProfileList;

const FilterProfiles = (mapSelection, filterList) => {
  console.log(
    JSON.stringify(mapSelection) +
      " mapselection zzzz " +
      JSON.stringify(filterList)
  );
  if (filterList) {
    // mapSelection = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // filterList = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    let filteredJSON = mapSelection.filter((s) => {
      return (
        (parseInt(s.age) < parseInt(filterList.age) ||
          filterList.age === "any") &&
        (s.sex === filterList.sex || filterList.sex === "any") &&
        (s.desc.includes(filterList.keyword) || filterList.keyword === "any")
      );
    });

    console.log("filteredJSONfilteredJSON " + JSON.stringify(filteredJSON));

    return filteredJSON;
  }

  return mapSelection;
};

export default FilterProfiles;
