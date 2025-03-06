//Object: key, value and method

const carA = {
    model: 2013,
    color: "Black",
    brand: "Toyota",
    price: 3000,
    horsePower: 900
}

console.log(carA["model"])
console.log(carA.model)
console.log(carA.color)
console.log(carA.brand)

console.log(carA.price)
console.log(carA.horsePower)


// Example 2

const cars = {
    firstCar: carA,

    secondCar: {
        model: 2014,
        color: "Blue",
        brand: "Benz",
        price: 50000,
        horsePower: 1000
    }
}

const carAPrice = cars["firstCar"]["price"]

console.log(carAPrice)

const carAP = cars.secondCar.price

console.log(carAP)

// Object with method

const cohort6 = {
    male: {
        names: ["Abdullai", "Mueez", "Idrees", "Ridwan"]
    },

    female: { name: "Lateefah" }
}

const firstName = cohort6.male.names[0];

console.log(firstName)

const dltAfrica = [
    {
        cohorts:
        {
            cohort1: {
                names: ["Biodun", "Tolu", "Anike", "Shola"], hobbies: {
                    Biodun: "Football",
                    Tolu: "Eating",
                    Anike: "Dancing",
                    Shola: "Running"
                },
            },
        },
    },

    {
        tutors:{
                names: ["Anate", "SoliuA", "SoliuM", "Abdullah"], 
                hobbies: {
                    Anate: "Football",
                    SoliuA: "Eating",
                    SoliuM: "Dancing",
                    Abdullah: "Running"
                },
            },
    },

]

const SholaHobby = dltAfrica[0].cohorts.cohort1.hobbies.Shola

console.log(SholaHobby)

const abdullahHobby = dltAfrica[1].tutors.hobbies.Abdullah

console.log(abdullahHobby);


const studentAndTuto = {[dltAfrica[1].tutors.names[0]]: dltAfrica[0].cohorts.cohort1.names[0]};

console.log(studentAndTuto);


// Object with methods

const dynamicKey = "year"

const carB = {
    name: "big daddy",
    brand: "Toyota",
   [dynamicKey]: 2023,
    updateYear: function (newYear) {
        this.year = newYear
    }
}

carB.updateYear(3004)
console.log(carB.year)


const student = {
    name: "Dammy", 
    age: 15,
    favNumber:[1, 2, 3, 4, 5, 6, 7, 8, 9,10],
    favSum : function () {
      return  this.favNumber.reduce((accumulator, currentValue) => (accumulator + currentValue), 0)
    }
}

console.log(student.favSum())
