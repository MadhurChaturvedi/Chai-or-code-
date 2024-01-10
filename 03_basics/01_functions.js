

function say_myName () {
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("U");
    console.log("R");
}

// say_myName()
// function addTwoNumber(num1,num2){

//    console.log( num1 + num2);
// }

function addTwoNumber(num1,num2){

    let result = num1 + num2
    return result
  }

 const result = addTwoNumber(1,5)
  // console.log(addTwoNumber(1,5));   
//  console.log("reasult",result);



function loginUserMassage(username = "sam"){
  if(!username)
  {
    console.log("pls enter the user name");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMassage());

// ... rest oprator
function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400));

const user = {
  username:"madhur",
  price:199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject({
//   username:"sam",
//   price:399
// })

const myNewArray = [200,400,100,600]
function returnSecoundValue(getArray){
    return getArray[1]
}

// console.log(returnSecoundValue(myNewArray));
console.log(returnSecoundValue([100,200,300]));