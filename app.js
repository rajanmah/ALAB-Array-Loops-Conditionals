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
/*
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const result of ninjaTurtles){ 
    console.log(result.toUpperCase());
}
*/

// // Methods, Revisited
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// // console.log(favMovies.indexOf('Titanic'));

// //1. 

// const sortArray = favMovies.sort();
// console.log(favMovies); // Sorts in alphabetical order
// console.log(sortArray)

// //2.  permanently alters the array

// // //3.
// const popArray = favMovies.pop();
// console.log(favMovies);  //Removes the last item

// //4. 
// const pushArray = favMovies.push('Guardians of the Galaxy')
// console.log(favMovies); // Adds 'Guardians of the Galaxy' at the end

// //5.
// const reverseArray = favMovies.reverse();
// console.log(favMovies); // reverses the array items order

// //6.
// const shiftArray = favMovies.shift();
// console.log(favMovies); // removes the first item of the array

// //7. 
// const unshiftArray = favMovies.unshift('Kapaddi Kapaddi');
// console.log(favMovies); // adds an item at the first index

// //8.
// console.log(favMovies.indexOf("Django Unchained"));
// const spliceArray = favMovies.splice(3,1,"Avatar");
// console.log(favMovies); 

// //9. Yes


// //10.
// // console.log(favMovies.length/2);
// const sliceArray = favMovies.slice(9,-9);
// console.log(favMovies) 


// //11. original array is not changed


// //12.
// console.log(sliceArray); // [ 'Harry Potter' ]


// //13. only the mid-item is returned

// console.log(favMovies)
// console.log(favMovies.indexOf("Fast and Furious")); //14

//WHere is Waldo

const whereIsWaldo = [["Timmy", "Frank"], 
                "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", 
                      ["Baked Goods", "Waldo"]]
                    ];

// console.log(whereIsWaldo.length)
// // console.log(whereIsWaldo.indexOf("Eggbert"))
// const rem = whereIsWaldo.splice(1,1)
// console.log(whereIsWaldo)


// console.log(whereIsWaldo.indexOf("Neff"));
// console.log(whereIsWaldo.splice(1,1))
// console.log(whereIsWaldo) //removes "Eggbert"

// const remNeff=whereIsWaldo[2]
// console.log(remNeff.splice(2,1,"No One"))
// console.log(whereIsWaldo) // Nerf replaced by "No One"
// console.log("Waldo")

//Excited Kitten

// let meow = 0;
// kittyTalk[meow]
// for (let i = 0; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!");
//   };
  
//   //For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random. //Hint: You will need to use Math.random()
//   const kittyTalk = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', 'why does the red dot always get away...']
//   for (let i = 0; i < 20; i++) {
//       const meow = kittyTalk[Math.floor(Math.random() * kittyTalk.length)];
//           console.log(meow);
//   }


  //Find the Median

  const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
 
  function median(nums){
    const mid = Math.floor(nums.length/2);
    const sortNums=nums.sort((a,b) => a-b);
    if (nums.length%2===0){
        return (sortNums[mid-1] +sortNums[mid])/2;
    } else {
        return sortNums[mid];
    }
    }

    console.log(median(nums))


    // Hungry for More?
  


