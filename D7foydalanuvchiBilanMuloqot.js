"use strict";

console.log("Hello world");

const signal = alert("Hello world");
console.log("signal = ", signal);

const userAge = confirm("Siz 20 yoshdan kattamisiz");
console.log(userAge); // konsolda true yoki false chiqadi

const userName = prompt("Ismingiz nima?");
console.log(userName);

// amaliyot massiv

const answers = []; //bo`h massiv hosil qildik. umga prompt yordamida element qo`shamiz
answers[0] = prompt("Ismingiz nima?");
answers[1] = prompt("Famiiyangiz?");
answers[2] = prompt("Yoshingiz nechida?");

console.log(answers);
document.write(answers);

// promptda number tipga o`tish
const age = +prompt("Yoshingiz");
console.log(age);
console.log(typeof age);
