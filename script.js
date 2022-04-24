// const makeObjectDeepCopy = obj => {
//     if(typeof(obj) !== "object") {
//         return obj;
//     }
//
//     let r = (obj instanceof Array) ? [] : {};
//     for(let i in obj) {
//         if(obj.hasOwnProperty(i)) {
//             r[i] = makeObjectDeepCopy(obj[i]);
//         }
//     }
//     return r;
// }
//
// let testObj = {
//     first: 1,
//     second: 2,
//     third: {num1: 1, num2: 2},
//     fourth: [{num3: 3, num4: 4}],
//     fifth: {
//         testObjOne: {num4: 4},
//         testObjTwo: { test: 8}
//     },
// }
//
// let obj1 = makeObjectDeepCopy(testObj)
// testObj.third.num1 = 4
// testObj.fourth[0].num3 = 5
// console.log(testObj)
// console.log(obj1)

// ------------------------------------------------------------------------------
let testArr = [-2, -15, 0, 4]


const selectFromInterval = (arr,start,end) => {
    let result = []
    let ifNumbers = [...arr,start,end].every(el => Object.prototype.toString.call(el) === '[object Number]' && !isNaN(el))

    if (!ifNumbers){
        throw new Error('Ошибка!')
    }

    let newNums = start > end ? [end, start] : [start, end]
    testArr.forEach(num => num >= newNums[0] && num <= newNums[1] && result.push(num))
    return result
}

console.log(selectFromInterval(testArr,-15, 3))

// continue homeWork2 https://astondevs.com/