// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.jobGreet = function() {
	return `Hello, my name is ${this.name}, I am ${this.age} years old.`
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype)

Employee.prototype.jobGreet = function() {
	return `Hello, my name is ${this.name}, I am ${this.age} years old and and my job title is ${this.jobTitle}..`
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
