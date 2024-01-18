let myName = "youtubechannel";

let anotherName= myName;
anotherName = "pranabpradhan".          //changes in stack datatype occur in the copy variable;
console.log(myName);
console.log(anotherName);


let userOne = {
    emailId :"pranabpradhan@google.com",
    Upi : "user@ybl"
}

let userTwo = userOne;
userTwo.emailId = " pranabpradhanasdd@google.com";

console.log(userOne.emailId);             //chages in heap datatype occurs in the real variable;
console.log(userTwo.emailId);