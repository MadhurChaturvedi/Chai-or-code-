// for loop

// initialise
// check condation
// update

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best numebr");
  }
  //   console.log(element);
}

// console.log(element);

// to select all just press ctrl +  D
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and  inner loop${i}`);
    // Table
    // console.log(i + '*' + j + ' = ' + i*j);
  }
}

let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
}

// 7:33:29

// -------------------------------------
// break and continue 

// for (let i = 0; i <= 20; i++) {
//   if(i == 5){
//      console.log(`Detected 5`);
//      break
//   }
//   console.log(`value of i is ${i}`);
  
// }
for (let i = 0; i <= 20; i++) {
  if(i == 5){
     console.log(`Detected 5`);
     continue
  }
  console.log(`value of i is ${i}`);
  
}



