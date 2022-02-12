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
            function checkOther(){
                console.log(this)
                this.moo = 1 // moo is of asim2
                console.log(this)
            }
            checkOther()
        },
        checkOther(){
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