const coding = ['js','ruby','c++','java','c']

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((item)=>{
//    console.log(item);
// })

// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index, arr);
// })

const myCodding = [
    {
        language:'javascript',
        languageFileName:'js'
    },
    {
        language:'python',
        languageFileName:'py'
    },
    {
        language:'c++',
        languageFileName:'cpp'
    }
]

myCodding.forEach((item)=>{
  console.log(item.language + " + " + item.languageFileName);
})
