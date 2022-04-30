// TDZ

{
    let b = 1

    function one(b, a = b) { // has own scope
        console.log(a, b)
    }

    one(2, undefined) // 2 2
}
{
    let b = 1

    function one(a = b, b) {
        console.log(a, b)
    }

    // one(undefined, 2) // Uncaught ReferenceError
}
{
    // let x = x // Uncaught Reference Error
    // let a = f() // Uncaught Reference Error
    const b = 2

    function f() {
        return b
    }
}
{
    (function (a, b = a) {
        console.log(a,b)
    }
    (1, undefined)) // no error
}

// repeating Symbol label
const sym1 = Symbol('cat') // cat is just a label
const sym2 = Symbol('cat')
console.log(sym1 === sym2) // false
console.log(sym1)

const idSym = Symbol('id')
let user = {
    id: 9461,
    name: 'Dominique',
    city: 'Siena',
    age: 59,
    [idSym] : 9123128412
}
console.log(Object.keys(user))
console.log(Object.getOwnPropertySymbols(user))

// example with usage Symbol


const length = Symbol('length')

class Train {
    constructor() {
        this[length] = 0
    }

    add(car, contents){
        this[car] = contents
        this[length]++
    }
}

let freightTrain = new Train()
freightTrain.add('refrigerator car', 'cattle')
freightTrain.add('flat car', 'aircraft parts')
freightTrain.add('tank car', 'milk')
freightTrain.add('hopper car', 'coal')

for (let car in freightTrain){
    console.log(car, freightTrain[car]) // we are gonna get only cars without length 4
}