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
// Find Left Boundry of the Screen/Monitor
var LeftWindowsBoundry = function () {
    // Check if the window is off the primary monitor in a positive axis
    // X,Y                  X,Y                    S = Screen, W = Window
    // 0,0  ----------   1280,0  ----------
    //     |          |         |  ---     |
    //     |          |         | | W |    |
    //     |        S |         |  ---   S |
    //      ----------           ----------
    if (window.leftWindowBoundry() > window.screen.width) {
        return window.leftWindowBoundry() - (window.leftWindowBoundry() - window.screen.width);
    }
    // Check if the window is off the primary monitor in a negative axis
    // X,Y                  X,Y                    S = Screen, W = Window
    // 0,0  ----------  -1280,0  ----------
    //     |          |         |  ---     |
    //     |          |         | | W |    |
    //     |        S |         |  ---   S |
    //      ----------           ----------
    // This only works in Firefox at the moment due to a bug in Internet Explorer opening new windows into a negative axis
    // However, you can move opened windows into a negative axis as a workaround
    if (window.leftWindowBoundry() < 0 && window.leftWindowBoundry() > (window.screen.width * -1)) {
        return (window.screen.width * -1);
    }
    // If neither of the above, the monitor is on the primary monitor whose's screen X should be 0
    return 0;
};
window.leftScreenBoundry = LeftWindowsBoundry;
window.open('https://www.google.com', 'windowName', 'resizable=1, scrollbars=1, fullscreen=0, height=200, width=650, screenX=' + window.leftScreenBoundry() + ' , left=' + window.leftScreenBoundry() + ', toolbar=0, menubar=0, status=1');
//# sourceMappingURL=hi.js.map