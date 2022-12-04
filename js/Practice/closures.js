// const square = () => number ** 2;
// const number = 5;
//
// console.log(square())

////////////////////////////////////////////////////////////////////

// const square = () => number * 2;
//
// let number = 5;
// console.log(square()) //
//
// number = 3;
// console.log(square()) //

////////////////////////////////////////////////////////////////////

// let name = "John";
//
// function sayHi() {
//     alert("Hi, " + name);
// }
//
// name = "Pete";
//
// sayHi(); // what will it show: "John" or "Pete"?

////////////////////////////////////////////////////////////////////

// let phrase = "Hello";
//
// if (true) {
//     let user = "John";
//
//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
// }
//
// sayHi();

////////////////////////////////////////////////////////////////////

// var a = {}
// function clear(a){
//     a.b = 2
//     delete a
// }
// clear(a)
//
// console.log(a)
// console.log(a.b)

////////////////////////////////////////////////////////////////////

// var c = 1;
//
// function a(func) {
//     var c = 2;
//
//     func();
// }
//
// function b() {
//     console.log(c);
// }
//
// a(b); //

////////////////////////here is difference///////////////////////////////////////

// function a(func) {
//     var c = 2;
//
//     func();
// }
//
// function b() {
//     console.log(c);
// }
//
// a(b); //

////////////////////////////////////////////////////////////////////


// const obj = {
//     name: 'here',
//     getName() {
//         return this.name
//     },
//     getName2: () => {
//         return this.name
//     }
// }
//
// console.log(obj.getName()) //
// console.log(obj.getName2()) //
//
// const fn = (cb) => cb()
// console.log(fn(obj.getName)) //


////////////////////////////////////////////////////////////////////


// let x = 1
//
// const foo = () => {
//     console.log(x)
// }
//
// const bar = () => {
//     console.log(x)
//     let x = 1
//     foo()
// }
//
// bar()



///////////////////////PART 2///////////////////////PART 2///////////////////////PART 2///////////////////////PART 2


// const message = 'message'
//
// function logMessage() {
//     console.log(message)
// }
//
// function a(){
//     const message = 'second_message'
//     logMessage()
// }
// a()

///////////////////////////////////////////////////////////////
// if (true) {
//     apples = 10;
//     console.log(apples);
// }
//
// console.log(apples);

///////////////////////////////////////////////////////////////

// if (true) {
//     let apples = 10;
//
//     console.log(apples);
// }
// console.log(apples);

///////////////////////////////////////////////////////////////

// let apples = 5;
// if (true) {
//     let apples = 10;
//     console.log(apples);
// }
// console.log(apples);

///////////////////////////////////////////////////////////////

// var surname = 'Petr'
//
// let user = {
//     surname: 'Иванов',
//     show: function () {
//         console.log('Фамилия', this.surname);
//     }
// };

// setTimeout(() => user.show(),5) //

// setTimeout(user.show,5) //

///////////////////////////////////////////////////////////////

// var surname = 'Denis'
//
// let user = {
//     surname: 'Иванов',
//     show: function () {
//         console.log('Фамилия', this.surname);
//     }
// };
//
// let answer = user.show
//
// answer()


///////////////////////////////////////////////////////////////

// const a = 3
// const obj = {
//     a: 1,
//     getA() { return this.a }
// }
// const { getA } = obj
//
// console.log(getA()) //
// console.log(obj.getA()) //
// console.log(getA.call(obj)) //


///////////////////////////////////////////////////////////////

// var a = {
//     firstName: 'Bill',
//     lastName: 'Ivanov',
//     sayName: function(){
//         return this.firstName
//     },
//     sayLastName: () => {
//         return this.lastName
//     }
// }
//
//
// console.log(`1 ${a.sayName()}`)
//
// var b = a.sayName
// console.log(`2 ${b()}`)
//
// let newName = a.sayName.bind({firstName: 'Boris'})
//
// console.log(`3 ${a.sayName()}`)
// console.log(`4 ${a.sayLastName()}`)
// console.log(`5 ${newName()}`)
///////////////////////////////////////////////////////////////

// var b = function (){
//     return this.name
// }
// console.log(window)
// console.log(`1 ${b()}`)

///////////////////////////////////////////////////////////////

// let name = 'Sanya'
// const obj = {
//     name: 'Vova',
//     newObj: {
//         name: 'Petya',
//         sayName:() => {
//             console.log(`name: ${this.name}`)
//         }
//     }
// }
//
// obj.newObj.sayName()
///////////////////////////////////////////////////////////////

// class Man{
//     constructor() {
//         this.name = 'Vasya'
//     }
//     sayNameF(){
//         console.log(this.name)
//     }
//     sayNameArrow = () => {
//         console.log(this.name)
//     }
// }
//
// let man = new Man()
// man.sayNameF() //
// man.sayNameArrow() //

///////////////////////////////////////////////////////////////