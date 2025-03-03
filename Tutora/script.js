let purchaseAmount = 100;
let discount;

if (purchaseAmount >= 300) {
    discount = 10
} else if (purchaseAmount >= 200) {
    discount = 5
} else if (purchaseAmount >= 100) {
    discount = 2
}else{
    discount = 0
}

console.log(`You got a discount of ${discount}%`)

 let ageVote = 18

 if (ageVote > 40) {
    console.log("You are to old to vote")
 } else if (ageVote > 50){
    console.log(" You are not yet 18")
 } else {
    console.log("You are allow to vote")
 }


 let number = 15;
 let result = number % 3 === 0 && number % 5 === 0 ? "fizzBuzz" : number % 3 === 0 ? "fizz" : number % 5 === 0 ?"Buzz" : number; 

 console.log(result)

let year ="March"

switch (year) {
    case "January":
    console.log("first month of the year")
    break;
    case "February":
        console.log("Val month")
        break;
        case "March":
            console.log("Ramadan month")
            break;
            default:
                console.log("It is a normal month")
}

    function add (name) {
        return "Hello" +  "Damilare"
    }
    
    console.log(add ("name"))