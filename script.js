//save
// how it works

//
// var a = {}
// function clear(a){
//     a.b = 2
//     a = null
// }
// clear(a)
//
// console.log(a)
// console.log(a.b)
//

//////////////////////////////////////////////////////////////

// let a = {b: 1}
// let c = Object.create(a)
//
// console.log(c.b)
// delete c.b
// console.log(c.b)
// delete a.b
// console.log(c.b)
//
// a.z = 2
// console.log(c.z)
// c.z = 3
// console.log(a.z)

//////////////////////////////////////////////////////////////

// let a = {t: 10}
// let b = 10
//
// let c = a
// let d = b
//
// c.x = 9
// c = null
// d = 5
//
// console.log(a)
// console.log(b)

//////////////////////////////////////////////////////////////

// const obj = {
//     a: 10,
//     method: function f(){
//         const arrowF = () => {
//             console.log(this)
//         }
//         arrowF()
//     }
// }
//
// obj.method() //
//
// const obj2 = {a: 5}
// const obj3 = {a: 0}
//
// obj.method.call(obj2) //
//
//
// const bindedMethod = obj.method.bind(obj3)
// bindedMethod() //
//
// bindedMethod.call(obj2) //
//
// const arrowFunc = () => console.log(this)
//
// arrowFunc.call(obj2) //

//////////////////////////////////////////////////////////////

console.log('sync1')
setTimeout(() =>
        Promise.resolve(true)
            .then(() => console.log('PromiseTimeout1'))
    , 0)

setTimeout(() => console.log('Timeout1'),0)

Promise.resolve(true).then(() => console.log('Promise1'))
console.log('sync2')

// finished on 28