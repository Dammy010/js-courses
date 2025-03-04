// // Accessing elements

// // className


// const body = document.getElementsByClassName ("body")

// console.log(body)

// //id

// const header = document.getElementById("header")

// console.log(header)


// // Tag name


// const hOne = document.getElementsByTagName("h1")

// console.log(hOne)

// // Query Selector


// // document.querySelector

// const classElements = document.querySelector(".body")

// console.log(classElements)


// // document.querySelectorAll

// const all = document.querySelectorAll(".body")

// console.log(all)


// Dom manipulation

// textcontent
// innerhtml
// styling
// adding & removing classes
// event listener


// TEXTCONTENT  

const header = document.getElementById("header")

header.textContent = "Hello Universe!"

const p = document.querySelector("p")

p.textContent = "We are new"

const h2 = document.querySelector("h2")

    h2.textContent = "How are you"


// INNERHTML


const container = document.querySelector("div")

container.innerHTML = `
    <h1> I like coding </h1>
    <p> Coding is life</p>
`

// STYLING

container.style.backgroundColor = "blue"
container.style.color = "white"

// ADDING & REMOVING CLASSES

const h6 = document.querySelector("h6")

h6.textContent ="we enjoy"


h6.classList.add("subheading")

p.classList.remove("body")

const bodyElements = document.getElementsByClassName("body")

console.log(bodyElements)


// ADDING EVENT LISTENER

// Click event

document.querySelector("button").addEventListener("click", function(){
   const message = document.getElementById("message")

   if (message.textContent === "Hello!"){
        message.textContent = "Button clicked"
   }else {
        message.textContent = "Hello!"
   }
})



// Mouse Event

document.getElementById("box").addEventListener("mouseover", function (){
    document.getElementById("box").style.backgroundColor = "green"
})

document.getElementById("box").addEventListener("mouseout", function (){
    document.getElementById("box").style.backgroundColor = "black"
})

// keyup nbmb

document.getElementById("textInput").addEventListener("keyup", function(event){
    document.getElementById("output").textContent = "you pressed:" + event.key
})

function greet(name){
    alert("Hello, " + name + "!");
}

document.getElementById("greetBth").addEventListener("click", () => greet ("Damilare"))



const newBox = document.createElement('div')

newBox.textContent = "How are you doing Today"


document.body.appendChild(newBox)

const box = document.getElementById("box")

const newH1 = document.createElement("h1")

newH1.textContent = "Dammy"
newH1.style.color ="pink"

box.appendChild(newH1)

document.getElementById("boxs").addEventListener("mousemove", function(){
    document.getElementById("boxs").style.backgroundColor = "blue"
})

document.getElementById("boxs").addEventListener("mouseout", function(){
    document.getElementById("boxs").style.backgroundColor = "brown"
})

