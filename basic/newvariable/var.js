const accountId=144553;
let accountEmail="pranab.com";
//console.table([accountId,accountEmail]);

let score =true;
console.log(typeof score);

let variableInNumber= Number(score);
console.log(typeof variableInNumber);
console.log(variableInNumber);
//this is the notes when we change the string into number
//"33"=>number;
//"33abc"=>NaN;
//null=>0;
//undefined=>NaN;
//true=1;
//false=0;


//now we try to change different datatype into boolean;
let isLoggedIn = "pranab";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1=true;
//0=false;
//""=false;
//"pranab"=true;


//***********operation*********//
//console.log("1"+2);
//console.log(1+"2");
//console.log("1"+2+2);
//console.log(1+2+"2");

//important topic of prefix and postfix;




//comparison between two same datatype or two different data;

console.log(null>0);//false
console.log(null>=0);//true.      //because it change the value of the null and treating as o that's why it give an answer in this oder ;
console.log(null==0);//false


//=== strict check; in this comparison operator it also check the datatype of comparison variable;
//two diferent datatype =false;
// same datatype and fullfill the condition then it give=true;

console.log("2"=== 2);