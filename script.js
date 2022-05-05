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

// repeating Symbol
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

console.clear()

const f1 = function example(){
    // console.log(f1.name)
    console.log(this.name)
}
f1()

// const f2 = function(){
//     console.log(this.name)
//     console.log(this.name)
// }
//
// f2() // 'empty string'


{
    let sayHi = function (who) {
        if (who) {
            alert(`Hello, ${who}`);
        } else {
            sayHi("Guest");
        }
    };

    let welcome = sayHi
    sayHi = null

    // welcome() // Error
}

{
    let sayHi = function nice(who) {
        if (who) {
            alert(`Hello, ${who}`);
        } else {
            nice("Guest");
        }
    };

    let welcome = sayHi
    sayHi = null

    // welcome('Jason') // There is no Error with NFE
}
{
    // function is object
    function test(){
        return 'test'
    }
    test.something = 'random Name'
    console.log(test.something)

}

// HOF
function myBind (targetFunction, context){
    return function(){
        return targetFunction.apply(context, arguments)
    }
}

// Lexical Environment

// globalLE = {outerLE: null }

const logMessage = () => {
    // logLE = {outerLE: globalLE}
    const value = 10

    // logLE = {outerLE: globalLE, value: 10}


    const innerFn = () => {
        // innerLE = {outerLE: logLE}
        console.log(value)
    }

    // logLE = {outerLE: globalLE, value: 10, innerFn: f}

    innerFn()
    console.log(message)
}

const message = 'Lexical Environment is confusing'
const value = 5

logMessage()
