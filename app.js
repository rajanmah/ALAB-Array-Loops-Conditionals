// Write a for loop that will log the numbers 1 through 20.

// let i = 0;
// while (i<20){
//     i++;
//     console.log(i)
    
// }


// Write a for loop that will log only the even numbers in 0 through 200.
// let evenNums = 0;
for (let evenNums=0; evenNums<=200; evenNums+=2){

    console.log(evenNums);
}



//Fizz Buzz
// let num =1;
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
