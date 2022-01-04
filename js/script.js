'use strict'
function clear(){
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

const Person = function(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
}

const jonas = new Person('Jonas', 1991)
console.log(jonas)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}