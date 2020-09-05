// export default getProfileList;

const FilterProfiles = (profileList, selection) => {
  console.log("but this is not even called??? " + JSON.stringify(selection));

  let finalGender;
  if (selection.gender.female && !selection.gender.male) {
    finalGender = "female";
  } else if (selection.gender.male && !selection.gender.female) {
    finalGender = "male";
  } else {
    finalGender = "any";
  }

  let filteredJSON = profileList.filter((s) => {
    return (
      // If selection.age === "any", which it will be for default undefined, we return that s instance
      (parseInt(s.age) < parseInt(selection.age) || selection.age === "any") &&
      (s.gender === finalGender || finalGender === "any") &&
      (s.desc.includes(selection.keyword) || selection.keyword === "any")
    );
  });

  return filteredJSON;
  // }

  return profileList;
};

export default FilterProfiles;
