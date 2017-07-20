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
    return "Hello, " + person;
}

var user1: Person = {firstName: "Jane", lastName: "UJ"};
var user2: Student = new Student("Jane", "UJ", "Test");

document.body.innerHTML = greeter(user1) + greeter(user2);
