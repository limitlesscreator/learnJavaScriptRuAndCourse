// reviewing a lot of stuff by reading the book (bellow)

// The JavaScript interview Workbook: 400 Coding exercises book
//"For the things we have to learn before we can do them, we learn by doing them." - Aristotle

// ECMA stands for European Computer Manufacturer's Association

//V8 is Chrome's Javascript engine

// To check browser support for a particular ES feature: https://www.caniuse.com/
// Transpile ES6 to backward compatible version: https://www.babeljs.io/

// There are four types of variable scope. These are global, local, block, lexical scope.

// Global scope
function x() {

}

function localScope() {
    // Local/Function scope
}

{
    // Block scope
    if (true) {
        //Block scope
    }
}

// var one = 1 // is global and can be accessed from inside consoleOne

function consoleOne() {
    if (one) {
        console.log(one)
    }
}

// consoleOne()

function num() {
    var two = 2
    console.log(two) //2
}

// console.log(two) // ReferenceError
// var does not have block scope, it has function scope

// Variables declared with the let keyword have a block level scope and they are inaccessible outside the block
{
    let zoo = 'giraffe'
    console.log(zoo)
}
// console.log(zoo) // ReferenceError


// Const also has block scope, but it's unchanged

{
    //Lexical scoping
    const num = 10

    function firstFunc() {
        console.log(1 + num)
    }

    function secondFunc() {
        const num = 3
        firstFunc()
    }

    secondFunc()
}

// we can re-assign and re-declare var
var love = 'Chuggli'
var love = 'Muggli'
love = 'Rockster'
console.log(love)

// but let can be re-declare only outside of their current scope
{
    let apple = 'apple: 1'
    console.log(apple)
}
let apple = 'apple: 2'
console.log(apple)

//const can't be re-assigment
// but you can however change the value of a property belonging to an object has declared with the const

const user = {
    name: "example-1",
    age: 100
}
user.name = "example-2"
console.log(user.name)

// JS is loosely typing

// MDN - stands for Mozilla Developers Network
// Objects: Objects Array Functions

// Reference vs Primitive Values

// --------------------------------------------------------------------------------------------------
// Primitive Values stored on the stack, it's a type of memory which can be accessed really quick and
// which is very limited it doesn't hold much information and it doesn't have much space
//
// Reference values stored are on the HEAP - it's a different kind of place unlike the stack the heap
// takes a little of bit longer to be accessed but therefore it is able to hold much more information
// --------------------------------------------------------------------------------------------------

// Objects's variables doesn't actually contain the value
// it's receives the address/the location of itself

// if we want to see are there properties the same we can do this

let a = {
    name: 'Vova'
}

let b = {
    name: 'Vova'
}

console.log(JSON.stringify(a) === JSON.stringify(b)) // going be true
