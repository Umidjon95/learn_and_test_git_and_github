"use strict";
// type of number

const number1 = 10;
let number2 = 15;
console.log(number1);
console.log(number2);
console.log(typeof number1);
console.log(typeof number2);

// type of string
const st1 = "Umidjon";
let surname = "Mansurov";
console.log(st1, " ", surname);
console.log(typeof st1, " ", typeof surname);

// type of boolean
let isMarried = true;
let isDivorced = false;
console.log(st1, " ", surname, " uylangan - ", isMarried);
console.log(st1, " ", surname, " ajrashgan - ", isDivorced);
console.log(typeof isMarried, " ", typeof isDivorced);

// type of null

// console.log(y);
// console.log(nll);
// var nll = 3;

let und;
console.log(und);
console.log("Ma'lumot turi - ", typeof und);

// Type of object

let person = {
  firstName: "Umidjon",
  lastName: "Mansurov",
  age: 26,
  job: "Engineer",
  isMarry: true,
};
console.log(person);
console.log(
  "Tanishing! ",
  person.firstName,
  person.lastName,
  person.age,
  " yoshda. Kasbi ",
  person.job
);
console.log(typeof person);

// massivlar
let arr = ["red", 25, "olma", "Umidjon", "USA", "ota-ona", "Farzand", "true"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(typeof arr);
