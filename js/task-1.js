
/*function getEvenNumbers(start, end) {
  let newArray = [];
  for (let i=start; i<=end; i+=1) {
    if (i % 2 === 0){
      newArray.push(i);
    }
  } return newArray
}
getEvenNumbers(2, 5);
getEvenNumbers(3, 11);
getEvenNumbers(2, 8);*/

/*const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}*/

function calculateTotalPrice(order) {
  let sum = [];
  for (let i = 0; i <= order.length; i += 1){
   sum = order[0] + order[order.length- 1];
  } return sum
}