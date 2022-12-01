"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, boolean, number, ....
let x = 10;
x = 20;
console.log(x);
//inferencia x annotation
let y = 12;
// y = "teste"
let z = 12;
//tipos basicos
let fisrtName = "matheus";
let age = 30;
const isAdmin = true;
// String != string
console.log(typeof fisrtName);
fisrtName = "João";
console.log(fisrtName);
//Object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(fisrtName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
//tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//myTuple = [true, false, true]
// object leterals -> {props: value}
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
console.log(user.name);
//any
let a = 0;
a = "teste";
a = true;
a = [];
//union type
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
//enum
// tamanho de roupas(size: medio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
// literal types
let teste;
// teste = "outrovalor"
teste = "autenticado";
teste = null;
//funçoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHello(name) {
    return ` hello ${name}`;
}
console.log(sayHello("Lucas"));
//funçoes sem retorno
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));
//narrowing (utilizada na função greeting)
// chegagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O numero é" ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
//generics
function showArraysItems(arr) {
    arr.forEach((items) => {
        console.log(`ITEM:" ${items}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
//classes
class User {
    name;
    role;
    isAproved;
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const carlos = new User("Carlos", "Admin", true);
console.log(carlos);
carlos.showUserName();
carlos.showUserRole(false);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(` A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("W", 4);
fusca.showBrand();
//heranças
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
//decorators
// constructor decorator
function BaseParamters() {
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
    BaseParamters()
], Person);
const sam = new Person("sam");
console.log(sam);
