const myNumbers =[1,2,3,4,5,6,7,8,9,10]

//const newNumber = myNumbers.map((num)=> (num+10))


// chaining wiht the help of map anf filter function
 const newNumber = myNumbers
    .map((num)=> num+10)
    .map((num) => num*2)
 console.log(newNumber);


 //reduce concept in the js

 const my=[1,2,3]
 const myTotal = my.reduce(function(acc, currval){
                console.log(`acc:${acc} and currval:${currval}`);
                return  acc+ currval
 },0)
 console.log(myTotal);