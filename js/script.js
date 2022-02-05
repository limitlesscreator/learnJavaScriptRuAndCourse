// Symbols date type

console.log(Symbol('hm'))

const firstSymbol = Symbol()
const secondSymbol = Symbol()
console.log(firstSymbol === secondSymbol) // false, they are have own unique values

// a symbol value may be used as an identifier for object properties

let user = {
    id: 9451,
    name: 'Dominique',
    city: 'Siena',
    age: 59
}

const idSym = Symbol('id')
const idSym2 = Symbol('id')
user[idSym] = 8437821
user[idSym2] = 33333

console.log(user)
console.log(Object.getOwnPropertyNames(user))
console.log(Object.getOwnPropertySymbols(user))

//we can create not unique symbols

const notUniqueSymbol_1 = Symbol.for('cat')
const notUniqueSymbol_2 = Symbol.for('cat')

console.log(notUniqueSymbol_1 === notUniqueSymbol_2) // true

const RED = Symbol('red')
const ORANGE = Symbol('orange')
const YELLOW = Symbol('yellow')
const BLUE = Symbol('blue')
const cat = 'blue'

function getThreatLevel(color) {
    switch (color) {
        case RED:
            return 'severe'
        case ORANGE:
            return 'high'
        case YELLOW:
            return 'elevated'
        case BLUE:
            return 'low'
        default:
            console.log(`I don't know that color!`)
    }
}

console.log(getThreatLevel(cat))

console.clear()

const length = Symbol('length')

class Train {
    constructor() {
        this[length] = 0
    }

    add(car, contents) {
        this[car] = contents
        this[length]++
    }

    showLength() {
        console.log(this[length])
    }
}

let freightTrain = new Train()
freightTrain.add('refrigerator car', 'cattle')
freightTrain.add('flat car', 'aircraft parts')
freightTrain.add('tank car', 'milk')
for (let car in freightTrain) {
    console.log(car, freightTrain[car])
}
console.log(Object.getOwnPropertySymbols(freightTrain))
freightTrain.showLength()

console.clear()

// Repeat Objects_Prototypes Classes

let cat2 = {
    length: 0.5,
    color: 'white',
    age: 7,
    getVoice() {
        console.log('maaau')
    }
}

cat2.getVoice()
console.log(cat2)

let c = 'test'
let b = new String('test')
console.log(typeof c)
console.log(typeof b)
b.some = '123'

console.log(b)

console.log(['a', 'b'])
console.log({0: 'a', 1: 'b', length: 2})

console.log(document.querySelector('.images'))

console.dir(document.querySelector('.images'))
console.clear()

class ModernCat {
    constructor(length, color, weight) {
        this.weight = weight
        this.color = color
        this.length = length
    }

    eat() {
        console.log(`has started eat`)
    }
}

let modernCat1 = new ModernCat(0.5, 'black', '5kg')

console.log(modernCat1)

// old syntax
{
    let animal = {
        year: 10
    }

    let dog = {
        color: 'black'
    }


    dog.__proto__ = animal

    console.log(dog.year)
}

// new syntax
{
    class Animal {
        constructor(age) {
            this.year = age
        }
    }

    class Cat extends Animal {
        constructor(age) {
            super(age) // Вызов родительского конструктора
            this.color = 'black'
        }
    }

    const cat = new Cat(5)
    console.log(cat)

    class Tiger extends Cat {
        constructor(age) {
            super(age)
            this.stripers = 'long'
        }
    }

    let tiger = new Tiger(2)
    console.log(tiger)
    console.log(['a', 'b', 'c'].indexOf('b'))
    console.dir(Array)

    let getElements = document.querySelectorAll('.button') //.indexOf('button.button') error because
    // above is returning an Array with NodeList
    console.log(getElements)
}

console.clear()

// new Function
let func = new Function('console.log(`test`)')
console.log(func(1, 2))

//closures
let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";
sayHi()

function makeWorker() {
    let name = "Pete";

    return function () {
        alert(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();
// if we call work, it's going be an error

// Not strict mode
function newCode() {
    'use strict'
    // Strict mode
}

{
    var let = 1 // no error without strict mode
    console.log(let)
}

console.clear()

function sum(a, b, ...arg) {
    // console.log(arguments.slice(1))  Error because prototype is Object class:D
    console.log(Array.prototype.slice.call(arguments, 0))
    console.log(arguments)
    return a + b
}

sum(1, 2, 3, 4, 5)


console.log(typeof NaN) // number lmao
console.log(NaN === NaN) // false