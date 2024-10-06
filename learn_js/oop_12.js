let computer = { cpu: 12 };
let lenovo = {
    screen: "hd",
    __proto__: computer,    //access the computer properties inside the lenovo 
};
let tomHardware = {}

// console.log(`lenovo `, lenovo.__proto__);

//setprototypeof
let genricCar = {tyre: 4};
let tesla = {
    driver: "AI"
};

Object.setPrototypeOf(tesla, genricCar)
// console.log(`tesla`, Object.getPrototypeOf(tesla));

// setPrototypeOf (MDN example)
/* const obj = {};
const parent = 
{ 
  foo: 'bar' 
};

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar" */


// functional constructor
/* function car(name, model) {
    this.name = name;
    this.model = model;
}

let mycar = new car("toyota", "camry");
console.log(mycar);

let myNewCar = new car("Tata", "Safari");
console.log(myNewCar); */

// functional constructor example2:
/* function tea(type){
    this.type = type;
    this.describe = function() {
        return `Tea is the type of ${this.type}`
    };
}

let chai = new tea("lemon tea");
console.log(chai);
console.log(chai.describe()); */

// Constructor functional and Prototype
/* function Animal (species) {
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} make a sound`;
};

let Dog = new Animal("Dog");
console.log(Dog.sound());

let Cat = new Animal("Cat");
console.log(Cat.sound());
*/

// error: functional constructor
function Drink(name) {
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("chai");
let coffee = Drink("Espresso");
