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

function getThreatLevel(color){
    switch (color){
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

class Train{
    constructor() {
        this[length] = 0
    }

    add(car, contents){
        this[car] = contents
        this[length]++
    }

    showLength(){
        console.log(this[length])
    }
}

let freightTrain = new Train()
freightTrain.add('refrigerator car','cattle')
freightTrain.add('flat car','aircraft parts')
freightTrain.add('tank car', 'milk')
for (let car in freightTrain){
    console.log(car, freightTrain[car])
}
console.log(Object.getOwnPropertySymbols(freightTrain))
freightTrain.showLength()
