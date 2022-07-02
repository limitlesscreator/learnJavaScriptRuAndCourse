// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// };
//
// console.log(shape.perimeter())
// console.log(shape.diameter());
//
// ////////////////////////////////////////////////////////////////////
//
//
// console.log(1);
//
// const p = Promise.resolve(() => {
//     console.log(2);
//
//     setTimeout(() => console.log("3"));
// });
//
// setTimeout(() => console.log("4"));
//
// p.then((res) => {
//     res();
//     console.log("name");
// });
//
// console.log("5");

// ////////////////////////////////////////////////////////////////////


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


// ////////////////////////////////////////////////////////////////////


// setTimeout(() => console.log(1), 0)
//
// const p = Promise.resolve().then(() => console.log(2));
//
// console.log(3);
//
// const p2 = new Promise((resolve) => {
//     console.log(4);
//     resolve();
// }).then(() => console.log(5));

////////////////////////////////////////////////////////////////////////

// var f = function() {
//     this.x = 5;
//     (function() {
//         this.x = 3;
//     })();
//     console.log(this.x);
// };
//
// var obj = {
//     x: 4,
//     m: function() {
//         console.log(this.x);
//     }
// };
//
//
// f(); // 3
// new f(); // 3
// obj.m(); // 4
// new obj.m(); // undefined
// f.call(f); // 5
// obj.m.call(f); // 5

////////////////////////////////////////////////////////////////////////
