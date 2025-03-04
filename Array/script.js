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

const student = ["Ola", "Sogo", "Abebi", "Maryam", "Yemi"]
console.log(student)


// Array Methods
    // Push method to add a new element to the end of an array

    const pushed = student.push("Bola", "Bolu")
    console.log(pushed)

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

    //Unshift Method

    const color = ['green', 'blue', 'red', 'black']
    console.log(color)

    const  remE = color.unshift("white")
    console.log(color)
    console.log(remE)

    // Splice Method

    const foods = ["Rice", "Beans", "Eba", "Semo", "Amala"]

    console.log(foods)

    foods.splice(3, 0, "Tuwo", "Yam")

    console.log(foods)

    const wears = ["Gucci", "D&G", "Amani", "Versace"]
    wears.splice(2)

    console.log(wears)

    // Slice Method

    const male = ["Dada", "Afobaje", "Tiwo", "Gbojumo"]
    console.log(male)

    const newString = "Adeyemi"
    console.log(newString.length);
    const slicedString = newString.slice(1, 4);
    console.log(slicedString)

    const warriors = male.slice(1, 4);
    console.log(warriors)

    const stakkeHolders = male.slice(3)
    console.log(stakkeHolders);

    // or using negative parameter

    const stakkeHolders2 = male.slice(-2) // Start counting from element(-2)
    console.log(stakkeHolders2);

    const string = male.toString()
    console.log(string)

    //.includes() Method

    const blean = male.includes("Dadu");
    console.log(blean)

    const blean2 = male.includes("Tiwo")
    console.log(blean2)

    // Sorts Method 

    const food = foods.sort()
    console.log(food)

    const sorted = male.sort()
    console.log(sorted)

    //The indexOf method is used to find the index of the first occurrence of a specified value in an array. It returns the index of the element if it is found, and -1 if the element is not found

    const num = [1, 2, 3, 4, 7, 6, 7,8]
    console.log(num)

    const index1 = num.indexOf(2)
    const index2 = num.indexOf(9)
    console.log(index1)
    console.log(index2)

    //Last indexOf

   const lastIndexOf = num.lastIndexOf(6, num.length)
    console.log(lastIndexOf);

    // ForEach Method

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


    // Map method 

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