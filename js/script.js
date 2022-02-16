//Scopes

//Block scope bellow
{
    let a = 'block'
    {
        console.log(a)
    }
}

// console.log(a) gonna be is not defined

// What is variable hoisting
{
    console.log(a)
    var a = 1
}
{
    // var foo
    // foo() foo is not a function cuz hosting

    let foo = function () {
        console.log('test')
    }
}

// What is the scope chain
{
    let myvar = 1

    function goo() {
        function foo() {
            console.log(myvar)
        }

        foo()
    }

    goo()
}
// Function closures
{
    function sayHello(name) {
        let text = 'Hello ' + name
        return function () {
            console.log(text)
        }
    }

    let sayAsim = sayHello('Asim')
    sayAsim()

    let foo = []
    for (let i = 0; i < 10; i++) {
        foo[i] = function () {
            return i
        }
    }
    console.log(foo[1]())
    console.log(foo[2]())
    console.log(foo[3]())
}

// Destructuring
{
    const obj = {first: 'Asim', last: 'Hussain', age: 42}
    // const f = obj.first
    // const l = obj.last
    // const {first: f, last: l} = obj
    // console.log(f)
    // console.log(l)
    const {first, last} = obj
    console.log(first, last)

    const arr = ['a', 'b']
    const [x, y] = arr
    // const x = arr[0]
    // const y = arr[1]
    console.log(x)
    console.log(y)
}

// difference ways of loop ways

// the first one simplest
{
    let array = [1, 2, 3]

    for (let i = 0; i < array.length; i++) {
        console.log(`1st ${array[i]}`)
        continue;
        console.log('2nd', array[i])
    }
// second forEach
    array.forEach(el => console.log(el))

// third for in

    let obj = {a: 1, b: 2}
    // or
    let arr = [10, 20, 30]
    for (let key in arr) {
        console.log(arr[key])
    }

// fourth for of

    for (let value of array) {
        console.log(value)
        console.log(typeof value)
    }
}
console.clear()

// repeating this key word
{
    console.log(this)

    this.asim = 1

    console.log(this.asim)
    console.log(window.asim)
    console.log(asim)

    function checkThis() {
        console.log(this) // global window
    }

    let asim2 = {
        checkThis() {
            // 'use strict' // mode helps us do not declare on 135  line
            console.log(this)

            function checkOther() {
                console.log(this)
                this.moo = 1 // moo is of asim2
                console.log(this)
            }

            checkOther()
        },
        checkOther() {
            console.log(window.moo) // undefined
        }
    }
    asim2.checkThis()
    // both of them are the same
    console.log(asim2)

    let func = asim2.checkThis
    func() // gonna be window
    asim2.checkOther()
    asim2.checkThis()

}

console.clear()

// Function composition

const compose = (a, b, c) => data => a(b(c(data))) // right to left

const multBy3 = (num) => num * 3

const multBy4 = num => num * 4

const multBy5 = num => num * 5


const getNumber = compose(multBy5, multBy4, multBy3)

console.log(getNumber(1))

const add2 = x => x + 2
const subtract1 = x => x - 1
const multiplyBy5 = x => x * 5

const result = multiplyBy5(subtract1(add2(4)))
console.log(result)

{
    const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val)

    const compResult = compose(multiplyBy5, subtract1, add2)(4)
    console.log(compResult)

    // To do the same but read left to right we use 'pipe'.
    // It is the same except uses reduce instead of reduceRight.

    const pipe = (...fns) => val => fns.reduce((prev, fn) => fn(prev), val)
    const pipeResult = pipe(add2, subtract1, multiplyBy5)(2)
    console.log(pipeResult)

    const splitOnSpace = (str) => str.split(' ')
    const count = arr => arr.length

    const wordCount = pipe(splitOnSpace, count)
    console.log(wordCount('lara lora lera'))

    const scoreObj = {home: 0, away: 0}
    const shallowClone = obj => Array.isArray(obj ? [...obj] : {...obj})

    const max = (a, b) => a > b ? a : b
    const max3 = (a, b, c) => max(max(a, b), c)
    console.log(max3(-100, 10, -50))

    const compose2 = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
}
console.clear()
// Closures

