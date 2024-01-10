// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world"

for (const i of greetings) {
    // console.log(`the element ->  ${i} ` );
}


//Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States of Amaerica')
map.set('fa','franch')


// console.log(map);

for (const [key ,value] of map) {
    // console.log(key,':-',value);
}

const myObject = {
    'Game1':'NFS',
    'Game2':'Spiderman'
}


// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    
// }