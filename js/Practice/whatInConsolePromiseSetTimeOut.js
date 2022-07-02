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

// setTimeout(() => console.log(1), 0)
//
// const p = Promise.resolve().then(() => console.log(2)).finally(() => console.log(3));
//
// console.log(4);
//
// p.then(() => console.log(5));
//
// const p2 = new Promise((resolve) => {
//     console.log(6);
//     resolve();
// }).then(() => console.log(7));
