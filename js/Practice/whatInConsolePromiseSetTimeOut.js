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
{
    answer: '1 5 2 name 4 3'
}

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
//
{
    answer: '3 4 2 5 1'
}
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

{
    answer: '4 6 2 7 3 5 1'
}

//////////////////////////////////////////////////////////////

// const one = () => Promise.resolve('One!')
//
// async function myFunc(){
//     console.log('In function!')
//     const res = await one()
//     console.log(res)
// }
//
// console.log('Before function')
// myFunc()
// console.log('After function!')

{
    answer: 'Before function! In function! AfterFunction! One! '
}

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

{
    answer: '1 7 3 5 33 10 333 11 2 6 4'
}

//macro que: 6 4