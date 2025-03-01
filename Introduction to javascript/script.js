//  Javascript Variables, Data Types, and Operators

// variable Keywords: const and let

let a = 10;
console.log(a)


let b = 3;
let c = 4;
let d;


d = b;
b = c;
c = d;

console.log(b)
console.log(c)

// Javascript Data types

let studentNames = ["Damilare", "Feranmi", "Dammy"] // non primitive

//primitive Data types
let primitive= 10; // primitive
let anotherPrimitive = primitive;

primitive = 30;

console.log({primitive, anotherPrimitive})


//Non primitive


let newStudentNames = studentNames;


studentNames = ["Soliu", "Mueez"];

console.log({studentNames, newStudentNames})


//  Javascript operators

//logical operator

const num1 = 0;

const name1 = 0;

// const trueValue = num1 $$ name1 ? "It is truthy value" : "It is false"
const trueValue = num1 || name1 ? "It is truthy value" : "It is false"

console.log(`${trueValue}`)



// comparision operator

let num2 = 10;
// let num3 = 10;

// const result = num2 == num3 ? "yes": "no"

console.log(num2); 



// Equality operator
// strict

console.log(5 === "5")
console.log(5 === 5)
console.log(true === 1)
console.log([] === 0)
console.log(null === undefined)
// console.log([1, 2,3] === [1, 2, 3])
// console.log({} === {})


let obj1 = {name: "lateefa"};
let obj2 = {name: "lateefa"};

console.log(obj1 === obj2)

let array1 = [1, 2,3] 
console.log(typeof array1)
let array2 = [1, 2,3]

console.log(array1 === array2)


// loose

console.log(5 == "5");
console.log(5 == 5);
console.log(true == 1);
console.log(null == undefined);
console.log(null == false)
console.log([] == 1);
console.log([1] == 1);
console.log("\t\n" == 0);
console.log("damilare" == "dare")
console.log([1, 2] == "1, 2")

let id1 = Symbol("dammy");
console.log(id1 ) 

