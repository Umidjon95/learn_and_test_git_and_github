"use strict";

const x = 20,
  y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// sonni 1 ga oshirish yoki kmaytirish (inkrement va dekrement)
let z = 10;
console.log(++z); // inkrement
console.log(--z); // dekrement

// qoldiqni topish
console.log("qoldiq ", 5 % 2);
console.log("qoldiq ", 5 % 1);
console.log("qoldiq ", 40 % 6);

// butun qism
console.log(20 % 3);

// tenglik va qatiy tenglik
console.log("tenglik ", 2 * 3 == 6);
console.log("tenglik ", 2 * 3 == "6");
console.log("qatiy tenglik ", 2 * 3 === 6);
console.log("qatiy tenglik ", 2 * 3 === "6");

// boolean dagi operatorlar
const isOpen = true,
  isClose = false;
console.log("&& 'and' operatori ", isOpen && isClose);
console.log("|| 'yoki' operatori ", isOpen || isClose);
console.log("&& va ! 'and' va 'not' operatori ", isOpen && !isClose);
console.log("|| 'yoki' va && operatori ", (isOpen && isClose) || isClose);
