//loops in object
// for of loop can not implement on object and for in loop is used to iterated the objects

const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const key in myObject) {
    console.log(`${myObject[key]}`);
}
// map can not iterated by any type of the loop;

//for each loop

const coding=["js","cpp","python","java"] 

coding.forEach( function (item) {
    console.log(item);
})


coding.forEach( (item)=>{
    console.log(item);
})

function  printMe(item){
    console.log(item);
}

coding.forEach(printMe)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName:"pythan",
        languageFileName:"py"
    },
]
myCoding.forEach((item)=>{
     console.log(item.languageFileName);
})
//filter operation

const myNums =[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((nums)=> nums > 4)
//console.log(newNums);

// another way to used filter operation 
const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);




