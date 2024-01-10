const myObject = {
    js:'javscript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}
const map = new Map()
map.set('IN','India')
map.set('USA','United States of Amaerica')
map.set('fa','franch')

for (const key in map) {
    // console.log(key);
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming  = ['js','rb','py','cpp']

for (const key in programming) {
//    console.log(programming[key]);
}