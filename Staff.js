var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff = new Staff("Le Nhu Y", "lenhuy@gmail.com", 35);
var nameStaff = staff.getName();
console.log(nameStaff); // Staff 1
var emailStaff = staff.getEmail();
console.log(emailStaff); // Le Nhu Y
var ageStaff = staff.getAge();
console.log(ageStaff); // 35
staff.setName('Staff 2');
var currentNameStaff = staff.getName();
console.log(currentNameStaff); // Staff 2
