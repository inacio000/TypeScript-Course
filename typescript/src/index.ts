// string, boolean, number

let x: number = 30;

x = 5;

console.log(x);

// inferência & annotation 
let y = 25; // inferência


let z: number = 5; // annotation


// Tipos basicos
let firstName: string = "Inacio";
let age: number = 20;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName)
firstName = "Raimundo";

console.log(firstName);

// Object
const myNumbers: number[] = [1, 2, 3, 4, 5];
console.log(myNumbers);
console.log(myNumbers.length)
myNumbers.push(3);
console.log(myNumbers);

// Tuplas -> Tuple
let myTuple: [number, string, string[]];
myTuple = [5, 'Inacio', ['IMR', "Martinho"]]
console.log(myTuple);


// Object literals -> {prop: value} 
const user: {name: string, age: number} = {
    name: "Inacio",
    age: 20
}

console.log(user)
console.log(user.name)
user.name = "IMR"
console.log(user.name)


// any (aceita qualquer tipo de dado)
let a: any = 0;

console.log(a)
a = "String Test"

a = true
console.log(a)

a = []
console.log(a)


// union type
let id: string | number = "123"
console.log(id)

id = 200
console.log(id)


// type alias (criar um tipo e ser partilhado)
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "10926"
const shirId: myIdType = 124

console.log(userId)
console.log(productId)
console.log(shirId)


// enum (enumera uma coleção)
enum Size {
    S = "Small",
    M = "Medium",
    L = "Large",
    XL = "XLarge",
    XXL = "XXLarge",
    XXXL = "XXXLarge",
};

const tshirt = {
    name: "Balanciaga",
    size: Size.M,
    color: "Gray",
};

console.log(tshirt)


// literal type (determina um valor como um tipo)
let teste: "autenticado" | null

teste = "autenticado"
teste = null


// finctions
function sum(a: number, b: number) {
    return a + b
}

console.log(sum(6, 4))

function sayHello(name: string): string {
    return `Hello, ${name}`
}
console.log(sayHello('Inacio'));

function logger(msg: string): void {
    // função sem retorno (void)
    console.log(msg);
}
logger('Teste')

function greeting(name: string, greet?: string) {
    if(greet) {
        console.log(`Hello ${greet} ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greeting('Inacio')
greeting('Raimundo', 'Sr.')


// Interfaces
interface MathFunctionParameters {
    n1: number,
    n2: number,
    n3: number,
}

function sumNumbers(nums: MathFunctionParameters) {
    return nums.n1 + nums.n2 + nums.n3
}

console.log(sumNumbers({n1: 4, n2: 6, n3: 7}));

function multiplyNumber(nums: MathFunctionParameters) {
    return nums.n1 * nums.n2 * nums.n3 * nums.n1;
}

const someNumbers:MathFunctionParameters = {
    n1: 4,
    n2: 6,
    n3: 8,
}
console.log(multiplyNumber(someNumbers));


// narrowing (checagem de tipo)
function doSomething(info: number | boolean) {
    if(typeof info === 'number') {
        console.log(`The number is: ${info}`);
        return
    }
    console.log('There was not typed any number');
}

doSomething(6);
doSomething(true);


// generics
function showArraysIntems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Items: ${item}`)
    })
}

const firstArray = [1, 2, 3, 4, 5];
const secondArray = ['Inacio', 'Martinho', 'Raimundo']

showArraysIntems(firstArray);
showArraysIntems(secondArray);


// Classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    // Methods
    showUserName() {
        console.log(`The user name is ${this.name}`);
    }
    showUserRole(canShow: boolean) {
        if(canShow) {
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

// Interfaces em classes
interface IVehicle {
    brand: string; // marca
    showBrand(): void;
}

class Car implements IVehicle {

    brand
    wheels // rodas
    
    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`The car brand is ${this.brand} and has ${this.wheels} wheels`);
    }
}

const Fusca = new Car('VW', 4);
Fusca.showBrand();


// heranca
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar('Audi', 4, 2.0);
console.log(a4);

a4.showBrand();



// constructor decorators
function BaseParameters() {
    return function<T extends { new (...args: any[]): {}}> (constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParameters()

class Person {
    name

    constructor(name: string) {
            this.name = name;
    }
}

const imr = new Person('IMR');
console.log(imr);