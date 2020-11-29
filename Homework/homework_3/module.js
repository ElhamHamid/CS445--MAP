var Univeristy = /** @class */ (function () {
    function Univeristy(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    Univeristy.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    return Univeristy;
}());
var miu = new Univeristy("MIU", "Computer Science");
miu.graduation(2019);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.acceleration = acceleration;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log(" " + this.name + " is saying: Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
var baseObject = {
    width: 0,
    length: 0,
    calcSize: function () {
        return this.width * this.length;
    }
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize()); // 10
