/*
//function declarations

function square( number ){
	return number * number;
}

//function expression
				//Anonymous function
var add = function( first, second ){
	return first + second;
};

//function expression with identifier
//factorial of 5 is 5 x 4 x 3 x 2 x 1 = 120
var factorial = function factorial( number ){
	if ( number < 2 ) {
		return 1;
	}

	return number * factorial( number -1 );

};

//better, more simple example of function expression with identifier
var sum = function innerSum( firstNum, secondNum) {
	return firstNum + secondNum;
};



//Hoisting

var result = console.log(squair( 11 ));
//function declarations are hoisted
function squair( number ){
	return number * number;
}
//function expressions are not hoisted
var result2 = squair2 ( 11 ); //ERROR!! 

var squair2 = function( number ){
	return number * number;
};
*/

///parameters in functions

function echo( value ) { 
	return value;
}

console.log( echo( "heyo") );
console.log( echo( "don't panic", 42) );

console.log( echo.length ); //arity

function echo2( ) {
	return arguments[ 0 ]; //not good practice, but this is a way to return all arguments 
	}            //entered when you don't know how many parameters will be entered

console.log( echo2( "howdy" ) );

//add any number of values together
function sum( ){
	var result = 0,
		i = 0,
		len = arguments.length;
	
	while ( i < len) {
		result += arguments[i];
		i++;
	}
	return result;
}

console.log( sum( 1, 2));
console.log( sum( 3, 4, 5, 6, 7));

// // function declarations
// function square( number ) {
// 	return number * number;
// }

// // function expression
// 				// Anonomous function
// var add = function( first, second ) {
// 	return first + second;
// };

// // function expression with identifier
// var factorial = function factorial( number ) {
// 	if ( number < 2 ) {
// 		return 1;
// 	}

// 	return number * factorial( number - 1 );
// };

// // function expression with identifier
// var sum = function innerSum( firstNum, secondNum ) {
// 	return firstNum + secondNum;
// };

// // MINIFIED
// var a=function a(n){if(n<2){return 1;} return n*a(n-1);};


// Hoisting

// var result = console.log(squair( 11 ));
// // function declarations are hoisted
// function squair( number ) {
// 	return number * number;
// }

// // function expressions are not
// var result2 = squair2( 11 ); // ERRORRORROR!!

// var squair2 = function( number ) {
// 	return number * number;
// };

// var result2 = squair2( 11 );



/// parameters

// function echo( value ) {
// 	return value;
// }

// console.log( echo( "heyo" ));
// console.log( echo( "don't panic", 42) );
// console.log( echo( { firstName: "blah", lastName: "blah"}, 1 ));
// console.log( echo.length ); // arity

function echo2() {
	return arguments;
}

console.log( echo2( "howdy", "blah", "false", 2 ) );

// // add any number of values together
// function sum() {
// 	var result = 0,
// 		i = 0,
// 		len = arguments.length;

// 	while ( i < len ) {
// 		result += arguments[i];
// 		i++;
// 	}

// 	return result;
// }

// console.log( sum( 1, 2 ) );
// console.log( sum( 3, 4, 5, 6, 7 ) );

function sum( numbersArray ) {

}

sum( [1,2,3,4]);

function someOtherFunction( settings ) {
	if (settings.username === "cory" ) {
		// app.grantSuperuser();
	}
}
someOtherFunction( { username: "cory", id: 1 } );
















