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
//
//
//que:

//////////////////////////////////////////////////////////////
//
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

//
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

//
//que:

//////////////////////////////////////////////////////////////

// const one = () => Promise.resolve('One!')
//
//     console.log('In function!')// async function myFunc(){
//     const res = await one()
//     console.log(res)
// }
//
// console.log('Before function')
// myFunc()
// console.log('After function!')

//
//que:

//////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////

// function makeSomething() {
//     return Promise.resolve(1);
// }
// function makeSomethingElse() {
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