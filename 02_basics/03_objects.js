// singleton

// object literals

// Object.create

// object literals

const mySym = Symbol();
const jsUser = {
  [mySym] :"key1",
  name: "madhur",
  lastname: "Chaturvedi",
  age: 18,
  location: "gwalior",
  email: "madhurchaturvedi2000@gmail.com",
  isLogin: false,
  lastLoginDays: ["monday", "saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["lastname"]);
// console.log(jsUser[mySym]);


jsUser.email = "mm@gmail.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)
jsUser.email = "madhurcode@gmail.com"
// console.log(jsUser.email)


jsUser.greeting = function (){
  console.log("Hello js user")
}

jsUser.greeting2 = function (){
  console.log(`Hello js user 2 , ${this.name}`)
}

console.log(jsUser.greeting())

console.log(jsUser.greeting2())