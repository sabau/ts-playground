interface Person{
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person;
}

var user: Person = {firstName: "Jane", lastName: "UJ"};

document.body.innerHTML = greeter(user);
