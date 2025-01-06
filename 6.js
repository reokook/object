const person = {
  name: "Adam",
  age: 25,
  gender: "male",
};

for (let property in person) {
  console.log(property + ": " + person[property]);
}
