const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNum =  myNumbers.map((item)=>{
//     return item+10
// })

// console.log(newNum);

myNumbers.forEach((i)=>{
    // return console.log(i+10);
})



const newNums = myNumbers
.map((item)=> item*10)
.map((num)=> num + 1)
.filter((num)=> num >= 40)


console.log(newNums);