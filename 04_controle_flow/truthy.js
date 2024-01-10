const userEmail = [];
"madhurchaturvedi2000@gmail.com"
if (userEmail) {
  console.log("Got use Email");
} else {
  console.log("Don't have user email");
}
/* falsy value
   false , 0, -0, BigInt 0n, "",null , undefined ,NaN
   ---------------------------------------------------


   truthy value

   "0", 'false' , " ",[] , {} , function(){}

   */

//    if(userEmail.length === 0)
//    {
//       console.log("Array is Empty"); 
//    }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// nullish Coalescing opration (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = 10 ?? 5
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

// console.log(val1);

// terniary Oprator

// Condition ? true:false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");