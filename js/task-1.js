
/*function getEvenNumbers(start, end) {
  let newArray = [];
  for (let i=start; i<=end; i+=1) {
    if (i % 2 === 0){
      newArray.push(i);
    }
  } return newArray
}
console.log (getEvenNumbers(2, 5));
console.log (getEvenNumbers(3, 11));
console.log (getEvenNumbers(2, 8));*/

/*const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}*/

/*function calculateTotalPrice(order) {
  let sum = [];
  for (let i = 0; i <= order.length; i += 1){
   sum = order[0] + order[order.length- 1];
  } return sum
}*/


//ПРО РАВЛИКА
/*function getDays(depth) {
  let days = 0;
  let total = 0;
  const daySpeed = 7;
  const nightSpeed = 2;
  while (total < depth) {
    days += 1;
    total += daySpeed;
    if (total < depth){
      total -= nightSpeed;
    }
  } return days;
}
console.log (getDays(42));
console.log (getDays(17));
console.log (getDays(18));*/


//ГОЛОСНІ ЛІТЕРИ

/*function countVowel(str) {
  const vowels = "a e i o u";
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i+=1){
    if(vowels.includes(str[i])) {
      count+=1;
    }
  } return count
}

console.log (countVowel("HELLO WORLD"));
console.log (countVowel("Junior web Developer"));*/

//СУММА ЛІТЕР

const firstName = "Yuliia";
const lastName = "Pantiuk";
if (firstName.length > 4 && lastName.length > 5) {
  console.log (firstName.length + lastName.length);
} else {
  console.log ("неможливо виконати умову");
}

//ПЕРЕВІРКА ЧИСЛА ЧЕРЕЗ PROMT
const number = prompt("Enter number");
function checkNumber(num){
  if (num >= 55 && num <= 99) {
    return ("так");
  } else {
    return ("ні");
  }
} console.log (checkNumber(number));