{
    // for (var i = 0; i < 3; i++) {
    //     // debugger
    //     const log = () => console.log(i)
    //     setTimeout(log, 100)
    // }

    // Simple Closure
    function f1(a) {
        let b = 2
        setTimeout(() => {
            console.log(a, b)
        }, 1000)
    }

    // f1(3)

    // Closure with problem
    function f2() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                console.log(i)
                console.log(new Date().getSeconds())
            }, 1000 * i)
        }
    }

    // f2()

    let f = () => {
        let i = 1
        let j = 2
        return () => {
            console.log(i)
        }
    }
    console.dir(f())
}

(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a)
    })(1)
})(0)
//0

let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1
        console.log(count)
    }
    console.log(count)
})()
// 0 1


// continue this key word
// repeating call/ apply/ bind

{
    // Functions are objects
    function asim(param1, param2) {
        console.log(this)
    }

    const testObj = {
        something: 'good'
    }
    // console.log(asim.toString())
    asim.call(testObj)

    function a(b, c, d) {
        console.log(this)
        console.log(b)
        console.log(c)
        console.log(d)
    }

    a.call(testObj, 1, 2, 3)
    // apply is the same as call, but now using []

    a.apply(testObj, [2, 3, 4])

    // example when do we need use apply
    let testData = [1, 2, 4, 1, 234, 346, 2]

    function sum() {
        let result = 0
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i]
        }
        return result
    }

    console.log(sum.apply(null, testData))

    //bind
    const testBind = function () {
        console.log(this)
    }
    testBind.bind(1)()

    console.clear()

    // prototypes
    let animal = {
        kind: 'human'
    }
    let asim2 = {}

    asim2.__proto__ = animal
    console.log(asim2.kind)
    console.log(animal.isPrototypeOf(asim2))

    // ES6 Classes using strict mode inside
    class Person {
        _firstName = ''
        _lastName = ''

        constructor(firstName, lastName) {
            this._firstName = firstName
            this._lastName = lastName
        }

        get firstName() {
            return this.firstName
        }
    }

    let asimObj = new Person('asim', 'hussain')
    console.log(asimObj)
}

// curry and function composition
{
    const pipe = (...fnc) => x => fnc.reduce((y, f) => f(y), x)
    const add = a => b => a + b
    console.log(add(5)(2))

    const inc = add(1)
    let result = inc(3)
    console.log(result)

    const g = n => n + 1
    const f = n => n * 2
    const d = n => n / 2
    // const h = x => console.log(f(g(x)))
    // h(23)

    // const compose = (v, b) => x => v(b(x))
    // console.log(compose(g, f)(20))
    console.clear()

    const compose = (...fnc) => x => fnc.reduceRight((g, f) => f(g), x)


    // console.log(compose(g, f, d)(6))


    // if we want to debug code we should to write something like that
    const trace = label => value => {
        console.log(`${label} : ${value}`)
        return value
    }

    const h = pipe(g, trace('after g'), f, trace('after f'))
    h(20)

}

// asynchronous stuff in js
// callbacks are synchronous btw)) here is prove
{
    function doTask(cb) {
        setTimeout(cb, 0)
    }

    doTask(() => console.log(message))

    let message = 'Callback'
}
// Repeating promises
let promise = Promise.resolve('done')
promise.then(data => console.log(data))

// .finally(() => console.log('finished'))
new Promise((resolve, reject) => {
    // throw ('fail')
})
    .then(data => console.log('resolved'))
    .catch(data => console.error(`${data} rejected`))
    .catch(data => console.log(`second reject`))
    .then(() => console.log(`second then`))

const firstPromise = new Promise((resolve, reject) => {
    reject(`First 1`)
})
const secondPromise = new Promise((resolve, reject) => {
    resolve(`Second 2`)
})
const thirdPromise = new Promise((resolve, reject) => {
    reject(`Third 3`)
})
Promise.any([firstPromise, secondPromise, thirdPromise]).then(data => {
    console.log(data)
})
    .catch(() => `Error`)




