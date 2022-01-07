'use strict'

function clear() {
    console.clear()
}

// Object-oriented Programming

// OOP is a programming paradigm based on the concept of objects
// parading - is a style of code, 'how' we write and organize code
//
// OOP was developer with the goal of organizing code, to make it more flexible and easier to maintain
//
// 4 fundamental OOP principles:
// -----------------------------
// 1. Abstraction - ignoring or hide details that don't matter, allowing us to get an overview perspective of the thing
// we're implementing, instead of messing with details that don't really matter to our implementation.
// -----------------------------
// 2. Encapsulation - Keeping properties and methods private inside the class, so they are not accessible from outside
// the class. Some methods can be exposed as a public interface (API)
// -----------------------------
// 3. Inheritance - Making all properties and methods of a certain class available to a child class, forming a hierarchical
// relationship between classes. This allows us to reuse common logic and to model real-world relationship.
// -----------------------------
// 4. Polymorphism - A child class can overwrite a method it inherited from a parent class [it's more complex that that,
// but enough for our purposes].
// -----------------------------

// Prototypes

// Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked
// to that prototype

// example with Array
const num = [1, 2, 3]
num.map(v => v * 2)
// Array.prototype is the prototype of all array objects we create in Java Script. Therefore, all arrays
// have access to the map methods

// Constructor function and the new Operator

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

// !! never create methods inside constructor functions, if you do, it'll be bad for code performance

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const jonas = new Person('Jonas', 1991)
console.log(jonas)

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(jonas instanceof Person)
console.log(matilda)

// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

jonas.calcAge()

console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(jonas))

console.log(jonas)
// setTimeout(() => {
Person.prototype.species = 'Homo Sapiens'
// },5000)

console.log(jonas.hasOwnProperty('species'))
console.log(jonas.hasOwnProperty('firstName'))
console.log(jonas.__proto__.__proto__ === Object.prototype)

console.dir(Person.prototype.constructor)

const arr = [3, 6, 4, 5, 6, 9, 3, 3]
console.log(arr.__proto__ === Array.prototype)

Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique())
console.dir(x => x + 1)

function Car(mark, speed) {
    this.mark = mark
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed += 10
    console.log(this.speed)
}

Car.prototype.brake = function () {
    this.speed -= 5
    console.log(`${this.mark} is going at ${this.speed} km/h`)
}

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)

car1.accelerate()
car1.accelerate()
car2.brake()
console.log(car1)
console.log(car2)
// function changeColor(){
//     this.style.color = 'white'
// }
// const button = document.querySelector('.buy')
// // const button2 = document.querySelector('.poll')
// const click1 = button.ad dEventListener('click',() => changeColor.call(button))
clear()

// 197 ES6 Classes

//Class declaration

class PersonCl {
    constructor(fullName, birthName) {
        this.fullName = fullName
        this.birthName = birthName
    }

    // the methods will be in prototype of the objects ( not on the abjects) which is great))))))) Bruno Simon*
    calcAge() {
        console.log(2037 - this.birthName)
    }

    greet() {
        console.log(`Hey ${this.fullName}`)
    }

    get age() {
        return 2037 - this.birthName
    }

    set fullName(name) {
        console.log(name)
        if (name.trim().includes(' ')) this._fullName = name
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName
    }
}

const jessica = new PersonCl('Jessica Davis', 1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.age)

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.fullName}`)
}

// Classes are not hoisted
// Classes are first-class citizes
// Classes are executed in a strict mode

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },
    set latest(mov) {
        this.movements.push(mov)
    }
}

console.log(account.latest)
account.latest = 50
console.log(account.movements)

const walter = new PersonCl('Walter Walson', 1965)

// Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },
    init(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }
}

const steven = Object.create(PersonProto)
steven.birthYear = 2002
steven.name = 'Steven'
steven.calcAge()

const sarah = Object.create(PersonProto)
sarah.init('Sarah Roley', 1999)
console.log(sarah)

class newCar {
    constructor(speed, mark) {
        this.speed = speed
        this.mark = mark
    }

    accelerate() {
        this.speed += 10
    }

    brake() {
        this.speed -= 5
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(val) {
        this.speed = val * 1.6
    }
}

const lamborghini = new newCar(283, 'lamborghini')
console.log(lamborghini.accelerate())
console.log(lamborghini.speedUS)
console.log(lamborghini.speedUS = 320)

// Inheritance between 'classes and constructor functions'

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    this.course = course
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science ')
console.log(mike)
mike.introduce()
mike.calcAge()
console.log(mike instanceof Student)
console.log(mike instanceof Person)
Student.prototype.constructor = Student


console.dir(Student.prototype.constructor)
clear()


console.dir(Car)

const EV = function (mark, speed, charge) {
    Car.call(this, mark, speed)
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype)

const car3 = new EV('Tesla', 304, 150)
console.log(car3)

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
}

// Polymorphism
EV.prototype.accelerate = function () {
    this.speed += 20
    this.charge = this.charge * 0.99
    console.log(`${this.mark} going at ${this.speed} km/h, with a charge of ${this.charge}%`)
}
car3.chargeBattery(90)
car3.brake()
car3.accelerate()
car3.chargeBattery(100)
car3.accelerate()
console.log(car3)
console.dir(Car)

