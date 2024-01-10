// const promisOne = new Promise(function (resolve, reject) {
//   // Do  an async task
//   setTimeout(function () {
//     console.log("async task is compelete");
//     resolve();
//   }, 1000);
// });

// promisOne.then(function () {
//   console.log("Promis Consumed");
// });

// ------------------------------------------
// new Method
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// Third promis

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({username:"Chai",email:'madhur@gamil.com'});
//   }, 1000);
// });

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promisFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ usename: "madhur", password: "123" });
//     } else {
//       reject("Error : SomeThig went Wrong");
//     }
//   }, 1000);
// });

// promisFour
//   .then((user) => {
//     console.log(user);
//     return user.usename;
//   })
//   .then((usename) => {
//     console.log(usename);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolver or rejected"));

// -------------------------------------------------------------------------------

// const promisFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ usename: "madhur", password: "123" });
//     } else {
//       reject("Error : JS went Wrong");
//     }
//   }, 1000);
// });

// async function consumedPromiseFive() {
//   try {
//     const response = await promisFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumedPromiseFive();

async function getallUser() {
  try {
    const reponse = await fetch(
      "https://api.github.com/users/MadhurChaturvedi"
    );
    // console.log(reponse);
    const data = await reponse.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

// getallUser();

fetch("https://api.github.com/users/MadhurChaturvedi")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var d = data;
  })
  .catch((error) => console.log(error));
