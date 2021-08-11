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
clear()

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.
function mergeArrays(a, b) {
    let result = []
    if (a.length >= b.length) {
        for (let i = 0; i < a.length; i++) {

            if (a[i] === undefined) {
            } else {
                result.push(a[i])
            }

            if (b[i] === undefined) {
            } else {
                result.push(b[i])

            }

        }
    } else {
        for (let i = 0; i <= b.length; i++) {

            if (a[i] === undefined) {
            } else {
                result.push(a[i])
            }

            if (b[i] === undefined) {
            } else {
                result.push(b[i])

            }

        }
    }
    console.log(result)
}

// mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])//, [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
mergeArrays([66, 88, 75], ['w', 'd', 't', 'j', 'b'])//, [66, \'w\', 88, \'d\', 75, \'t\', \'j\', \'b\']

// Write a function called "filterEvenLengthWords".
//     Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
function filterEvenLengthWords(words) {
    return words.filter(el => el.length % 2 === 0)
}

{
    // const arr = [-3, 8, 67, 32, 5, 101];
    // let num = arr.find((el, i) => el > 30 && el % 2 && i > 1);
    // console.log(num)
    const arr = [1, 2, -3, 6, -5, 0];
    let num = arr.find(el => el > 30);
    console.log(num); // undefined; нет элемента
}

// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
//     Examples: [1, -1, 2, -2, 3] => 3
clear()

function solve(arr) {
    let mainResult
    let resultMinus
    let resultPlus
    let find
    for (let i = 0; i < arr.length; i++) {
        find = arr[i]
        resultMinus = arr.find((n, index) => n === -find)
        resultPlus = arr.find((n, index) => n === find)
        if (resultMinus === undefined) {
            mainResult = resultPlus;
            break
        } else if (resultPlus === undefined) {
            mainResult = resultMinus;
            break
        }
        console.log(resultMinus, resultPlus)
        console.log(`-------------------------`)
    }
    console.log(mainResult)

};

solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])// -38

// Дан массив чисел arr. Необходимо вернуть новый массив, в котором будут содержаться только повторяющиеся в исходном массиве элементы (дубликаты).
const findDublicates = (arr) => {
    const duplicates = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
    console.log(duplicates); // [-1, 2, 0, 2, 7, 7, 7, -1, 0]
}
findDublicates([-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4])

// Дан массив чисел arr. Вернуть новый массив, в котором будут содержаться только уникальные значения элементов (у этих элементов нет дубликатов в массиве).

{
    const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
    const nonDuplicates = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
    console.log(nonDuplicates);
}


