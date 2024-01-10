//

let myDate = new Date();
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23 , 5, 3);
let myCreatedDate = ` ${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()} `;
// console.log(myCreatedDate.toLocaleString());

let myTimeSteamp = Date.now()

// console.log(myTimeSteamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate  =new Date()
console.log(newDate)
// console.log(newDate.getMinutes())

newDate.toLocaleString('default',{
    weekday:"long",
})

console.log(newDate)
