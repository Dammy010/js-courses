let numbers = [3, 7, 2, 9, 5];
let squares = [];

for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] * numbers[i]);
}

console.log(squares);


let arr = [1, 2, 3, 5, 6, 7];

for (let i = 0; i < arr.length; i++) { 
   if (i === 4) {
   break;
}
console.log(arr[i]);
}
   

let colors = ["red", "green", "blue"];

for (color of colors) {
    console.log(color)
}


let num = 9; 
let result = num > 0 ? console.log("Positive") : console.log("Negative"); 

 num === 0 ? console.log("greater than zero") : console.log("zero");

 num < 0 ? console.log("Positive") : console.log("Negative")

 let number = 30;

 let entry = number / 3 ? console.log("fizzBuzz") 
 : number / 5 ? console.log("fizzBuzz")
 : console.log("You are wrong");

 number / 3 ? console.log("Fizz") : console.log("Buzz");
   
 number / 5 ? console.log("Buzz") : console.log("Fizz");