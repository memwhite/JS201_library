//Three ways to instantiate an Object

var bike = {
	brand: "Huffy",
	wheels: 2,
	color: "blue",
	hasBell: false,
	hasHandlebars: true,
	ringBell: function() {
		if(this.hasBell) {
			console.log("ring, ring");
		} else {
			console.log("I need a bell");
		}
	},
	addBell: function(){
		this.hasBell = true;
	}
};

bike.ringBell();



Three ways to instantiate an Object
var foo = {}; // anonymous 
// ^^ THIS IS PREFERRED!!!!!!!!
var bar = new Object();
var baz = Object.create( null );

var fooWithProperties = {
	aProperty: true,
	anotherProp: "property",
	myMethod: function method() {
		console.log( "method" );
	} 
};

/ get back from lunch
create an object that represents a bike/motorcycle 
and allows use to ring a bell/honk horn and define properties
on it
var bike = {
	wheels: 2,
	hasBell: false,
	hasHandlebars: true,
	ringBell: function() {
		if ( this.hasBell ) {
			console.log( "ring, ring" );
		} else {
			console.log( "I need a bell" );
		}	
	},
	addBell: function() {
		this.hasBell = true;
	}
};

bike.ringBell();
bike.addBell();
bike.ringBell();

function ringGlobalBell() {
	console.log(this.bellSound);
}

var bike1 = {
	bellSound: "ring ring",
	ringBell: function() {
		console.log(this.bellSound);
	}
};

var bike2 = {
	bellSound: "ding, ding",
	ringBell: function() {
		console.log(this.bellSound);
	},
	ringBike1: bike1.ringBell
};

var bellSound = "dingaling";

// ringGlobalBell();
// bike1.ringBell();
bike2.ringBell();
bike2.ringBike1();


function ringGlobalBell( bike ) {
	console.log( bike + ": " + this.bellSound );	
}

var bike1 = {
	bellSound: "ring, ring"
};

var bike2 = { 
	bellSound: "ding, ding"
};

var bellSound = "dingaling";

// call()
ringGlobalBell.call( this, "global" );
// call as bike1
ringGlobalBell.call( bike1, "bike1" );
// call as bike2 
ringGlobalBell.call( bike2, "bike2" );

// apply()

ringGlobalBell.apply( this, [ "global" ]);
ringGlobalBell.apply( bike1, [ "bike1" ]);
ringGlobalBell.apply( bike2, [ "bike2" ]);

// bind()

var ringBike1Bell = ringGlobalBell.bind(bike1);
ringBike1Bell("bike1");

var ringBike2Bell = ringGlobalBell.bind(bike2);
ringBike2Bell("bike2");

// once bound it can't change
bike2.ringBell = ringBike1Bell;
bike2.ringBell("bike2");

Constructors

function Bike( model ) {
	this.model = model;
	this.logModel = function() {
		console.log(this.model);
	};
}

var bike1 = new Bike("Defy");
var mountainBike = new Bike("Monocog");

console.log(bike1.model);
bike1.logModel();

Bike.prototype.wheels = 2;
console.log(bike1.wheels);
console.log(mountainBike.wheels);


function Bike( model ) {
	this.model = model;
}

Bike.prototype = {
	constructor: Bike,
	wheels: 2,
	logModel: function() {
		console.log( this.model );
	}	
};

var bike1 = new Bike("defy");
console.log(bike1.constructor);


function Bike( model ) {
	this.model = model;
}

Bike.prototype.logModel = function() {

};

Bike.prototype.wheels = 2;




