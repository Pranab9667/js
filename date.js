// Dates in javascript;

let myDate = new Date()
console.log(myDate); // It give the time and date but it is very hard to understand ;
console.log(myDate.toString()); // It provide the understandable form of the time and date ;

// Try new variant in time and date;
console.log(myDate.toISOString());  // it give the  date and time differnt manner;
console.log(myDate.toJSON()); 
console.log(myDate.toLocaleDateString()); // It gives the date format ;
console.log(myDate.toLocaleString()); // It gives the date and time format ;

console.log(typeof myDate); // type of date is Object;

let myCreatedDate = new Date(2023, 0 , 12);   // date are created in the form of (year, month, date) 
                                         // month started with the index value of 0;

console.log(myCreatedDate.toString());

let  myTimestamp = Date.now()
 
console.log(myTimestamp); // Give the millisec value of the curent time ;
console.log (myCreatedDate.getTime());// It give the millisec time of the created date; 

// to convert the time into sec from msec;

console.log(Math.floor(Date.now()/1000))


