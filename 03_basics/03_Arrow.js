const user = {
  username: "madhur",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , wlcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// Chai ☕

// function chai(){
//     let username = "madur"
//     console.log(this.username);
// }

// const chai=()=>{
//     let username = "madur"
//     console.log(this.username);
// }

// chai()

// const addtwo=(n1,n2)=>{
//     return n1+n2
// }

// const addtwo=(n1,n2)=>  n1+n2
// its is called intsiplitly return
// const addtwo = (n1, n2) => (n1 + n2);
const addtwo = (n1, n2) => ({username:"madhur"})

console.log(addtwo(1, 2));


const myArray = [1,2,4,5]
// myArray.forEach((i)=>{
//     console.log(i);
// })