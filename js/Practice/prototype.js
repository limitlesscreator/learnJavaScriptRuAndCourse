// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// alert( rabbit.jumps ); // ? (1)
//
// delete rabbit.jumps;
//
// alert( rabbit.jumps ); // ? (2)
//
// delete animal.jumps;
//
// alert( rabbit.jumps ); // ? (3)

// -------------------------------------------------------------------------------------

// Объект rabbit наследует от объекта animal.
//
//     Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
// let animal = {
//     eat() {
//         this.full = true;
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat();
// console.log(rabbit)



// -------------------------------------------------------------------------------------

// class Samurai {
//     constructor(name) {
//         this.name = name
//     }
//     hello(){alert(this.name)}
// }
//
// let shogun = new Samurai('Random')
// console.log(shogun.__proto__.__proto__) // ? Object
// console.dir(shogun.__proto__.constructor.__proto__) // ?
// console.log(shogun.__proto__.constructor.__proto__.__proto__) // ?

// -------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////

// function Foo() {
//     return 2;
// }
//
// let foo = new Foo();
// console.log(foo.__proto__);

/////////////////////////////////////////////////////////////////

// console.log(Function.prototype); //
// console.log(Function.prototype === Function.__proto__);
// console.log(Function.prototype === function () {}.__proto__);
// console.log(Function.prototype === {}.toString.__proto__);
// console.log(Object.prototype === {}.__proto__);

/////////////////////////////////////////////////////////////////

// function Person(name) {
//     this.name = name;
// }
//
// Person.prototype.getName = function () {
//     return this.name;
// };
//
// function SomePerson(name, surname) {
//     Person.prototype.constructor(name);
//     this.surname = surname;
// }
//
// SomePerson.prototype = Object.create(Person.prototype);
// SomePerson.prototype.constructor = SomePerson;
//
// SomePerson.prototype.getName = function () {
//     return Person.prototype.getName.call(this) + ' ' + this.surname;
// };
//
// const some = new SomePerson('Jack', 'Johnson');
// console.log(some.getName());

/////////////////////////////////////////////////////////////////

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     getName() {
//         return this.name;
//     }
// }
//
// class SomePerson extends Person {
//     constructor(name, surname) {
//         super(name);
//         this.surname = surname;
//     }
//
//     getName() {
//         return super.getName() + ' ' + this.surname;
//     }
// }
//
// const some1 = new SomePerson('Jack', 'Daniels');
// console.log(some1.getName());

/////////////////////////////////////////////////////////////////
// let user = {
//     name: "John",
//     surname: "Smith",
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
//
// let admin = {
//     __proto__: user,
//     isAdmin: true
// };
//
//
// admin.fullName = "Alice Cooper"; //
// console.log(user)
// console.log(admin)

// answer https://learn.javascript.ru/prototype-inheritance
/////////////////////////////////////////////////////////////////

// // методы animal
// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             alert(`I walk`);
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     }
// };
//
// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// };
//
//
// rabbit.sleep();
//
// alert(rabbit.isSleeping);
// alert(animal.isSleeping);

/////////////////////////////////////////////////////////////////

// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// console.log( rabbit.jumps ); // ? (1)
//
// delete rabbit.jumps;
//
// console.log( rabbit.jumps ); // ? (2)
//
// delete animal.jumps;
//
// console.log( rabbit.jumps ); // ? (3)

/////////////////////////////////////////////////////////////////

// let animal = {
//     eat() {
//         this.full = true;
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat();

/////////////////////////////////////////////////////////////////
