// console.log("1");
//
// const p = Promise.resolve(() => {
//     console.log("2");
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
//

//que:

//////////////////////////////////////////////////////////////

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

//que:
//////////////////////////////////////////////////////////////

// setTimeout(() => console.log(1), 0)
//
// const p = Promise.resolve()
//     .then(() => console.log(2))
//     .finally(() => console.log(3));
//
// console.log(4);
//
// p.then(() => console.log(5));
//
// const p2 = new Promise((resolve) => {
//     console.log(6);
//     resolve();
// }).then(() => console.log(7));

//que:


// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.resolve().then(() => console.log(3)).then(() => console.log(33)).then(() => console.log(333));
//
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
//
// Promise.resolve().then(() => console.log(5)).then(() => console.log(10)).then(() => console.log(11));
//
// setTimeout(() => console.log(6));
//
// console.log(7);

//que:

//////////////////////////////////////////////////////////////

// function makeSomething() {
//     return Promise.resolve(1);
// }
// function makeSomethingElse() {
//     console.log('!!!!!!!!!!')
//     return Promise.resolve(2);
// }
// function makeError() {
//     return Promise.reject('err');
// }
//
// makeSomething()
//     .then((res) => {
//         console.log('first then', res);
//         return makeError();
//     })
//     .then(res => {
//         console.log('second then', res);
//         return makeSomethingElse();
//     })
//     .catch(err => {
//         console.log('catch', err); //
//     })
//     .then((res) => {
//         console.log('third then', res);
//         return makeSomething();
//     })
//     .finally((res) => {
//         console.log('finally', res);
//         return makeSomethingElse();
//     })
//     .then((res) => {
//         console.log('last then', res);
//     })
//

//////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////

// console.log('start')
//
// setTimeout(() => console.log('timeout'), 0)
//
// new Promise((resolve,reject) => {
//     console.log('promise constructor')
//
//     reject()
// }).then(() => console.log('promise'))
//     .catch(() => console.log('promise1'))
//     .catch(() => console.log('promise2'))
//     .then(() => console.log('promise3'))
//     .then(() => console.log('promise4'))
//
// console.log('final')

//////////////////////////////////////////////////////////////

// function print(){
//     console.log(1)
// }
//
// async function foo(){
//     console.log(2)
//
//     await print()
//
//     console.log(3)
// }
//
// console.log(4)
// foo()
// console.log(5)

//////////////////////////////////////////////////////////////

// console.log(1)
// setTimeout(() => console.log(2),0 )
// new Promise(resolve => {
//     console.log(3)
//     resolve()
// })
//     .then(() => console.log(4))
//     .then(() => console.log(8))
// console.log(5)

//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////
