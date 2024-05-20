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

    function countVowel(str) {
        let count = 0;
        const vowel = "a, u, i, o, e";
        str = str.toLowerCase();
        for (let i = 0; i < str.length; i += 1) {
            console.log(str[i]);
            if (vowel.includes(str[i])) {
                count += 1;
            }
        } return count;
        
    }
    console.log(countVowel("HELLO WORLD"));
    console.log(countVowel("Junior Web Developer"));