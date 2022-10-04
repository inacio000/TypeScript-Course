"use strict";
// string, boolean, number
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 30;
x = 5;
console.log(x);
// inferência & annotation 
let y = 25; // inferência
let z = 5; // annotation
// Tipos basicos
let firstName = "Inacio";
let age = 20;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "Raimundo";
console.log(firstName);
// Object
const myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(3);
console.log(myNumbers);
// Tuplas -> Tuple
let myTuple;
myTuple = [5, 'Inacio', ['IMR', "Martinho"]];
console.log(myTuple);
// Object literals -> {prop: value} 
const user = {
    name: "Inacio",
    age: 20
};
console.log(user);
console.log(user.name);
user.name = "IMR";
console.log(user.name);
// any (aceita qualquer tipo de dado)
let a = 0;
console.log(a);
a = "String Test";
a = true;
console.log(a);
a = [];
console.log(a);
// union type
let id = "123";
console.log(id);
id = 200;
console.log(id);
const userId = 10;
const productId = "10926";
const shirId = 124;
console.log(userId);
console.log(productId);
console.log(shirId);
// enum (enumera uma coleção)
var Size;
(function (Size) {
    Size["S"] = "Small";
    Size["M"] = "Medium";
    Size["L"] = "Large";
    Size["XL"] = "XLarge";
    Size["XXL"] = "XXLarge";
    Size["XXXL"] = "XXXLarge";
})(Size || (Size = {}));
;
const tshirt = {
    name: "Balanciaga",
    size: Size.M,
    color: "Gray",
};
console.log(tshirt);
// literal type (determina um valor como um tipo)
let teste;
teste = "autenticado";
teste = null;
// finctions
function sum(a, b) {
    return a + b;
}
console.log(sum(6, 4));
function sayHello(name) {
    return `Hello, ${name}`;
}
console.log(sayHello('Inacio'));
function logger(msg) {
    // função sem retorno (void)
    console.log(msg);
}
logger('Teste');
function greeting(name, greet) {
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
greeting('Inacio');
greeting('Raimundo', 'Sr.');
function sumNumbers(nums) {
    return nums.n1 + nums.n2 + nums.n3;
}
console.log(sumNumbers({ n1: 4, n2: 6, n3: 7 }));
function multiplyNumber(nums) {
    return nums.n1 * nums.n2 * nums.n3 * nums.n1;
}
const someNumbers = {
    n1: 4,
    n2: 6,
    n3: 8,
};
console.log(multiplyNumber(someNumbers));
// narrowing (checagem de tipo)
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`The number is: ${info}`);
        return;
    }
    console.log('There was not typed any number');
}
doSomething(6);
doSomething(true);
// generics
function showArraysIntems(arr) {
    arr.forEach((item) => {
        console.log(`Items: ${item}`);
    });
}
const firstArray = [1, 2, 3, 4, 5];
const secondArray = ['Inacio', 'Martinho', 'Raimundo'];
showArraysIntems(firstArray);
showArraysIntems(secondArray);
// Classes
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    // Methods
    showUserName() {
        console.log(`The user name is ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`The user role is ${this.role}`);
            return;
        }
        console.log(`Restricted information!`);
    }
}
const Inacio = new User('Inacio', 'Admin', true);
console.log(Inacio);
Inacio.showUserName();
Inacio.showUserRole(true);
class Car {
    brand;
    wheels; // rodas
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`The car brand is ${this.brand} and has ${this.wheels} wheels`);
    }
}
const Fusca = new Car('VW', 4);
Fusca.showBrand();
// heranca
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.0);
console.log(a4);
a4.showBrand();
// constructor decorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const imr = new Person('IMR');
console.log(imr);
