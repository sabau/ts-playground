function greeter(person) {
    return "Hello, " + person;
}
var user = { firstName: "Jane", lastName: "UJ" };
document.body.innerHTML = greeter(user);
