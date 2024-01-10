// Primitive Data type
// 7 types : String , Number ,Boolearn , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

const bigNumber = 325654646421134564n


//  Reference (Non -Primitive)

// Array , Objects, Functions


const heros = ["GTA" , "FARCRY" , "ASSASSIN CREED"];

let myObj = {
    name:"Madhur",
    age:23
}

// we can also make with-out any Declare variable  
// {
//     name:"Madhur",
//     age:23
// } like this

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)

// 1:56:37