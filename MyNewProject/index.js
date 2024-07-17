const moment = require("moment");
/* 
This line is importing the moment library, which provides
 a wide range of date and time manipulation functions. The require 
 function is used to include modules in Node.js.
*/

const timestamp = moment().format("h:mm:ss a");

/*
This line is using the moment library to get the current date and time,
 and then formatting it as a 12-hour clock time string with seconds and
  AM/PM indication. The moment().format() function is used to apply the 
  desired format.
*/

console.log(timestamp);

/*
This line is logging the formatted timestamp to the console. The console.log() 
function is used to output information to the console in Node.js.
*/
