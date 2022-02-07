// 'use strict'
// // Scopes in js
//
// {// block scope
//     {
//         var a = 'block'
//     }
//     console.log(a)
//
//     for (var i = 0; i < 5; i += 1) {
//         console.log(i)
//     }
//     console.log(i) //5 cause bellow is var
// }
//
// // What is variable hoisting
//
// function foo() {
//     console.log(a)
//     var a = 1
// }
// foo()
// // finished what is varriable hosting 3, 2:13

// have skipped 5 8 9 10 11 15 16 17 18 19 21 22 23 24 25 27
// interestion 16 23 25
//upgrade - 1m, 2m, 4canBeTernar,

// kates for Andersen
// 1.
{
    const opposite = number => -number
}
// 2.
{
    const basicOp = (operation, value1, value2) => {
        switch (operation) {
            case '+':
                return value1 + value2;
            case '-':
                return value1 - value2;
            case '/':
                return value1 / value2;
            case '*':
                return value1 * value2;
            default:
                console.log('something wrong, try again')
        }
    }
    basicOp('+', 4, 7)
    basicOp('-', 15, 18);
    basicOp('*', 5, 5)
    basicOp('/', 49, 7)
}
// 3.
{
    const printArray = array => array.join(',')
}
//4.
{
    const rentalCarCost = days => {
        switch (true) {
            case (days >= 1 && days <= 2):
                return days * 40
            case (days >= 3 && days <= 6):
                return (days * 40) - 20
            case (days >= 7):
                return (days * 40) - 50
            default:
                console.log('something wrong, try again:)')
        }
    }
}
//5.
{
    const getMiddle = s => {
        let middle = s.length / 2

        if (s.length % 2 === 0) return s.substring(middle - 1, middle + 1)
        else return s.substring(middle, middle + 1)
    }
    // const getMiddle = s => {
    //   return s.length % 2 === 0 ? s.substring(s.length/2-1,s.length/2+1) : s.substring(s.length/2, s.length/2+1)
    // }
}

//6. (7)
{
    const array = (arr) => {
        if (arr.trim().split(',').length >= 3) {
            let newStr = arr.split(',')
            return newStr.slice(1, -1).join(' ')
        } else return null
    }
}

//7. (12)
{
    function createFunctions(n) {
        let callbacks = [];
        for (let i = 0; i < n; i++) {
            callbacks.push(function () {
                return i;
            });
        }
        return callbacks;
    }

    let callbacks = createFunctions(5)
    console.log(callbacks[3])
}
//8 (13)
{
    // return a function that returns n
    const always = (n) => () => n


//                        N
//                      E
//                    /
//                  S
//          _E_R__/
//        D
//      /
//  A_N

}
// 9 (14)

const createSecretHolder = (secret) => {
    return {
        andersenSecret : secret,
        getSecret: function () {
            return this.andersenSecret
        },
        setSecret: function (value) {
            this.andersenSecret = value
        }
    }
}
obj = createSecretHolder(5)
console.log(obj)
console.log(obj.getSecret())
obj.setSecret(2)
console.log(obj)


// 10 (20) // problems with nodes

{
    let str = ''

    function createMessage(andersen) {
        if (!!andersen) {
            str += ` ${andersen}`
            return this.createMessage
        } else {
            return str.trimLeft()
        }
    }

    let result = createMessage("Hello")("World!")("how")("are")("you?")()
    console.log(result)
}
// console.log(obj.getSecret())
console.clear()

//11 (26)
{
    var numbers = [1, 2, 3, 4, 5];
    Array.prototype.square = function(){
        return this.map(el => el * el)
    }
    Array.prototype.cube = function(){
        return this.map(el => el * el * el)
    }
    Array.prototype.average = function(){
        return this.reduce((acc,curr) => acc + curr, 0) / this.length
    }
    Array.prototype.sum = function(){
        return this.reduce((acc,curr) => acc + curr, 0)
    }
    Array.prototype.even = function(){
        return this.filter(num => !(num % 2))
    }
    Array.prototype.odd = function(){
        return this.filter(num => (num % 2))
    }
    console.log(numbers.square())//, [1, 4, 9, 16, 25]
    console.log(numbers.average())//, [1, 4, 9, 16, 25]
    console.log(numbers.even())//, [1, 4, 9, 16, 25]
    console.log(numbers.odd())//, [1, 4, 9, 16, 25]
}
// 12 (28)

console.clear()

{
    function digital_root(n) {
        while (String(n).length > 1) {
            n = `${String(n).split('').reduce((acc, curr) => +curr + acc, 0)}`
            console.log(n)
        }
        return +n
    }

    digital_root(456)
}

console.clear()

// 13 (29)
{
    class Animal {
        constructor(name, age, legs, species, status) {
            this.name = name;
            this.age = age;
            this.legs = legs;
            this.species = species;
            this.status = status;
        }

        introduce() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }

    class Shark extends Animal {
        constructor(name, age, status) {
            super(name, age, status)
            this.legs = 0
            this.species = 'shark'
            this.status = status
        }
    }

    class Cat extends Animal {
        constructor(name, age, status) {
            super(name, age, status)
            this.legs = 4
            this.species = 'cat'
            this.status = status
        }
    }

    Cat.prototype.introduce = function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }

    class Dog extends Animal {
        constructor(name, age, status, master) {
            super(name, age, status, master)
            this.master = master
            this.legs = 4
            this.species = 'dog'
            this.status = status

        }

        greetMater() {
            return `Hello ${this.master}`
        }
    }

    Dog.prototype.greetMater = function () {
        return `Hello ${this.master}`
    }
    var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
    console.log(doug)
}

console.clear()

// 14 30!
class Cuboid {
    constructor(length, width, height){
        this.length = length
        this.width = width
        this.height = height
    }
    get surfaceArea(){
        return (2 *this.length*this.width) + (2 * this.length * this.height) + (2 * this.width * this.height)
    }
    get volume(){
        return this.length * this.width * this.height
    }
}
class Cube extends Cuboid {
    constructor(length){
        super(length)
        this.length = length
        this.width = length
        this.height = length
    }
}
var cuboid = new Cuboid(1, 2, 3);
console.log(cuboid.volume, 6)