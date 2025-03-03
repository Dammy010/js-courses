//Function Declaration


// function myName () {
//     return "hello world"
// }


// // Function Expression

// const myWorld = function () {
//     return "hello world"
// }



// // Arrow Function

// const myName = () => {
//     return 'hello world'
// }

function add (a,b) {
    return a+b;
}

console.log(add(1,2))


function jamb (age) {
    if (age > 30) {
        return "You are too old to register"
    } else if (age < 30 && age > 18) {
        return "You are qualified to register"
    } else {
        return "Too young to register"
    }
}

console.log(jamb(12))


function dayWeek (day) {
    switch(day) {
        case "Monday":
            return "busy day"
        case "Tuesday":
            return "A bright day"

        case "wednesday":
            return "Dry day"

        case "Thursday":
            return "wet"

        case "Friday":
            return "hectic"

        case "Saturday":
            return "Sunny day"

        case "Sunday":
                return "not sunny day"

        default:
                "hmmmm"
    }
}
console.log(dayWeek("Monday"))


const checkumber = (num) => {
    if (num > 0) {
        return "positive"
    } else if (num < 0) {
        return "negative"
    } else {
        return "zero"
    }
}


console.log(checkumber(0))
console.log(checkumber(4))
console.log(checkumber(-4))

const isEven = (num) => num % 2 === 0 ? "even" : "odd"

console.log(isEven(4))


const login = (username, password, isAdmin) => {
    if (!username || !password) return "Please fill the required fields";

    if (isAdmin) return "admin login successful";
    return username === "user" && password === "pass123" ? "user login succesful":
    "invalid credentials";
}

console.log(login( "user","pass123", true))

// Example 1

const registration = (surname, firstname, lastname, password, email) => {
    if (!surname || !firstname || !lastname || !password) return "Please fill your details";

    if (password.length < 6) return "minimum of 6 character";

    return surname === "Akinola" && firstname === "Dolapo" && lastname === "Habeeb" && password === "Dolly1234" ? "Already registered" : "Invalid Details"

}

console.log(registration("Akinola", "Dolapo", "Habeeb", "Dolly1234"));


// Example 2

const register = (fullname, password) => {
    if (!fullname || !password) return "Go back and fill the form";

   if (password.lenght < 6) return "minimom of 6 characters";

   return fullname === "Damilare" && password === "dammy1234" ? "user already exits": "Invalid Details"
}

console.log(register("Damilare", "dammy1234"))

   
// SCOPE

// GLOBAL SCOPE

let globalVar = "i am global"

function showVar(){
    console.log(globalVar)
}

showVar()

  
// LOCAL SCOPE

function showsVar(){
    let localVar = "i am local"
    console.log(localVar)
}

showsVar()


// LEXICAL SCOPE

function outterFunc () {
    let outerVar ="i am outer";

    function innerFunc() {
        console.log(outerVar)
    }

    innerFunc()

}

outterFunc()


function Dray (name) {
    function greet () {
        console.log(`Good day ${name}`)
    }

    greet()
}

Dray("Damilare")  
