// string, boolean, number, ....
let x: number = 10
x = 20
console.log(x)

//inferencia x annotation
let y = 12

// y = "teste"
let z: number = 12

//tipos basicos
let fisrtName: string = "matheus"
let age: number = 30
const isAdmin: boolean = true

// String != string
console.log(typeof fisrtName)
fisrtName = "João"
console.log(fisrtName)

//Object
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)
console.log(fisrtName.toUpperCase())
myNumbers.push(5)

console.log(myNumbers)


//tuplas -> tuple
let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["a", "b"]]
//myTuple = [true, false, true]


// object leterals -> {props: value}

const user: { name: string; age: number } = {
    name: "Pedro",
    age: 18,
}
console.log(user)
console.log(user.name)


//any
let a:any = 0

a = "teste"
a = true
a = []

//union type

let id: string | number = "10"
id = 200
//id = true
//id = []


//type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123

//enum
// tamanho de roupas(size: medio, size: Pequeno)

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
}
console.log(camisa)

// literal types
let teste: "autenticado" | null

// teste = "outrovalor"
teste = "autenticado"
teste = null


//funçoes
function sum(a: number, b:number) {
    return a + b
}
console.log(sum(12, 12))

function sayHello(name: string): string {
    return ` hello ${name}`
}
console.log(sayHello("Lucas"))

//funçoes sem retorno
function logger(msg: string): void {
    console.log(msg)
}
logger("Teste!")

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`)
        return
    }
    console.log(`Olá ${name}`)
}
greeting("José")
greeting("Pedro", "Sir")


//interfaces
interface MathFunctionsParams {
    n1: number,
    n2: number
}
function sumNumbers(nums: MathFunctionsParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers( { n1:1, n2:2} ))

function multiplyNumbers(nums: MathFunctionsParams) {
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionsParams = {
    n1: 5,
    n2: 10,
}
console.log(multiplyNumbers(someNumbers))

//narrowing (utilizada na função greeting)
// chegagem tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O numero é" ${info}`)
        return
    }
    console.log("Não foi passado um número")
}
doSomething(5)
doSomething(true)

//generics

function showArraysItems<T>(arr: T[]) {
    arr.forEach((items) => {
        console.log(`ITEM:" ${items}`)
    })
}
const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

showArraysItems(a1)
showArraysItems(a2)

//classes

class User {
    name
    role
    isAproved

    constructor(name: string, role: string, isAproved: boolean) {
        this.name = name
        this.role = role
        this.isAproved = isAproved
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }
    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`Idade do usuário é: ${this.role}`)
            return
        }
        console.log("Informação restrita")
    }
}

const carlos = new User("Carlos", "Admin", true)

console.log(carlos)

carlos.showUserName()
carlos.showUserRole(false)

// interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {

    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(` A marca do carro é: ${this.brand}`)
    }
}
const fusca =  new Car("W", 4)
fusca.showBrand()

//heranças

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand()

//decorators
// constructor decorator
function BaseParamters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {

        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}
@BaseParamters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}
 const sam =  new Person ("sam")
 console.log(sam)


 