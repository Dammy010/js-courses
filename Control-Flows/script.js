console.log("Hello world!")

// control flows... determines how programmes are executed based on conditions and iteration.

// conditionals -- if, else-if, else, ternary operator.

if ("condition") {
    //code to execute if condition is met
}

let age = 30;

if (age === 25) {
    console.log("age is greater than 25") 
}else if (age < 25) {
    console.log("age is less than 25")
} else {
    console.log("Age is 30")
}


let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("You are not logged in")
} else {
    console.log("You are logged in.")
}

let balance = 500;
let withdrawalAmount = 1000;

if (withdrawalAmount > balance) {
    console.log("withdrawalAmount is above the balance")
} else if  (withdrawalAmount == balance) {
    console.log("You can not empty your wallet!")
} else {
    console.log("successful..")
}

let num = 18;

if (num < 18) {
    console.log("You are less than 18 you can't vote")
} else  {
    console.log("vote successfully")
}

let purchaseAmount = 100;
let discount;


if (purchaseAmount >= 250) {
   discount = 10
} else if (purchaseAmount >= 150) {
    discount = 5
}  else if (purchaseAmount === 100) {
    discount = 1.5
}else {
    discount = 0
}

console.log(`You got a discount of ${discount}`)


// Ternary operator.
// condition ? expression_if_true : expression_if_false.

let threashold = 40; 

threashold >= 40 ? console.log("Marry") : console.log("You are still a minor");

const number = 9;

const result = number % 2 === 0 ? "even" : "odd"

console.log(result)

let temperature = 100

const entry = temperature < 20 ? "it is a cool day" : "It is a hot day";

console.log(entry);

// Nested Ternary Operators

let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : 
            score >= 60 ? "D" : "F";
console.log(grade);


let currentDate = new Date();

console.log(currentDate);


// Switch statment -- used when there a multiple possibl value for a variable.

let day ="Tuesday"

switch(day) {
    case "monday":
        console.lod("Today is bright!")
        break;
 case "Friday":
        console.log("Jimoh Oloyin")
         break;
 case "Tuesday":
        console.log("Today is Tuesday");
         break;
         default:
         console.log("It is a normal day");
}

    let order = "pizza"

    switch(order) {
        case "Burger":
        console.log("This is burger");
        break;

        case "pizzer":
         console.log("You ordered pizzer ");
            break;

         case "Doughnut":
           console.log("This is Doughut");
                break;

         default:
            console.log("invalid order.... please select from the menu");
    }


    let dayNumber = 4;
    let dayName;


    switch(dayNumber) {
        case 1:
        dayName = "Sunday";
        break;

        case 2:
        dayName = "Monday";
        break;

        case 3:
        dayName = "Tuesday";
        break;

        case 4:
        dayName = "Friday";
        break

        default:
        dayName = "not available "
        } 
        console.log(`day ${dayNumber} is ${dayName}`)


            
            let rool = "Admin"

            switch(rool) {
                case "Admin":
                console.log("Welcome admin");
                break;
        
                case "Editor":
                console.log("welcome editor");
                    break;
        
                case "Viewer":
                console.log("Welcome Viewer");
                        break;
        
                default:
                console.log("unknow rool please contact support");
            }

            

//Loops are used to execute a block of code multiple times.
            
     // for (initialization; condition; update) {
      //  // code execute
    // }

     for(let i = 0; i < 10; i++) {
                console.log(i)
            }

    let table = 5;
     for (let i = 1; i <= 10; i++) {
      console.log(`${table} * ${i} = ${table * i}`)
            }
            
          
        
            // Example2

      for (let i = 1; i < 10; i+=2) {
       console.log(i)
           }

    for(let i = 0; i <= 5; i++) {
       if(i === 3) {
           continue
          }
                console.log(i)
            }
           
    let fruit = ["apple", "orange", "mango", "apricot"];
for (let i = 1; i < fruit.length; i++){
        console.log(fruit[i])
    }


   let car = "Damilare";
   for (let i = 0; i < car.length; i++){
    console.log(car[i])
   }


   //for...in loop

   //Example


   let user ={name: "Damilare", age: 15, city: "ogun"} 

   for(key in user) {
    console.log(key + ":", user [key])
   }


//    let myName = {name: Alabi, city: Abuja, age: 12}

//    for(key in myName) {
//     console.log(key + ":", myName[key])
//    }

   //for of loop

   let colours = ["Blue", "Red", "Yello", "Pink"]

   for(colour of colours){
    console.log(colour);
   }

   // while loop

   // while (condition) {
    // // code to execute
  // }

  // Example

 // let i = 1;

//   while(i <= 7) {
//     console.log(i)
//     i++;
//   }


let y = 0;

while(y < 5) {
    y++;

    if(y === 3) {
        continue;
    }

    console.log(y)
}

// examples
let w = 3;

while(w <= 7){
  console.log(w)
  w++
}

// ===========================
let cookies = 3;

while (cookies > 0) {
    console.log(cookies + " cookies left.");
    cookies--;
}

// ===================_______

let fruitss = ["Apples", "Mangoes", "Oranges", "Watermelon"];
let z = 0;
while (z < fruitss.length){
  console.log(fruitss[z]);
  z++;
}

// ============================..

let fruits = ["apple", "banana", "cherry"];
let i = 0;

while  (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// foreach loop 

// Example
const student = ['Alabi', 'Mubarak', 'Habeeb']
student.forEach((student,i) =>{
    console.log(`student ${i}: ${student}`)
})

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});


console.log((2*6)+3-3*7/3*5%2)


