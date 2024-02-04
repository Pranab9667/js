//contol flow 
// if statement 
//if(condition )//if true 
//{
    // enter in the condition statement
//}
//<,>,<=,>=,==,!=,===,!==,&& (and operator),||(or operator)

//switch case

const month =3 
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("aug");
        break;
    case 9:
        console.log("sep");
        break;
    case 10:
        console.log("oct");
        break;
    case 12:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;

    default:
        console.log("defult case");
        break;
}


//falsy value  in js 

// false ,0 ,-0,BigInt 0n,"",null,undefined, NaN;


// truthy value in js

//"0",'false'," ",[],{},function(){}

const emptyObj={}

if(Object.keys(emptyObj).lenght===0){
    console.log("Array is empty");
}
//Nullish Coalescing Operator(??): null undefined
let val ;
//val =5 ?? 10
 val = null ?? 10

console.log(val);


//terniary Operator
// condition ? true :false

const iceTeaPrice =100;
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80")
