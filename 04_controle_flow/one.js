// if

const isUserloggedIn = true;
const temperature = 41;

// if(temperature === 41){
//    console.log("Exituted");
// }else {
//    console.log("Temprature is greater than 50");
// }

// !==

const score = 200;

// if(score>100){
//    const power = "fly"
//    console.log(`User Power : ${power}`);
// }

const balance = 1000;
// if(balance > 500) console.log("Working"), console.log("Test"); bad this neve do this

// if (balance < 500) {
//   console.log("Less than");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggdIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
// Tha && is AND it will check both variables -> Pass if both variable are true
if (userLoggdIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User Logged in");
}
