const marvel_hero = ["thor", "Ironman", "spiderman"];
const dc_hero = ["superman", "flash", "batman"];
// marvel_hero.push(dc_hero)

// console.log(marvel_hero[3][2])

// const allheros = marvel_hero.concat(dc_hero);

// console.log(allheros)

// spread oprator it just [...] dot
const all_new_heros = [...marvel_hero,...dc_hero]
// console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("madhur"))
console.log(Array.from("madhur"))
console.log(Array.from({name:"madhur"})) // intresting


let score1 = 100 
let score2 = 200 
let score3 = 300 


console.log(Array.of(score1,score2,score3))



