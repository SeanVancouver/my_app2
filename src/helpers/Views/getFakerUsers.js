import faker from "faker";

// export default getProfileList;

const getFakerUsers = () => {
  let profileArray = [];
  for (let i = 0; i < 25; i++) {
    profileArray.push(getOneProfile());
  }

  console.log("GetProfiles GetProfiles " + profileArray);

  return profileArray;
};

const getOneProfile = () => {
  let gender = ["male", "female"];

  return {
    id: faker.random.uuid(),
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    age: Math.floor(Math.random() * 100),
    sex: gender[Math.floor(Math.random() * gender.length)],
    desc: faker.lorem.paragraph(),
  };
};

export default getFakerUsers;
