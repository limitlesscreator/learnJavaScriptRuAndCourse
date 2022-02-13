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


// 210