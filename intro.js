function human(name, age, details){
	console.log("Hello, my name is, " + name + " and I am " + age + ". Here is a fact about me: " + details);

}

human("Meghan", 33, "I have two fur babies.");



function Human(name, age, details){
	this.name - name;
	this.age = age;
	this.details = details;

}

function Human (name, age, details) {
	this.name = name;
	this.age = age;
	this.details = details;	
}
​
Human.prototype = {
	constructor: Human,
​
	showAge: function() {
		console.log("I'm this many: " + this.age);
	},
​
	sayName: function() {
		console.log("My name is: " + this.name);
	},
​
	showDetails: function() {
		console.log(this.details);
	}
};
​
var cory = new Human("Cory Gackenheimer", 33, {
	member: "jQuery Mobile Team",
	books: [ "Node.js Recipes", "Introduction to React" ]
});
​
cory.sayName();
cory.showAge();
cory.showDetails();