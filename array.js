// array
const marvel_hero = ["spiderman","ironman","thor"];
const dc_heroes = ["superman", "batman", "flash"];
 
const all_heroes = marvel_hero.concat(dc_heroes);
console.log(all_heroes);

const newArray=[1,2,[3,4],4,5,[6,7,[8]],9,0];
const sortedArray =newArray.flat(Infinity);
console.log(sortedArray);


console.log(Array.isArray("Pranab"));
console.log(Array.from("Pranab"));
console.log(Array.from({name :"Pranab"})); // intersting because it give the empty array;

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));
