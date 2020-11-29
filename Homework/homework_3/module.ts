class Univeristy{
    name:string
    dept:string
    constructor(name:string,dept:string){
        this.name=name;
        this.dept=dept
    }
    graduation(year:number){
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}


var miu = new Univeristy("MIU", "Computer Science"); 
miu.graduation(2019);


type shape={
    money:number,
    deposit(value:number):void
};
let bankAccount:shape = { 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
}; 
let myself = { 
	name: "Asaad", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);


class Car{
    name:string
    acceleration:number
    constructor(name:string,acceleration:number=0){
        this.acceleration=acceleration;
        this.name=name;
    }
    honk(){
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed:number){
        this.acceleration = this.acceleration + speed;    
    }
}


var car = new Car("BMW"); 
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60); 
console.log(car.acceleration); // 60

type test={
    width:number,
    length:number,
    calcSize():number
}
var baseObject:test = { 
	width: 0, 
    length: 0, 
    calcSize(){
        return this.width * this.length;
    }
}; 
var rectangle = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

console.log(rectangle.calcSize()); // 10
