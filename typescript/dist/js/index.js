"use strict";
// string, boolean, number
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
