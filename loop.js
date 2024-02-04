//Iteration  in js
//for loop

for (let i=0;i<10;i++){
    const element =i;
    if(element==5){
        console.log("5 is the first number");
    }
    console .log(element);
}


let array =["flash","superman","batman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

//break and continue 

//1.break
for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of the i is ${i}`);
}
//2.continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of the i is ${i}`);
}



//while and do while loop
let i=0;
while(i<=10){
   console.log(`value of the is ${i}`);
   i++;
}

let myArray =["flash","superman","ironman"];
let a =0;
while(a<myArray.length){
    console.log(`${myArray[a]}`);
    a++;
}



//do while loop
let score =1;
do{
   console .log(`score is ${score}`)
   score++;
}while(score<10)


// other variety in loops

//for of 
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(`value of num ${num}`);
}

// Maps 

const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FI',"France")
console.log(map);

for (const [key,value] of map) {
    //console.log(key); // print all the key in the form of the array 
    console.log(key,':-',value);
}


const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
//for (const [key,value]  of myObject) {
 //   console.log(key,':-',value);
//}

// object can not be iterated by loop
