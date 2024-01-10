// VAR is global variable
// block scope & global scope

let a = 300;
var c = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope

function one() {
  const username = "madhur";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}
// one();

/* ek basic level per baat kary to ek parant function ka variable 
 us ka child function exis kar sak tay ha   */

if(true){
  const username = "madhur"
  if(username === "madhur")
  {
    const website =" youtube"
    // console.log(username + website);
  }
  // console.log(website);
}


// console.log(username);

// ++++++++++++++++++++++ interesting +++++++++++++++++++++
console.log(addone(5));
function addone(num){
  return num + 1
}


// expression
addTwo(5)
const addTwo = function (num){
    return num + 2
}

// Hoyesting
