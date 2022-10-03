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

// Tuplas
let myTuple: [number, string, string[]];
myTuple = [5, 'Inacio', ['IMR', "Martinho"]]
console.log(myTuple);

// Object literals