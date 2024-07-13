//****МЕТОДИ*****
//const str = "Hello world";
//console.log(str.slice(2, 8))
//console.log(str.endsWith('ld'))
//console.log(str.includes('worlds'))
//console.log(str[4])
//console.log(str.toUpperCase())
//console.log(srt.indexOf('H'))


//****ЦИКЛИ ****
//for(let i=0; i<str.length; i+=1){
 //   console.log(str[i])
//}
//const i = 10;
//for(let i=0; i<=10; i+=1) {
//console.log(i)
//}

//const str = "Hello world";
//let i = 0;
//while (i < str.length) {
  //  i+=1
//}

//let i = 0;
//do {
  //  console.log(str[i]);
    //i+=1;
//} while (i<20);

////////РАВЛИК///////
//function getDays(deps) {
    //let days = 0;
    //let total = 0;
    //const daySpeed = 7;
    //const nightSpeed = 2;
    //while (total < deps) {
        //days + 1;
        //total += daySpeed; 

        //if (total < deps) {
        //    total -= nightSpeed; 
      //  } 
    //} console.log(getDays[42])
    //console.log(getDays[17])
    //console.log(getDays[18])

    //} ???????

  //const apartament = {
    //descr: "Spacious apartment in the city center",
    //rating: 4,
   // price: 2153,
  //}
  //const keys = Object.keys(["descr", "rating", "price"]);
  //const values = ["Spacious apartment in the city center", 4, 2153];
  //for (const values of keys);
  //console.log (values);
  //console.log (apartament["values"]);
 //function multiply(first, second, ...args) {
  //console.log(first, second, args);
 //}
 //multiply(1, 2); // 1 2
//multiply(1, 2, 3); // 1 2 [3] 
//multiply(1, 2, 3, 4); // 1 2 [3, 4]


//REST
//function addOverNum(value, ...args) {
 // let total = 0;
  //for (let i=0; i < args.length; i++){
    //if(args[i] >= value) {
      //total+=args[i];
    //}
  //}return total;
//}
//addOverNum(50, 15, 27);
//addOverNum(10, 12, 4, 11, 48, 10, 8);

//SPREAD
//const temps = [14, -4, 25, 8, 11];
//nsole.log(temps);

//function getExtremeScores(scores) {
 //return { best: Math.max(...scores),
   //worst: Math.min(...scores) }; }

//console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // { best: 93, worst: 17 }
 //console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); // { best: 81, worst: 4 }

 //function greet(name) {
  //return `Welcome ${name}!`;
//}

// Викликаємо функцію greet і виводимо результат у консоль
//console.log(greet("Mango")); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
//console.log(greet); // ƒ greet() {return `Welcome ${name}!`} 

//function greet(name) {
  //console.log(`Welcome ${name}!`);
//}

//function notify(name) {
  //console.log(`Dear ${name}, your room will be ready in 30 minutes`);
//}

//function registerGuest(name, callback) {
  //console.log(`Registering ${name}!`);
  //callback(name);
//}
//registerGuest("Mango", greet);
//registerGuest("Mango", notify);


function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName,callback) {
return callback(pizzaName)
}
makeMessage("Royal Grand", makePizza);
makeMessage("Ultracheese", deliverPizza);