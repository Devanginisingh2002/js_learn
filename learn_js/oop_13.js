// object-orientend programming

let car = {
    make: "Toyota",
    model: "fortuner",
    year: 2024,
    start: function(){
        return `the car made ${this.make}, in year ${this.year}`
    },
};
// console.log(car.start());

//constructor function
function identity(name, age){
    this.name = name;
    this.age = age;
}

let john = new identity("John Doe", 12);
// console.log(john.name);

// prototype & prototypal chain
function Animal(type){
    this.type = type;
}

//prototypal chain
Animal.prototype.speak = function(){
    return `this ${this.type} make a sound`
}

Array.prototype.Devang = function(){
    return `Custom method ${this}`
}

let array = [1, 2, 3, 4, 5];
// console.log(array.Devang());

let myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myNewArray.Devang());

//creation class
// If a function declared inside the class it known as METHOD.
// METHOD DEFINE: Inside class dont need to use keyword 'function'.

class vehicle {
    
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

// Inheritance
class Car extends vehicle{
    drive(){
        return `${this.make}: This is an Inheritance Example`;
    }
}

//object for access
let myCar = new Car("Toyota", "Fortuner");
// console.log(myCar);
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation: In one function it takes the data, cannt access out of that.
/* gpt: Internal data (variables) is hidden from outside access.
Data can be accessed or modified only through methods provided by the object. */
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.getBalance())


// Abstraction
class coffeeMachine {

    start(){
        // here, all the backend things going on
        // call DB
        // filter values 

        return `Starting the machine ....`;
    }

    brewCoffee(){
        //complex calculations
        return `Brewing the coffee`
    } 

    pressStartButton(){
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();

        return `For first: ${msgOne},\n For Second: ${msgTwo}`
    }
}

let myMachine = new coffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

//Polymorphism: Something that can take more forms.
class Bird {
    
    fly(){
        return `Flying ...`
    }
}

class Penguin extends Bird{
        
    fly(){
        return `Penguin cann't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());
// Note: Method name is same, but the behaviour is different.

//static method
class calulator{
        static add(a, b){
        return a + b;
    }
}

// let miniCal = new calulator();
// console.log(miniCal.add(2, 3));
//above gives an error because of static method: we do not need to create for calling.

// console.log(calulator.add(2, 3));

//Getter and Setter
class Employee {
    #salary;
    constructor(name, salary) {
        if(salary < 0){
            throw new Error("Salary not cannot be negative ")
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return `you are not allowed to see salary`;
    }

    set salary(value) {
        if(value < 0){
            console.error("Invalid Salary")
        } else {
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice", 50000);
console.log(emp._salary);
emp.salary = 60000;