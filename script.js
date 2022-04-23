//home work #1
const makeObjectDeepCopy = (obj) => {
    let outObject, value, key

    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj
    }

    outObject = {}

    for (key in obj) {
        value = obj[key]
        outObject[key] = makeObjectDeepCopy(value)
    }

    return outObject
}

let testObj = {
    first: 1,
    second: 2,
    third: {num1: 1, num2: 2},
    fourth: {num3: 3, num4: 4},
    fifth: {
        testObjOne: {num4: 4},
        testObjTwo: { test: 8}
    },
}

console.log(testObj)
let result = makeObjectDeepCopy(testObj)


testObj.fifth.testObjOne.num4 = 10
testObj.fifth.testObjTwo.test = 10

console.log('check')
console.log(testObj)
console.log(result)

// console.log(testObj.fifth.testObjOne.num4)