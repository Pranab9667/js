//object 

const tinderUser = new Object()
tinderUser.email="pranab@some.com";
tinderUser.name="Pranab Pradhan";
tinderUser.isloggedIn= "false";






const regularUser = {
    emailId : "some@gmail.com",
    fullname: {                          //nested objects inside the object;
        username:{
            firstname:"Pranab",
            lastname:"Pradhan"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.username.firstname);

//assign the vslue of one object in the another object;
const obj1 = {
    1:"a",
    2:"b"
}

const obj2={3:"a",4:"b"}
//const obj3= Object.assign({},obj1,obj2);// using the assign function to join two or more object in the new object;
//console.log(obj3);

const obj3={...obj1,...obj2};// using spread function to join two or more object in the new object;
console.log(obj3);

console.log(tinderUser);
//Now we can change the objects into array 
console.log(Object.keys(tinderUser));   // give the key's value of the objectinto array form;
console.log(Object.values(tinderUser));// give value 
console.log(Object.entries(tinderUser));//give whole entries in the object;
console.log(tinderUser.hasOwnProperty("email")); //checking property output is in the boolean form;
console.log(tinderUser.hasOwnProperty("emailId"));


const cource={
    courseName:"js in hindi",
    price:"999",
    courceteacher:"Pranab"
}

const{courceteacher:teacher}=cource;
//console.log(courceteacher);
console.log(teacher);


//how api fetched in the react js;
