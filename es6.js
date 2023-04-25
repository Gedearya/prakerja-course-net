// ES6

// console.log(number)
// var number = 10;

let angka = 10;
angka = 5;
// console.log(angka)

const pi = 3.14;
// pi = 5;
// console.log(pi)

// Template Literal

let kata1 = "buka";
let kata2 = "puasa";
let kata3 = "segar";

// Result: buka puasa segar

// ES5
// console.log(kata1 + " " + kata2 + " " + kata3);

// ES
// console.log(`${kata1} ${kata2} ${kata3}`)

// Arrow Function

// Function Declaration
function hello(){
    console.log("Hello")
}
// hello()

// Function Expression
const helloExpression = function() {
    console.log("Hello Expression")
}
// helloExpression()

// Function Arrow

const helloArrw = () => {
    console.log("Hello Arrow")
}
// helloArrow()

// High Order Function

let scores = [7,2,3,5,1]

scores.forEach(score=>{
    console.log(score)
})

let powerScores = scores.map(score => score **2)

let filterScores = powerScores.filter(score => score > 10)

// console.log(powerScores)
// console.log(filterScores)

// Destructuring

// Array

let students = ["vincent",3.21, true]

// ES5
// let name = students[0]
// let gpa = students[1]
// let isGraduated = students[2]

// ES6
let [name,gpa, isGraduated] = students;

// Object

let item = {
    type: "Laptop",
    price: 100000
}

let {type, price} = item