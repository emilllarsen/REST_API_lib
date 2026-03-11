export function getOneUser(uid) {
  return [
    {
      uid: 1,
      name: "Emil",
      age: 27,
      status: "Looking forward to summer"
    }
  ];
}

export function createNewId(usrObj) {
  console.log(`User created with id: ${usrObj}`);
  return Math.floor(Math.random() * 100000);
}

export function checkIfUserExist(uid) {
  if (uid > 0 && uid < 100) {
    return true;
  }
  throw new Error(`The user with id: ${uid} already exists!`);
}

export function checkIfUsernameExist(username) {
  if (username === "Emil") {
    return true;
  }
  return false;
}

export default {
  getOneUser,
  createNewId,
  checkIfUserExist,
  checkIfUsernameExist
};
