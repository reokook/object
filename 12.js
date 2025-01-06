const person = {
  name: "Adam",
  age: 25,
};
Object.seal(person);

person.age = 30;
person.gender = "male";
delete person.name;
console.log(person);
