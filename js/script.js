function clear() {
    console.clear()
}

const ford = Object.create({
    calculateDistancePerYear: function () {
        console.log("Calculate")
    }
}, {
    name: {
        value: "Ford",
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: "Focus",
        enumerable: true,
        writable: false,
        configurable: false
    },

    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function () {
            console.log("Получаем возраст")
            return new Date().getFullYear() - this.year
        },
        set: function () {
            console.log("Устанавливаем значение")
        }
    }
}) //Object самый глобальный класс в JS
console.log(ford)
clear()

// Create a function with two arguments that will return an array of the first (n) multiples of (x).
function countBy(x, n) {
    let z = [];
    for (let i = x; i <= 20; i += x) {
        if (i % n !== 0) {
            z.push(i)
        } else {
            z.push(i);
            break
        }
    }
    console.log(z)
}

countBy(2, 5)//[2,4,6,8,10]

function generateIntegers(n) {
    let result = []
    for (let i = 0; i <= n; i++) {
        result.push(i)
    }
    return result
}

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit .
// If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
clear()

function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i < 10000; i += integer) {
        if (limit >= i) {
            arr.push(i)
        } else {
            break
        }
    }
    console.log(arr)
}

findMultiples(5, 25)// [5, 10, 15, 20, 25]
// Build a function that can get all the integers between two given numbers.
function range(startNum, endNum) {
    let arr = []
    for (let i = startNum + 1; i < endNum; i++) {
        arr.push(i)
    }
    return arr
};

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.
clear()

function solve(a, b) {
    let result = []
    for (let i = 0; i < b.length; i++) {
        let counterPush = 0
        for (let j = 0; j <= a.length; j++) {
            if (a[j] === b[i]) {
                counterPush++
            }
        }
        result.push(counterPush)
    }
    console.log(result)
}

solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])// [2, 1, 0])








