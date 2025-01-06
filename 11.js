const person = {
  name: "Adam",
  age: 25,
};
Object.freeze(person);
person.age = 30;
person.gender = "male";

console.log(person);
