// let data = localStorage.getItem('adress')
// console.log(data)
// localStorage.setItem('weather', '30')
// console.log(localStorage)
//
// localStorage.removeItem('weather')
// console.log(localStorage)
//
// // localStorage.clear()
// console.log(localStorage)
//
//
// function setData(text){
//     console.log('changed')
//     localStorage.setItem('login',`${text}`)
//     console.log(localStorage)
// }
//
// let input = document.getElementById('logInput')
// input.value = localStorage.getItem('login')
// console.log()
//
// input.addEventListener('change', () => setData(input.value))
//
// window.addEventListener('storage', () => console.log('storage changed'))


// document.cookie = 'username=John Doe; expires=Mon, 11 Jul 2022 14:25:00 UTC'
// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=John; expires=" + date;
// console.log(document.cookie)
//
//
// document.cookie = 'surName=Voloshenko; max-age=360; secure'

// function random(){
//      b = 3
// }
//
// random()
//
// console.log(b)


// const response = new Promise((resolve,reject) => {
//     reject()
// })
// response
//     .then(el => console.log('allNice'),err => console.log('something bad to happen to meeee:D'))
//

// let data = fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(res => res.json()).then(data => console.log(data))
// console.log(data)
// ...........
// async function data1(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     return await response.json()
// }
// async function data2(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
//     return await response.json()
// }
// async function data3(){
//     const response = await fetch('https://jsonplaceholerrorder.typicode23.com/todo32s/1')
//     return await response.json()
// }
//
// Promise.any([data1(), data2(), data3()]).then(el => {
//     console.log(el)
// }).catch(error => console.log('something wrong'))


// let obj = {
//     a: '1',
//     b: '2'
// }
//
// console.log(Object.fromEntries(Object.entries(obj)))
//
// let collection = document.querySelector('.testDiv')
// // let result = Array.from(collection)
//
// collection.append('lala')
//
// console.log(collection)
//
//
// let a = [1,2,[2,3],[5,3]]
//
// let result = []
//
// a.flatMap(el => {
//     result.push(el)
// })
//
// console.log(result)
//
//
// async function somehting(){
//       let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(a)
// }
// somehting()


let a = [1,2,3,4].reduce((acc, curr) => acc + curr, 0)

console.log(a)


