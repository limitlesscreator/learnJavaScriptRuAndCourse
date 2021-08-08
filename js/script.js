function clear() {
    console.clear()
}

// window.addEventListener("DOMContentLoaded",() => {
//     function req(){
//         const request = new XMLHttpRequest()
//         request.open("GET", "https://jsonplaceholder.typicode.com/")
//         request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//         request.send();
//         request.addEventListener("readystatechange", function (){
//             if (request.readyState === 4 && request.status === 200){
//                 let data = JSON.parse(request.response)
//                 console.log(data)
//             }
//             else {
//                 console.error("Something is going wrong  ")
//             }
//         })
//     }
//     req()
// })
// console.log("Request data...")
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(("Preparing data..."))
//         const backendData = {
//             server: "aws",
//             port: 2000,
//             status: "working"
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//             // consol.log("Data received", back)
//         })
//     })
//
//     p2.then(clientData => {
//         console.log("Data received", clientData)
//     })
// {
//     const arr = [1, -2, 3, -4, 5, -7, 0];
//
//     function negative(num) {
//         return num <= 0;
//     }
//
//     const arr2 = arr.filter(el => el <= 0);
//     const arr3 = arr.filter(negative);
//     const arr4 = arr.filter(function (el) {
//         return el <= 0;
//     });
//     // For every good kata idea there seem to be quite a few bad ones!
//     // In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
//     // If there are no good ideas, as is often the case, return 'Fail!'.
// }

function well(x) {
    let newResult = x.filter(e => e === 'good')
    if (newResult.length === 0) {
        return "Fail!"
    } else if (newResult.length > 0 && newResult.length < 3) {
        return 'Publish!'
    } else if (newResult.length > 2) {
        return 'I smell a series!'
    }
}

well(['bad', 'bad', 'bad'])// 'Fail!')
well(['good', 'bad', 'bad', 'bad', 'bad'])//, 'Publish!')

// || function well(x){
//     let newResult = x.filter(e => e === 'good')
//     return newResult.length === 0 ? 'Fail!' : newResult.length > 0 && newResult.length< 3 ? 'Publish!' : 'I smell a series!'
// }

// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
let filterLucky = x => {
    let newResult = x.filter(e => String(e).split('').includes("7"))
    console.log(newResult)
}
filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])// [7,70,17]

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.
function mergeArrays(a, b) {
    let result = []
    if (a.length >= b.length){
        for (let i = 0; i < a.length; i++){

                result.push(b[i])

                result.push(a[i])
        }
    }
    console.log(result)
}

mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])//, [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
// dont work yet, but i'll be fix it))
// a little have headache
// 150
