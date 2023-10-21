// Write a for loop that will log the numbers 1 through 20.

// let i = 0;
// while (i<20){
//     i++;
//     console.log(i)
    
// }


// Write a for loop that will log only the even numbers in 0 through 200.
// let evenNums = 0;
for (let evenNums=0; evenNums<=200; evenNums+=2){

    // console.log(evenNums);
}



//Fizz Buzz
// let num =1;
/*
for (let num=0; num<=100; num++ ){
    if (num%3===0 && num%5===0){
        console.log("FizzBuzz")
    } else if (num%5===0){
        console.log("Buzz") 
    } else if ( num%3===0) {
            console.log("Fizz")
        } else {
            console.log(num)
        }
}
*/


// Wild Wild Life
/*
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1. 
plantee[2]=5001;
console.log(plantee)

//2. 
wolfy[3] = "Gotham City";
console.log(wolfy);

//3.
dart[3]= "Upside Down, Hawkins";
console.log(dart);

//4.
wolfy[0]="Gameboy";
console.log(wolfy);
*/

//Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const result of ninjaTurtles){ 
    console.log(result.toUpperCase());
}

// Methods, Revisited
