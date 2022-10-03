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
    return 
}