//JavaScript Types

//Primative types:
//String
//Number
//Boolean
//null
//undefined

//objects

var object1 = new Object(); //object1 = {}
var object2 = object1;

object1.myCustomProperty = "Blah";

console.log(object2.myCustomProperty);

var array = new Array(16);
array.join("cheese");

//Built in types:

//1. Arrays

var items = new Array(); // this is not the prefered way to enter an array

var items =[]; //preferred way create an array

//2.Date
var now = new Date();

//3. Error
var error = new Error("something is fishy");

//4. Functions
var fn = new Function("console.log('function')"); //not the ideal way to write it

//5. Objects
var object = new Object();

//6. Regular Expression (regex) - way to find/identify/parse parts of a string (regexpal.com) 
//Book to read: teach yourself regular expressions in 10 minutes
var re = new RegExp("\\d+");

//

// JavaScript types
// String
// Number
// Boolean
// null
// undefined
​
//objects
var object1 = new Object(); // object1 = {}
var object2 = object1;
​
object1.myCustomProperty = "Blah";
​
console.log(object2.myCustomProperty);
​
// Built in types
// Arrays
var items = new Array();
// the array literal notation is preferred []
var items = [];
​
// Date
var now = new Date();
// Error
var error = new Error("something is fishy");
​
// function
var fn = new Function("console.log('function')");
​
//objects
var object = new Object();
​
//regex
var re = new RegExp("\\d+");
​





















