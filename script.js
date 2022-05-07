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

console.clear()

{
    const obj = {a: 2}

    obj[Symbol.toPrimitive] = function(hint){
        if (hint === 'string'){
            return '[custom object]'
        }
        else if(hint === 'number'){
            return '[object Num]'
        }

        return 1
    }

    console.log(String(obj))
    console.log(Number(obj))

    console.log(Array.of(7,1))
}

// console.log(Array.from(document.querySelectorAll('[value]')).pop())
// or

let elements = document.querySelectorAll('[value]')
let newResult = Array.prototype.push.call(4,elements)
console.log(elements)

// Контекст вызова функции

const obj = {
    a: 1,
    b: 2,
    print(){
        console.log(this)
    }
}

obj.print = function(){
    setTimeout(function(){
        console.log(this)
    },1000)
}

obj.print() // global obj window

const user2 = {
    firstName: 'Roman',
    closeApp(){
        console.log(`${this.firstName} has just closed the app!`)
    }
}

console.clear()
// https://habr.com/ru/company/ruvds/blog/422089/

let a = 'Hello World!'
function first() {
    console.log('Inside first function')
    second();
    console.log('Again inside first function')
}
function second() {
    console.log('Inside second function')
}
first();
console.log('Inside Global Execution Context')
// prety stuff http://jsflow.org/docs/exec-stack/

{
    // globalEnvironment
    // outer = null
    // environmentRecord = { phrase: "hi!", sayHi: function sayHi(name){...}}

    var phrase = "hi!";

    function sayHi(name) {
        // sayHiEnvironment
        // outer = globalEnvironment
        // environmentRecord = { name: "Mike", surname: undefined}

        var surname = "Tayler"

        alert(name + " " + surname + ", " + phrase)
    }

    sayHi("Mike")

    phrase = "bye!"

    console.log("End, " + phrase)
}