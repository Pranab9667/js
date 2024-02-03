//this function


const user={
    username:"hitesh",
    price:999,

    welcomepage:function(){
        console.log(`${this.username} welcome to webiste`)
    }
    
}

user.welcomepage();
console.log(this) // this function show empty function in the node js

