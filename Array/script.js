const cohorts =["Damilare", "Dolapo", "Lateefa", "Muiz", "Feranmi"]
console.log(cohorts);

const nested = [[1,2], [3,4], [5,6],]
console.log(nested);

const newArr = nested[0][1]
console.log(newArr);
console.log(nested.length);


const replaceEl = (cohorts[1] = "Ojo") 

console.log(replaceEl);
console.log(typeof replaceEl);

// To add a new element to last index of an array

cohorts[5] = "bibi"
console.log(cohorts);


cohorts.forEach((names) =>{
    console.log(names.toLowerCase())
})


cohorts.forEach((name) =>{
    console.log(name.toUpperCase())
})

const student = ["Ola", "Sogo", "Abebi", "Maryam", "Yemi"]
console.log(student)


// Array Methods
    // Push method to add a new element to the end of an array

    const pushed = student.push("Bola", "Bolu")
    console.log(pushed)

    const push = student.push("Alabi")
    console.log(push)
 

    // Pop Method to remove the last element in a array

    const number =[1,3,4,2,5,6,7,0]
    console.log(number)

    const popped = number.pop()// To save the removed element
    console.log(popped); //To view the removed element
    console.log(number)

    // Shift Method to remove the first element in a array

    const colors = ['green', 'blue', 'red', 'black']
    console.log(colors)

    const  remEl = colors.shift(); // To save the removed element in a variable
    console.log(colors)
    console.log(remEl)

    //Unshift Method to add from the first element in a array


    const color = ['green', 'blue', 'red', 'black']
    console.log(color)

    const  remE = color.unshift("white")
    console.log(color)
    console.log(remE)

    // Splice Method It allow us to add element or Value into array, it usually take 3 parameter, the first detremine where the new element are placed, the second parameter determine the numbers of element you want to delete after you placed new element and the third detremine the element you wish to add.

    const foods = ["Rice", "Beans", "Eba", "Semo", "Amala"]

    console.log(foods)

    foods.splice(3, 0, "Tuwo", "Yam")

    console.log(foods)

    const wears = ["Gucci", "D&G", "Amani", "Versace"]
    wears.splice(2)

    console.log(wears)

    // Slice Method It return a new array that contains element from a certain point (Excluding element at the position of second parameter input)first parameter is important from where to start from while the second parameter is where to end but excluding element in index position (when not use, it slices the rest of the element)

    const male = ["Dada",  "Afobaje", "Tiwo", "Gbajumo"]
    console.log(male)

    const newString = "Adeyemi"
    console.log(newString)
    console.log(newString.length);
    const slicedString = newString.slice(1, 4);
    console.log(slicedString)

    const day = "Monday"
    console.log(day)
   
    const sliceRe = day.slice(2, 4)
    console.log(sliceRe)

    const warriors = male.slice(1, 3);
    console.log(warriors)

    const stakkeHolders = male.slice(3)
    console.log(stakkeHolders);

    // or using negative parameter

    const stakkeHolders2 = male.slice(-2) // Start counting from element(-2)
    console.log(stakkeHolders2);

    const string = male.toString()
    console.log(string)

  // includes - checks if an item is included/exist in the array or not; and this return true/false.

    const blean = male.includes("Dadu");
    console.log(blean)

    const blean2 = male.includes("Tiwo")
    console.log(blean2)

  // sort () - sort the array in place (most in alphateically order or ascending order)

    const food = foods.sort()
    console.log(food)

    const sorted = male.sort()
    console.log(sorted)

    // indexOf() - Finds the first index of an item, returns -1 if not found. It works for the first occurrence.


    const num = [1, 2, 3, 4, 7, 6, 7,8]
    console.log(num)

    const index1 = num.indexOf(4)
    const index2 = num.indexOf(9)
    console.log(index1)
    console.log(index2)

    // lastIndexOf() - return the last occurrence of the string.... will pick from the back.

   const lastIndexOf = num.lastIndexOf(6, num.length)
    console.log(lastIndexOf);

    // forEach() - runs a function or perform action for each item, but it doesnt return anything. This means tht it will do it there automatically.

    const names = ["Shola", "Alaba", "Alamu"]

    // names.forEach(function(){
    //     console.log(names)
    // })


    // names.forEach(() => {
    //     console.log(names)
    // })


    names.forEach((value, i, arr) => {
        console.log(value)
        console.log(i)
        console.log(arr)
    })


    let totalVal = 0;
    const trans = [42, 45, 26, 4, 13, 16]

    trans.forEach((trn) => {
        console.log(totalVal, (totalVal += trn), trn)
    })
     
    console.log(totalVal);

    names.forEach((name) => console.log(`Congratulation ${name}, You will be representing the team in the UK nxet month`))


    // Map method - It is similar to forEach, it also accept up to 3 argument, it allocate memory in all data store and return values

    const investory = [
        {name: "Rice", price: 50000},
        {name: "Beans", price: 500},
        {name: "Gari", price: 3000},
        {name: "Semo", price: 4000},
        {name: "Yam", price: 5000}
    ]

    const prices = investory.map((value) => {
        return value.price
    })

    console.log(prices)

    const commodities = investory.map((value) => value.name)

    console.log(commodities)
    
    const numberS = [2, 4, 6, 8, 10]
    console.log(numberS)

    const squared = numberS.map((numberS) => numberS * numberS);
    console.log(squared);

    const difi = squared.map((numberS) => numberS / 2);
    console.log(difi);

    // Example 2 Map method ---> It create a new array and apply function toeach element without modifying the original array
    
    const arr = [1, 2, 3, 4, 5, 6];

    const multipliedVal = arr.map((el) =>  el * 2);

    console.log(multipliedVal);


       const words = ["hello", "world", "javascript"];

       console.log(words.map((word) => word.toUpperCase()));

    const pricesInUSD = [200, 120, 360, 90];
    const xchangeRate = 1490;

    console.log(pricesInUSD.map((usd) => usd * xchangeRate))


    const users = [
        {name: "Damilare", age: 300},
        {name: "Mumini", age: 950},
        {name: "Muiz", age: 1450},
        {name: "kabeer", age: 1950}
    ];

    const nameOnly = users.map((value) => value.name);

    console.log(nameOnly)
   


    const products = [
        {name: "Laptop", price: 300},
        {name: "Desktop", price: 950},
        {name: "Mouse", price: 1450},
        {name: "keyboard", price: 1950}
    ];

    const productWithId = products.map((product, index) => ( {
            id: index + 1,
        ...product
        }))

        console.log(productWithId)
        // console.log(products)

//===============================
        const only = productWithId.map((value) => value.id)
        console.log(only)

//===============================
      const numberZ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

       const less = numberZ.map((i) => {
            if(i < 6) {
                return i
            }
        })

      console.log(less)

        // Filter method.

     const evenNumber = numberZ.filter((i) => i % 2 === 0)
        console.log(evenNumber)

//================================
     const below = productWithId.filter((product) => product.price <= 1000);
        console.log(below)
//===============================
     const belowPro = productWithId.filter((product) => product.name.length < 7);

     console.log(belowPro)
//================================
     const upper = 
         productWithId.filter((product) => product.name.length > 5);

     console.log(upper)

//===============================

     let newAr = [100, "pelumi","Bolu",  false, {}, null, undefined]

     const filteredString = newAr.filter((data) => typeof data === "string")

     console.log(filteredString)


     const nul = productWithId.map((value) => value.price)
      console.log(nul)

      let productPri = 0
      productWithId.map((value) => productPri += value.price )

      console.log(productPri)