const person = {
  name: "Adam",
  age: 25,
};

const additionalInfo = {
  gender: "male",
};
const mergedObject = Object.assign({}, person, additionalInfo);

console.log(mergedObject);
