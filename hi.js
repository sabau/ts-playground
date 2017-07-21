var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { firstName: "Jane", lastName: "UJ1" };
var user2 = new Student("Jane", "UJ2", "Test");
document.body.innerHTML = greeter(user1) + greeter(user2);
//# sourceMappingURL=hi.js.map