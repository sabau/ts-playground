class Student{
    fullName: string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
    }
}

interface Person{
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user1: Person = {firstName: "Jane", lastName: "UJ1"};
var user2: Student = new Student("Jane", "UJ2", "Test");

document.body.innerHTML = greeter(user1) + greeter(user2);
