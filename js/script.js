function clear() {
    console.clear()
}

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

// solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])// -38

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

// You have to write a function which returns unique numbers array. You don't need to validate input arg arr. Retain the original order of the input.
function uniqueNumbers(numbersArray) {
    console.log(numbersArray.filter((el, i) => i === numbersArray.indexOf(el)))
}

uniqueNumbers([1, 1, 2, 2, 3, 3, 3, 10, 10])
clear()

// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.
function noRepeat(str) {
    let newStr = str.split("")
    return newStr.filter(el => newStr.indexOf(el) === newStr.lastIndexOf(el))[0]
}

noRepeat("wxyz")//"w"
function fixTheMeerkat(arr) {
    return arr.reverse()
}


// 6kyu
// Write a function that will take in any array and reverse it.
//     Sounds simple doesn't it? NOTES:
//     Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let newLetter = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = newLetter
    }
    return arr
}

{
    const arr = [1, 2];
    const arr2 = [3, 4];
    const res = arr.concat(arr2); // res = [1, 2, 3, 4],
// arr объединяем с arr2 и получаем новый массив res

    const res2 = arr.concat('a', 'b'); // res2 = [1, 2, "a", "b"],
// arr объединяем со списком значений и получаем новый массив res2

    const res3 = arr.concat('cat', ['f'], arr2); // res3 = [1, 2, "cat", "f", 3, 4],
// можно одновременно объединять и массив, и значения,
}

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
function addExtra(listOfNumbers) {
    let newItem = listOfNumbers.concat(5)
    return newItem
}

// sort
{
    const arr = ['nose', 'pen', 'apple', 'eye', 'zip'];
    arr.sort(); // не нужно передавать функцию в качестве аргумента метода,
// метод сортирует элементы, как строки
    console.log(arr); // ["apple", "eye", "nose", "pen", "zip"]
}
clear()
{
    console.log('hi')
    const arr = [1, 10, 6, 160, 2, 5];
    // arr.sort(); //[1, 10, 160, 2, 5, 6]
    // arr.sort((a,b) => a - b) [1, 2, 5, 6, 10, 160]
    arr.sort((a, b) => b - a) //[160, 10, 6, 5, 2, 1]
    console.log(arr);
}

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
const twoOldestAges = ages => {
    let newAges = ages.sort((a, b) => a - b)
    return [newAges[newAges.length - 2], newAges[newAges.length - 1]]
}

twoOldestAges([1, 5, 87, 45, 8, 8])// [45,87]

console.log({}.toString.call([]))

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums) {
    if ({}.toString.call(nums) !== "[object Array]") {
        return []
    } else {
        let arr = nums.sort((a, b) => a - b)
        return arr
    }
}

solution([1, 2, 10, 50, 5]); //[1,2,5,10,50]
clear()

function longest(s1, s2) {
    let newStr = (s1 + s2).split("")
    let betterArr = newStr.filter((el, i) => i === newStr.indexOf(el))
    console.log(betterArr.sort().join(""))
}

longest("aretheyhere", "yestheyarehere") //"aehrsty"

function bigToSmall(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i])
    }
    result = result.sort((a, b) => a - b)
    console.log(result.reverse().join(">"))
}

bigToSmall([[1, 2], [3, 4], [5, 6]]) //"6>5>4>3>2>1"

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
};

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
function solve(arr) {
    let newArr = [...arr].sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(Math.max(...newArr))
            newArr.pop()
        } else if (i % 2 !== 0) {
            result.push(Math.min(...newArr))
            newArr.shift()
        }
    }
    console.log(result)
};

solve([15, 11, 10, 7, 12])//[15,7,12,10,11]
clear()

// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.
// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.
function findChildren(santasList, children) {
    let result = []

    if (santasList.length >= children.length) {
        console.log("santa")
        for (let i = 0; i < santasList.length; i++) {
            if (santasList.includes(children[i])) {
                result.push(children[i])
            }
        }
    } else {
        console.log("children")
        for (let i = 0; i < children.length; i++) {
            if (santasList.includes(children[i])) {
                result.push(children[i])
            }
        }
    }
    result = result.sort()
    console.log(result)
}

findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"])// ["Jason", "Jordan"]
// ||
// function findChildren(santasList, children) {
//     let ans = [];
//     for (let i=0; i<santasList.length; ++i)
//         for (let j=0; j<children.length; ++j)
//             if (ans.indexOf(children[j])==-1 && santasList[i]==children[j])
//                 ans.push(children[j]);
//     return ans.sort();
// }

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    let total = 0
    let result = []
    let newArr = [...arr].sort((a, b) => a - b)
    console.log(newArr)
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(Math.max(...newArr))
            newArr.pop()
        } else if (i % 2 !== 0) {
            result.push(Math.min(...newArr))
            newArr.shift()
        }
        if (result.length === 2) {
            total += result[0] * result[1]
            result = []
        }
    }
    console.log(total)
}

minSum([12, 6, 10, 26, 3, 24]) //342

clear()

// Правильная последовательность скобок

function isValid(s) {
    let arr = s.split("")
    let result
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
            stack.push(arr[i])
            arr.shift()
        }
    }
    for (let j = 0; j < stack.length; j++) {
        if (stack[j] === "(" && arr[arr.length - j - 1] === ")") {
            stack.pop()
            arr.pop()
        } else if (stack[j] === "[" && arr[arr.length - j - 1] === "]") {
            stack.pop()
            arr.pop()
        } else if (stack[j] === "{" && arr[arr.length - j - 1] === "}") {
            stack.pop()
            arr.pop()
        } else break;
    }
    if (stack.length === 0 && arr.length === 0) {
        result = true
    } else {
        result = false
    }
    console.log(result)
}

// bellow not working)
isValid("(())")

clear()

function isValidBetter(s) {
    let stack = []
    let brackets = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    for (let i = 0; i < s.length; i++) {
        const current = s[i]

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) return false;
        } else {
            stack.push(current)
        }
    }

    function isClosedBracket(ch) {
        return [")", "}", "]"].indexOf(ch) > -1
    }

    return (stack.length === 0)
}

console.log("()", isValidBetter("())"))
console.log("()[]{}", isValidBetter("()[]{}"))
console.log("(]", isValidBetter("(]"))
console.log("(]", isValidBetter("(]"))
console.log("{[]}", isValidBetter("{[]}"))
console.log("{[[]{}]}()()", isValidBetter("{[[]{}]}()()"))


// Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
    let newArr = arr.sort((a, b) => b - a)
    let sum = 0
    for (let i = 0; i < newArr.length; i++) {
        if (!!newArr[i] && !!newArr[i + 1] || arr[i] === 0 && !!newArr[i + 1] || arr[i + 1] === 0) {
            sum += newArr[i] - newArr[i + 1]
        } else break
    }
    console.log(sum)
}

sumOfDifferences([1, 0, -1, -3, 1])// 4
clear()

// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.
//     If the sum of the n largest numbers is higher, return "sum". If the product of the n smallest numbers is higher, return "product". If the 2 values are equal, return "same"
function sumOrProduct(array, n) {
    let newArr = array.sort((a, b) => b - a)
    let sum = 0
    let multiply = 1
    for (let i = 0; i < n; i++) {
        sum += newArr[i]
    }
    newArr.reverse()
    for (let j = 0; j < n; j++) {
        multiply *= newArr[j]
    }
    return sum === multiply ? "same" : sum > multiply ? "sum" : "product"
}

sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) //sum

// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. !!Your function should not mutate the input array, and this will be tested (where applicable).
// Notice that the returned list will always be of odd size, since there will always be a definitive middle element.
function mirror(data) {
    let newData = [...data]
    let result = []
    let sort = newData.sort((a, b) => a - b)
    result.push(...sort);
    sort.reverse();
    sort.shift();
    result.push(...sort)
    return (result)
}

mirror([-8, 42, 18, 0, -16]) //[-16, -8, 0, 18, 42, 18, 0, -8, -16]

// In a certain kingdom, strange mathematics is taught at school. Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, but lexicographically,
// as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.
function strangeMath(n, k) {
    const arr = [0];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr.sort().indexOf(k)
}

// join
{
    const arr = ['c', 'o', 'd', 'e'];
    console.log(arr.join()); // "c,o,d,e"
    console.log(arr.join('')); // "code"
    console.log(arr.join(' : ')); // "c : o : d : e"
    console.log(arr.join(11)); // "c11o11d11e"
    const arr2 = [undefined, 'c', 'o', 'd', 'e', null];
    console.log(arr2.join('?')); // "?c?o?d?e?", значения undefined и null стали пустыми
    {
        const arr = ['bag', 'map', 'cod', 'log', 'fa'];
        let res = arr.join('_');
        console.log(res); // "bag_map_fa"}
    }

    // Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
    function smash(words) {
        return words.join(" ")
    };

    // Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
    function buildString(...template) {
        return `I like ${template.join(', ')}!`;
    }

    // Create a function that returns the CSV representation of a two-dimensional numeric array.
    function toCsvText(array) {
        return array.join('\n')
    }

    // In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a.
    // Note that the difference may be zero!
    function arithmeticSequenceElements(a, r, n) {
        let arr = []
        let newValue = 0
        for (let i = a; newValue < n; i += r) {
            newValue++
            arr.push(i)
        }
        return arr.join(", ")
    }

    clear()
    // Given an array of ones and zeroes, convert the equivalent binary value to an integer.
    // Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
    const binaryArrayToNumber = arr => {
        arr = arr.map(el => "" + el)
        console.log(parseInt(arr.join(""), 2))
    };
    binaryArrayToNumber([1, 1, 1, 1]) //15

    // Метод every() осуществляет проверку, удовлетворяют ли все элементы массива условию, указанному в передаваемой функции.
    // Возвращает true, если все элементы отвечают условию, переданному в функцию, и false, если хотя бы один – нет.

    // Create a method all which takes to params: a sequence a function (function pointer in C)
    // and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
    function all(arr, fun) {
        return arr.every(fun)
    }

    all([1, 2, 3, 4, 5], function (v) {
        return v < 9
    })// true
    // You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.
    function validateWord(s) {
        let newS = s.split('')
        console.log(newS)
        newS.every(el => newS.indexOf(el) !== newS.indexOf(el))
    }

    validateWord("abc!abc!") //true, do not working))

    clear()

    function inAscOrder(arr) {
        console.log(arr.every((el, index) => el < arr[index + 1] || typeof arr[index + 1] === 'undefined'))
    }

    inAscOrder([1, 2, 4, 7, 19]) // true
    // You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
    function smallEnough(a, limit) {
        return a.every(el => el <= limit)
    }

    function solve(arr) {
        let result = arr.filter((el, index) => el > arr[index + 1] || arr[index + 1] === undefined)
        result = result.filter((el, index) => result.indexOf(el) === index)
        // let result = arr.filter((el,index) => arr.every(elE => elE > arr[index]))
        console.log(result)
    };
    solve([16, 17, 14, 3, 14, 5, 2])//[ 17,14,5,2])
    // Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, указанному в передаваемой функции.
    {
        const arr = [-10, -2, 0, 1, 9, 5];
        console.log(arr.some(el => el < 0)); // true
    }
    {
        const arr = [-10, -2, 2, 34, 90, 52];
        console.log(arr.some(el => el % 2)); // false
    }
    {
        const arr = [-12.59, 13.14, 19.32, -12.1, 13.9];
        console.log(arr.some(el => Math.pow(el, 2) >= 128))//true
    }

    // Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.
    function any(arr, fun) {
        return arr.some(fun)
    }

    any([1, 2, 3, 4], function (v, i) {
        return v > 3
    })//true
    any([1, 2, 3, 4], function (v, i) {
        return v > 4
    })//false
    function anyArrows(arrows) {
        return arrows.some(a => !a.damaged);
    }

    anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]) //true
    anyArrows([{range: 10, damaged: true}, {damaged: true}])// false

    // Метод forEach() выполняет переданную в него функцию один раз для каждого элемента в массиве. Работает, как цикл.
    {
        const arr = ['One', 'Two', 'Three', '!'];
        arr.forEach(el => console.log(el))
    }
    {
        // вывести в консоль значение каждого элемента (el) массива в виде: "Element №i is el", где i - индекс элемента + 1, el - значение элемента массива arr.
        const arr = ['Good', 'luck', '!!!'];
        arr.forEach((el, i) => console.log(`Element №${i + 1} is ${el}`));
    }

    function points(games) {
        let score = 0
        // games.forEach(el => console.log(`first el = ${el[0]}, second el = ${el[el.length - 1]}`))
        games.forEach(el => el[0] > el[el.length - 1] ? score += 3 : el[0] < el[el.length - 1] ? score += 0 : score += 1)
        console.log(score)
    }

    points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]) //30
    clear()

    // Метод reduce() применяет переданную в него функцию один раз для каждого элемента в порядке возрастания и возвращает одно результирующее значение.

    // Дан массив чисел arr. Вернуть сумму всех элементов массива, увеличенную на 100.
    {
        const arr = [5, 20, 30, 55];
        let result = arr.reduce((acc, curr) => acc + curr, 100); //
        console.log(result); // 210
    }
    // Дан массив чисел arr. Вернуть сумму всех элементов массива.
    {
        const arr = [1, 2, 5, 8];
        let result = arr.reduce((acc, curr) => acc + curr)
        console.log(result); // 16
    }
    //    Дан массив чисел arr. Верните произведение всех чисел массива.
    {
        const arr = [2, 5, 5, 100];
        let result = arr.reduce((acc, curr) => acc * curr, 1);
        console.log(result); // 5000
    }
    {
        const arr = [5, 3, 10, 6, 8];
        let result = arr.reduce((acc, curr) => acc + curr, 0) / arr.length
        console.log(result); // 6.4
    }
    {
        const arr1 = [-1, 5, 0, 6];
        const arr2 = [10, -10, 2, 3];
        let add1 = arr1.reduce((acc, curr) => acc + curr, 0);
        let add2 = arr2.reduce((acc, curr) => acc + curr, 0);
        let mult = add1 * add2;
        //mult 50
    }
    //длина всех желементов
    {
        const arr1 = ['year', 'day', 'week', 'weekend'];
        let result = arr1.reduce((acc, curr) => curr.length + acc, 0)
        console.log(result) //18
    }

    // Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
    function sum(numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0)
    };
    // Given an array of integers, calculate the Average of these numbers.
    // Main challenge is to write shortest and compact function for it.For example: var a = [0, 1, 2]; avg(a) // output should be 1
    // Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.
    const avg = a => a.reduce((acc, curr) => acc + curr, 0) / a.length
    clear()

    function mean(lst) {
        // let str = ""
        //
        // let sum = lst.reduce((acc, curr) =>  {
        //     if(!isNaN(curr)) {
        //         return acc + +curr
        //     } else {
        //         str = str += curr
        //         return acc
        //     }
        // }, 0)
        let result = []
        // let sum = lst.reduce((acc, curr) => !isNaN(curr) ? console.log(acc, " Number"): console.log(curr , " String"), 0)
        let sum = lst.reduce((acc, curr) => !isNaN(curr) ? +curr + acc : acc, 0)
        let str = lst.reduce((acc, curr) => isNaN(curr) ? curr + acc : acc, '')
        return [sum / 10, str.split("").reverse().join("")]
    }

    mean(lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']) //[3.6, "udiwstagwo"]

    {
        function multi(arr) {
            return arr.reduce((acc, curr) => acc * curr, 1)
        }

        function add(arr) {
            return arr.reduce((acc, curr) => acc + curr, 0)
        }

        function reverse(str) {
            return str.split("").reverse().join("");
        }
    }
    // You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.
    // Try researching about built-in Array methods; they may help shorten your code a lot
    function sumSquares(array) {
        console.log(array.reduce((acc, curr) => Math.pow(curr, 2) + acc, 0))
    }

    sumSquares([7, 3, 9, 6, 5]) //200

    // Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
    function arrayMadness(a, b) {
        let resultA = a.reduce((acc, curr) => Math.pow(curr, 2) + acc, 1)
        let resultB = b.reduce((acc, curr) => Math.pow(curr, 3) + acc, 1)
        return resultA > resultB
    }

    arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1])// false

    // An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
    function findDeletedNumber(arr, mixArr) {
        let deletion = 0
        arr.reduce((acc, curr) => mixArr.includes(curr) ? "" : deletion = curr, 0)
        return deletion
    }

    findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])// 5
    findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])// 0
    function arrayPlusArray(arr1, arr2) {
        let result1 = arr1.reduce((acc, curr) => acc + curr, 0)
        let result2 = arr2.reduce((acc, curr) => acc + curr, 0)
        return result1 + result2;
    }

    arrayPlusArray([100, 200, 300], [400, 500, 600]) //2100

    // My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
    // In honor of my grandfather's memory we will write a function using his formula!
    // Take a list of ages when each of your great-grandparent died.
    // Multiply each number by itself.
    // Add them all together.
    // Take the square root of the result.
    // Divide by two.
    function predictAge(...arg) {
        let result = arg.reduce((acc, curr) => Math.pow(curr, 2) + acc, 0)
        result = Math.trunc((Math.sqrt(result) / 2))
        return result
    }

    predictAge(65, 60, 75, 55, 60, 63, 64, 45) //86


    // Метод map() создает новый массив с результатом вызова функции для каждого элемента исходного массива.

    //Вернуть макс. площадь прямоугл.
    function maxRectangleSquare(arr) {
        let count = null
        let result = arr.map(el => el[0] * el[1] > count ? count = el[0] * el[1] : count)
        return count
    }

    {
        const arr = [1, 4, 9, 36];
        const numSquare = arr.map(el => el ** 2);
        console.log(numSquare); //[1, 16, 81, 1296]
    }
    // Дан массив десятичных чисел arr. Необходимо вернуть новый массив, содержащий элементы исходного, причем для чисел, имеющих четный индекс, произвести округление до ближайшего целого, значение остальных сделать равным 0.
    {
        const arr = [1.57, 2.1, 3.8, 10.67, 25.6];
        const nums = arr.map((el, i) => i % 2 === 0 ? Math.round(el) : 0);
        console.log(nums); // [2, 0, 4, 0, 26]
    }

    // Напишите функцию maxRectanglePerimeter, которая в качестве аргумента принимает массив arr, содержащий размеры прямоугольников, и возвращает максимальный периметр прямоугольника. Если массив пустой, вернуть null.
    function maxRectanglePerimeter(arr) {
        let count = null
        let result = arr.map(el => (el[0] + el[1]) * 2 > count ? count = (el[0] + el[1]) * 2 : count)
        return count
    }

    // These are example of how to convert a number to an ascii Character
    let ArrowFunc = function (arr) {
        return arr.map(el => String.fromCharCode(el)).join('');
    }
    // You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.
    // In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.
    // Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).
    // wtf XD
    function toFreud(string) {
        return string.length > 0 ? string.split(" ").map(el => "sex").join(" ") : ""
    }

    // Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
    function toNumberArray(stringarray) {
        return stringarray.map(el => +el)
    }

    // Метод splice() изменяет содержимое исходного массива путем удаления/замены/добавления элементов.

    // Задание 3. Удалить 2 элемента по индексу 1 и заменить их на '365' и '7'.
    {
        const arr = ['year', 'day', 'week', 'minute', 'second'];
        let removed = arr.splice(1, 2, '365', '7');
        console.log(removed); // ["day", "week"]
        console.log(arr); // ["year", "365", "7", "minute", "second"],
    }

    // Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/arra
    function take(arr, n) {
        let result = arr.splice(0, n)
        return result
    }

    take([0, 1, 2, 3, 5, 8, 13], 3) // [0, 1, 2]

    // Удалить все элементы, начиная с индекса 1.
    {
        const arr = ['year', 'day', 'week', 'minute', 'second'];
        let removed = arr.splice(1);
        console.log(removed); // ["day", "week", "minute", "second"
        console.log(arr); // ["year"]
    }
    // Метод slice() предназначен для копирования элементов массива согласно указанным индексам.

    // Дан массив строк arr. Необходимо вернуть новый массив, который бы содержал все элементы исходного массива. Затем добавить в конец получившегося массива длину исходного массива arr. Вывести значения обоих массивов в консоль.
    {
        const arr = ['raw', 'line', 'queue', 'seat'];
        let result = arr.slice()
        result.push(arr.length)
        console.log(arr) //['raw', 'line', 'queue', 'seat']
        console.log(result) //['raw', 'line', 'queue', 'seat', 4]
    }
    // Дан объект obj и массив arr. Необходимо создать новый массив, который бы включал в себя первые два элемента исходного. Затем изменить свойство name объекта obj в новом массиве на 'Elvis'. Вывести данное свойство obj каждого массива в консоль.
    {
        const obj = {
            name: 'Joey',
            age: 30,
        };
        const arr = ['person', obj, 1, 33021];
        const newArr = arr.slice(0, 2)
        obj.name = 'Sasha'
        console.log(arr, newArr, obj.name)
    }
    {
        // Дан массив чисел и строк arr. Сделать копию последних двух элементов массива и вернуть их новым массивом. Убедиться, что значение последнего элемента исходного массива строго равно значению последнего элемента нового массива.
        const arr = ['umbrella', 2, 3, 'zipper'];
        let newArr = arr.slice(-2)
        console.log(arr[arr.length - 1] === newArr[newArr.length - 1]) //true
    }
    {
        // Haskell has some useful functions for dealing with lists:
        // | HEAD | <----------- TAIL ------------> |
        // [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
        // | <----------- INIT ------------> | LAST |
        const head = (arr) => {
            let result = arr.slice(0, 1)
            return +result.join("")
        }
        const tail = (arr) => {

            return arr.slice(1)
        }
        const init = (arr) => {
            return arr.slice(0, -1)
        }
        const last = (arr) => {
            return +arr.slice(-1).join("")
        }
        head([1, 2, 3, 4, 5])// 1
        tail([1, 2, 3, 4, 5])//[2,3,4,5]
        init([1, 5, 7, 9]) //[1,5,7]
        last([7, 2])// 2
    }

    // This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces.
    // If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
    function array(arr) {
        arr = arr.split(",")
        let result = null
        if (arr.length >= 3) {
            result = arr.slice(arr.length / 2, arr.length / 2 + 1)[0]
        }
        return result
    }

    array('')// null
    array('1, 3')// null
    array('1,2,3')// '2'
    // || function array(arr){
    //     return arr.split(",").slice(1,-1).join(" ") || null;
    // }

    // Coding in function cutIt, function accept 1 parameter:arr. arr is a string array. The first mission: Traversing arr, find the shortest string length.
    // The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
    function cutIt(arr) {
        let result = []
        let shortest = arr[0].length
        arr.forEach(el => el.length < shortest ? shortest = el.length : 0)
        arr.forEach(el => result.push(el.slice(0, shortest)))
        return result
    }

    cutIt(["ab", "cde", "fgh"]) // ["ab","cd","fg"]
    cutIt(["abc", "defgh", "ijklmn"]) // ["abc","def","ijk"]
    cutIt(["codewars", "javascript", "java"]) // ["code","java","java"]

    function withoutLast(arr) {
        let result = arr.slice(0, -1)
        return result
    }

    {
        let str = 'Hi';
        let str2 = 'John';
        console.log(`${str}, ${str2}!`); // "Hi, John!"

    }
    {
        let str = 'Bench'; //
        str[2] = 'a';
        console.log(str); // "Bench" – строка осталась неизменной
    }
    // Your task is to return the correct string using the Template String Feature.
    let TempleStrings = function (obj, feature) {
        return obj + " are " + feature
    }

    // Finish the uefaEuro2016() function so it return string just like in the examples below:
    function uefaEuro2016(teams, scores) {
        let result
        if (scores[0] === scores[1]) {
            result = `At match ${teams[0]} - ${teams[1]}, teams played draw.`
        } else if (scores[0] > scores[1]) {
            result = `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
        } else {
            result = `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
        }
        return result
    }

    uefaEuro2016(['Germany', 'Ukraine'], [2, 0]) //"At match Germany - Ukraine, Germany won!"

    function isValidBetter(s) {
        let result = false
        let stack = []
        let brackets = {
            ')': '(',
            ']': '[',
            '}': '{',
        }

        for (let i = 0; i < s.length; i++) {
            let curr = s[i]
            if (isClose(curr)) {
                if (brackets[curr] !== stack.pop()) return false
            } else {
                stack.push(curr)
            }
        }
        return stack.length === 0

        function isClose(curr) {
            return [')', ']', '}'].includes(curr)
        }
    }

    isValidBetter('()')

    function greet(name) {
        if (name === "Johnny") {
            return "Hello, my love!";
        } else {
            return "Hello, " + name + "!";
        }
    }

    const combineNames = (a, b) => `${a} ${b}`

    let a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N",
        n2 = "n"

    function Dad() {
        //select some variable to combine "Dad"
        return d1 + a2 + d2;
    }

    function Bee() {
        //select some variable to combine "Bee"
        return b1 + e2 + e2;
    }

    function banana() {
        //select some variable to combine "banana"
        return b2 + a2 + n2 + a2 + n2 + a2;
    }

    function joinStrings(string1, string2) {
        return `${string1} ${string2}`
    }

    function derive(coefficient, exponent) {
        return `${coefficient * exponent}x^${exponent - 1}`
    }

    derive(7, 8)//, "56x^7"
    derive(5, 9)// "45x^8"

    const countSheep = function (num) {
        let result = []
        for (let i = 1; i <= num; i++) {
            result.push(`${i} sheep...`)
        }

        return result.join('')
    }
    countSheep(3) // "1 sheep...2 sheep...3 sheep..."

    {
        let str = 'Great idea';
        console.log(str[0]); // "G"
        console.log(str.charAt(0)); // "G"
    }
    console.log("a".codePointAt(0)); // 97
    console.log(String.fromCodePoint(97)); // "a"
    // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
    function solution(a, b) {
        return `${b.length > a.length ? a : b}${b.length < a.length ? a : b}${b.length > a.length ? a : b}`
    }

    function digitsOfNumber(num) {
        return String(num).length
    }

    function insertSpaces(str) {
        return str.split('').join(' ')
    }

    function getCharacter(str, n) {
        return str[n] ? str[n] : 'Error'
    }

    // Write a function which takes a number and returns the corresponding ASCII char for that value.
    function getChar(c) {
        return String.fromCodePoint(c)
    }

    getChar(59)//';'
    getChar(56)//'8'

    // For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune
    function correctTail(body, tail) {
        let sub = body.substr(body.length - (tail.length))
        return sub === tail
    }

    correctTail("Fox", "x")// true
    correctTail("Meerkat", "t")// true

    function switcher(x) {
        const alphabet = [" ", "?", "!", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map(el => el.toLowerCase()).reverse();
        let result = []
        for (let i = 0; i < x.length; i++) {
            result.push(alphabet[x[i] - 1])
        }
        return result.join('')
    }

    switcher(['24', '12', '23', '22', '4', '26', '9', '8'])// 'codewars')
    switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'])//'btswmdsbd kkw
    switcher(['4', '24'])// 'wc')

    // You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
    // You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:
    function catMouse(x) {
        let result = x.split('').filter(el => el === ".")
        return result.length <= 3 ? 'Caught!' : 'Escaped!'
    }

    catMouse('C....m')// "Escaped!")
    catMouse('C..m') //"Caught!")
    catMouse('C.....m')// "Escaped!")
    clear()

    // Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
    function digits(n) {
        return String(n).split('').length
    }

    // Write a function that always returns 5/ Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
    function unusualFive() {
        return 'hello'.length
    }

    // Create an algorithm to count the number of zeros that appear between 1 and N.
    function countZeros(n) {
        let count = 0
        for (let i = 0; i <= n; i += 10) {
            let zeroes = String(i).split('').filter(el => el === '0').length
            count += zeroes
        }
        count--
        console.log(count)
    }

    countZeros(100)


    // Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
    function getSumOfDigits(integer) {
        return integer.toString().split('').reduce((acc, cur) => +cur + acc, 0)
    }

    getSumOfDigits(123)// 6

    function doubleChar(str) {
        let result = []
        str = str.split('')
        for (let i = 0; i < str.length; i++) {
            result.push(str[i])
            result.push(str[i])
        }
        return result.join('')
    }

    doubleChar("illuminati"), "iilllluummiinnaattii"

    class Animal {
        constructor(options) {
            this.name = options.name
            this.age = options.age
            this.hasTail = options.hasTail
        }
    }

    const animal = new Animal({
        name: 'Animal',
        age: 5,
        hasTail: true
    })

    // Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
    // E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

    function tripleTrouble(one, two, three) {
        let temp = (one + two + three).length
        let result = []
        for (let i = 0; i < temp; i++) {
            result.push(one[i])
            result.push(two[i])
            result.push(three[i])
        }
        return result.join('')
    }

    // Modify the spacify function so that it returns the given string with spaces inserted between each character.

    const spacify = str => str.split('').join(' ')
    spacify('hello world')// 'h e l l o   w o r l d'
    spacify('12345')// '1 2 3 4 5'

    function validParentheses(str) {
        let left = 0
        let right = 0
        let result = false
        let temp = str.split('')
        for (let i = 0; i < temp.length; i++) {
            if (temp.every(el => el === '(' || el === ')')) {
                if (temp[0] === '(') {
                    if (temp[i] === '(') {
                        left++
                    } else if (temp[i] === ')') {
                        right++
                    }
                }
                if (temp[0] === ')' || temp[temp.length - 1] === '(') {
                    result = false;
                    break
                }
                result = left === right
            }
        }
        return result
    }

    validParentheses('()') //true
    validParentheses('()()(())') //true
    validParentheses(')((()') //false

    // Write function that checks if a given string (case insensitive) is a palindrome.
    function isPalindrome(x) {
        return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
    }

    isPalindrome("Abba") // true

    //Write function that checks if a given string (case insensitive) is a palindrome. WITHOUT REVERSE AND SPLIT
    function isPalindrome1(word) {
        let result = ''
        for (let i = word.length - 1; i >= 0; i--) {
            result += word[i]
        }
        return result === word
    }

    isPalindrome1('aba')

    //Reverse without reverse()
    function reverseWord(word) {
        let result = ''
        for (let i = word.length - 1; i >= 0; i--) {
            result += word[i]
        }
        return result
    }

    // how much polidrom
    function countPalindrome(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            let temp = ''
            for (let j = arr[i].length - 1; j >= 0; j--) {
                temp += arr[i][j]
            }
            if (temp === arr[i]) {
                result++
            }
        }
        return result
    }

    countPalindrome(['abc', 'dad', 'noon']) //2

    //count '!' at end str
    function exclamationMarks(str) {
        let temp = str.split('').reverse()
        let result = 0
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === '!') {
                result++
            } else break
        }
        return result
    }

    exclamationMarks('Hi! What a nice day!!') //2

    // Напишите функцию с именем isPalindrome, которая принимает строку str в качестве аргумента и возвращает true, если строка является палиндромом после удаления из нее всех пробелов и false - в противном случае.
//     Во всех тестах строки содержат лишь строчные (lowerCase) буквы, поэтому не волнуйтесь из-за регистра. В решении используйте циклы. Использование методов split, reverse, replace запрещено.
    function isPalindrome(str) {
        let newWord = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== ' ') {
                newWord += str[i]
            }
        }

        let result = ''
        for (let i = newWord.length - 1; i >= 0; i--) {
            result += newWord[i]
        }
        return result === newWord
    }

    isPalindrome('pull up if i pull up') //true
    isPalindrome("every moment is life") //false

    // Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
    // Note: There is no newline in the end (after the pattern ends)
    function pattern(n) {
        let output = '1\n';
        let strStars = '*'
        for (let i = 1; i < n; i++) {
            if (i < n - 1) {
                output += `1${strStars}${i + 1}\n`
                strStars += '*'
            } else {
                output += `1${strStars}${i + 1}`
                strStars += '*'
            }
        }
        console.log(output)
    }

    pattern(3)// "1\n1*2\n1**3"

    // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
    function XO(str) {
        let x = 0
        let o = 0
        str = str.toLowerCase().split('')
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'o') {
                o++
            } else if (str[i] === 'x') {
                x++
            }
        }
        return x === o
    }

    XO("xxOo") // true
    XO("ooom") //false

    // Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
    // Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
    function hello(name) {
        if (name) {
            let firstLetter = name.split('')[0].toUpperCase()
            name = name.toLowerCase().split('')
            name.shift()
            name.unshift(firstLetter)
            return `Hello, ${name.join('')}!`
        } else return 'Hello, World!'
    }

    hello('johN') //'Hello, John!', "returns 'Hello, John!' when given 'johN'
    hello() // 'Hello, World!'
    hello('alice') //'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'

    // In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
    // make as few changes as possible.
    // if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
    function solve1(s) {
        let result
        let big = 0
        let small = 0
        let arr = s.split('')
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i].toUpperCase()) {
                big++
            } else if (arr[i] === arr[i].toLowerCase()) {
                small++
            }
        }
        if (small >= big) {
            result = s.toLowerCase()
        } else {
            result = s.toUpperCase()
        }
        return result
    }

    solve1("CODe") //"CODE"

    // Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
    let capitals = function (word) {
        let result = []
        let arr = word.split('')
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i].toUpperCase()) {
                result.push(i)
            }
        }
        return result
    };

    capitals('CodEWaRs') //[0,3,4,6]

    // Given a string, swap the case for each of the letters.
    // e.g. CodEwArs --> cODeWaRS


    function testit(s) {
        if (s.length) {
            let result = []
            let arr = s.split(' ')
            for (let i = 0; i < arr.length; i++) {
                let newLetter = arr[i][arr[i].length - 1].toUpperCase()
                let newStr = arr[i].split('').slice(0, -1).join('') + newLetter
                result.push(newStr)
            }
            return result.join(' ')
        } else return ''

    }

    testit('kjkph nyjww lod k') //'kjkpH nyjwW loD K'
    testit('oj ijgfr ewh d zje') //'oJ ijgfR ewH D zjE'

    function capitalizeWord(word) {
        word = word.split('')
        let result = word[0].toUpperCase();
        word[0] = result
        return word.join('');
    }

    capitalizeWord('glasswear') // Word

    function lowerOrUpperCase(letter) {
        if (letter === letter.toLowerCase()) {
            return 'The letter is in Lowercase'
        } else return 'The letter is in Uppercase'
    }

    function isNameStartsWithUpper(name) {
        let temp = name.split('')[0]
        if (temp === temp.toUpperCase()) {
            return 'Welcome, sir'
        } else return 'Howdy'
    }

    isNameStartsWithUpper('Alex') //Welcome, sir
    isNameStartsWithUpper('lora') //Howdy

    // Coding in function fiveLine, function accept 1 parameter:s. s is a string.
    // Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;
    function fiveLine(s) {
        let result = ''
        let temp = s.trim()
        for (let i = 0; i < 5; i++) {
            if (i !== 4) {
                for (let j = 0; j <= i; j++) {
                    result += `${temp}`
                }
                result += '\n'
            } else {
                for (let j = 0; j <= i; j++) {
                    result += `${temp}`
                }
            }
        }
        return result
    }

    fiveLine("  a")// "a\naa\naaa\naaaa\naaaaa"

    // Метод padStart(length, otherStr) дополняет текущую строку другой строкой до заданной длины и возвращает ее значение.
    {
        let str = 'Fish';
        str.padStart(7, 'new');  // "newFish если нужно, значение otherStr повторяется
        str.padStart(8);         // "    Fish"
        str.padStart(3, 'new'); // "Fish"
        str.padStart(6, 'new'); // "neFish"
    }

    // This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).
    // If the input is 0 or negative value, then you should return "00:00"
    // Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.
    function timeConvert(num) {
        if (num > 0) {
            let time = [0, 0]

            let result
            for (let i = 0; i < 10000; i++) {
                if (num >= 60) {
                    time[0]++
                    num -= 60
                }
            }
            time[1] = num
            if (time[0] <= 9 && time[1] <= 9) {
                result = `0${time[0]}:0${time[1]}`
            } else if (time[0] > 9 && time[1] <= 9) {
                result = `${time[0]}:0${time[1]}`
            } else if (time[0] <= 9 && time[1] > 9) {
                result = `0${time[0]}:${time[1]}`
            } else if (time[0] > 9 && time[1] > 9) {
                result = `${time[0]}:${time[1]}`
            }
            return result
        } else return '00:00'
    }

    timeConvert(0)// '00:00'
    timeConvert(8) // '00:08'
    timeConvert(134) // '02:34'

    //or
    const timeConvert2 = num => num > 0 ? `${(Math.floor(num / 60) + '').padStart(2, '0')}:${(num % 60 + '').padStart(2, '0')}` : `00:00`

    // Метод repeat() возвращает новую строку с указанным количеством повторений первоначальной строки.
    {
        let str = 'You';
        console.log(str.repeat(3)); // "YouYouYou"
        console.log(str.repeat(1)); // "You"
        console.log(str.repeat(1.5)); // "You"
        console.log(str.repeat(0)); // ""
        // console.log(str.repeat(Infinity)); // RangeError
        // console.log(str.repeat(-1)); // RangeError
    }

    // Напишите функцию с именем repeatWord, которая принимает слово word в качестве аргумента и возвращает строку, содержащую слово, повторенное столько раз, сколько букв содержит это слово. Слова раделяйте пробелами. После последнего слова пробела нет.
    function repeatWord(word) {
        let count = word.split('').length
        let result = word.repeat(count)
        let temp = count
        result = result.split('')

        for (let i = 0; i < count; i++) {
            result.splice(temp, 0, ' ')
            temp += count + 1
        }
        result.pop()
        result = result.join('')
        return result
    }

    repeatWord("a") //"a"
    repeatWord("One") //"One One One"
    repeatWord('Five') //"Five Five Five Five"

    function spam(number) {
        return "hue".repeat(number);
    }

    // Напишите функцию с именем validPassword, которая принимает строку password в качестве аргумента и возвращает строку, дополненную символами "$" справа, если пароль имеет длину менее 7 символов, или исходную строку, если пароль имеет длину 7 и более символов.
    function validPassword(password) {
        let lengthPassword = password.length
        if (lengthPassword >= 7) {
            return password
        } else {
            let dollar = '$'.repeat(7 - lengthPassword)
            password += dollar
        }
        return password
    }

    validPassword("Null") // 'Null$$$'
    validPassword("abc") //"abc$$$$"
    validPassword("verybigpassword385848") //"verybigpassword385848"

    // write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
    // the string should start with a 1.a string with size 6 should return :'101010'. with size 4 should return : '1010'.
    function stringy(size) {
        let result = ''
        if (size % 2 === 1) {
            result = '10'.repeat(size / 2 + 1).split('')
            result.pop()
            result = result.join('')
        } else {
            result = '10'.repeat(size / 2)
        }
        return result
    }

    stringy(5) //10101
    stringy(6) //101010
    stringy(1) //1

    // Mr. despair jumped from the 2 floor, the voice is "Aa~"
    // He fell on the ground, the voice is "Pa!"
    // He did not die immediately, and the final voice was "Aa!"
    function sc(floor) {
        let str = []
        if (floor > 1) {
            for (let i = 0; i < floor; i++) {
                str.push('Aa~')
            }
            if (floor <= 6) {
                str.unshift('Aa~')
                str[str.length - 2] = 'Pa!'
                str[str.length - 1] = 'Aa!'
            } else if (floor > 6) {
                str[str.length - 1] = 'Pa!'
            }
            str = str.join(' ')
        } else {
            return ''
        }
        return str
    }

    sc(6)// "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
    sc(10)//"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

    // You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
    // You can not use multiplier "*" operator. If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
    function billboard(name, price = 30) {
        let str = name.split('').length
        let newStr = `${price} `.repeat(str)
        let result = newStr.split(' ').reduce((acc, curr) => +curr + acc, 0)
        return result
    }

    billboard("Jeong-Ho Aristotelis")// 600
    billboard("Hadufuns John", 20)// 260
    billboard("Werner Vígi", 15)// 165
    // Метод includes(otherStr, index) проверяет, содержит ли текущая строка другую строку.

    {
        let str = 'Did you notice the notes?';
        console.log(str.includes('you')); // true
        console.log(str.includes('not', 9)); // true
        console.log(str.includes('not', 20)); // false
        console.log(str.includes('did')); // false
    }

    // that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
    function vowel2index(str) {
        let result
        let temp = str.split('')
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].includes('i') || temp[i].includes('a') || temp[i].includes('o') || temp[i].includes('u') || temp[i].includes('e') ||
                temp[i].includes('I') || temp[i].includes('A') || temp[i].includes('O') || temp[i].includes('U') || temp[i].includes('E')) {
                temp[i] = i + 1
            }
        }
        result = temp.join('')
        return result
    }

    vowel2index('this is my string')//  'th3s 6s my str15ng'
    vowel2index('Codewars is the best site in the world')// 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
    vowel2index('')// ''

    // Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:
    function letterCheck(arr) {
        let b = arr.map(el => el.toLowerCase())
        let result = false
        let newArr = b[1].split('')
        for (let i = 0; i < 100; i++) {
            if (b[0].includes(newArr[i]) || typeof newArr[i] === 'undefined') {
                result = true
            } else {
                result = false
                break
            }
        }
        return (result)
    }

    letterCheck(["trances", "nectar"])// true
    letterCheck(["THE EYES", "they see"])// true
    letterCheck(["dale", "caller"])// false

    // Given a string of words and numbers. Extract the expression including: the operator: either addition or subtraction the two numbers that we are operating on. Return the result of the calculation.
    // "Panda has 48 apples and loses 4" returns 44"Jerry has 34 apples and gains 6" returns 40 "loses" and "gains" are the only two words describing operators.
    function calculate(string) {
        let arr = string.split(' ')
        let result = 0
        let arrNumbers = []
        for (let i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                arrNumbers.push(+arr[i])
            }
        }
        if (string.includes('loses')) {
            result = arrNumbers[0] - arrNumbers[1]
        } else if (string.includes('gains')) {
            result = arrNumbers[0] + arrNumbers[1]
        }
        return result
    }

    calculate("Panda has 48 apples and loses 4")// 44
    calculate("Jerry has 34 apples and gains 6")// 40

    function sabb(s, val, happiness) {
        let result = 0
        let temp = 0
        let newStr = s.split('')
        let secondStr = 'sabticl'.split('')
        for (let i = 0; i < newStr.length; i++) {
            for (let j = 0; j < secondStr.length; j++) {
                if (newStr[i] === secondStr[j]) {
                    temp++
                }
            }
        }
        result = val + happiness + temp
        return result > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
    }

    sabb('What do you mean I cant learn to code??', 8, 9)// 'Sabbatical! Boom!'
    sabb('Please calm down', 9, 1)// 'Back to your desk, boy.'

    const mispelled = (word1, word2) => {
        let firstArr = word1.split('')
        let secondArr = word2.split('')
        let count = 0
        if (firstArr.length >= secondArr.length) {
            for (let i = 0; i < firstArr.length; i++) {
                if (!word1.includes(secondArr[i])) {
                    count++
                } else if (!word2.includes(secondArr[i])) {
                    count++
                }
            }
        } else if (firstArr.length < secondArr.length) {
            for (let i = 0; i < secondArr.length; i++) {
                if (!word2.includes(firstArr[i])) {
                    count++
                } else if (!word2.includes(firstArr[i])) {
                    count++
                }
            }
        }
        return count === 1
    }
    mispelled('versed', 'xersed')// true
    mispelled('1versed', 'versed')// true
    mispelled('versed', 'aaversed')// false

    // Напишите функцию с именем luckyChineseNumber, которая принимает массив numbers в качестве аргумента и возвращает массив счастливых для китайцев чисел, т.е. чисел, содержащих цифру 8.
    function luckyChineseNumber(numbers) {
        let result = []
        let newArr = numbers.map(el => '' + el)
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].includes('8')) {
                result.push(+newArr[i])
            }
        }
        return result
    }

    luckyChineseNumber([124, 18, 13, 8, 81, 182, 11])//[18, 8, 81, 182]

    // Метод indexOf() возвращает индекс первого вхождения подстроки в строке.
    {
        let str = 'A turtle is on the beach.';
        console.log(str.indexOf('turtle', 2)); // 2
        console.log(str.indexOf('turtle')); // 2
        console.log(str.indexOf('turtle', 3)); // -1
        let str2 = 'Buy bread and milk';
        console.log(str2.indexOf('milk') !== -1); // true
        console.log(str2.indexOf('butter') !== -1); // false
    }

    function findEvenIndex(arr) {
        let result = -1
        let tempt = !!arr[-1]
        for (let i = 0; i < arr.length; i++) {
            if (!!arr[i - 1] && !!arr[i - 2]) {
                if (Math.abs(arr[i - 1] + arr[i - 2]) === Math.abs(arr[i + 1] + arr[i + 2])) {
                    result = i
                    break;
                }
            } else if (!arr[i - 2] && !!arr[i - 1]) {
                if (Math.abs(arr[i - 1]) === Math.abs(arr[i + 1] + arr[i + 2])) {
                    result = i
                    break
                }
            }
        }
        return result
    }

    findEvenIndex([1, 2, 3, 4, 3, 2, 1]) //3
    findEvenIndex([1, 100, 50, -51, 1, 1])//1

    // function tickets(peopleInLine){
    //     debugger
    //     let ownCash = 0
    //     for (let i = 0; i < peopleInLine.length; i++) {
    //         if (peopleInLine[i] === 25) {
    //             ownCash += 25
    //         } else if (peopleInLine[i] === 50 && ownCash - 25 >= 0) {
    //             ownCash += 50
    //             ownCash -= 25
    //         } else if (peopleInLine[i] === 100 && ownCash - 75 >= 0) {
    //             ownCash += 100
    //             ownCash -= 75
    //         }
    //         else {
    //             ownCash = -100000
    //             break
    //         }
    //         if (ownCash < 0){
    //             break
    //         }
    //     }
    //     let result = ownCash >= 0
    // } dos'nt work

    // tickets([25, 100]) //NO
    // tickets( [25,50,25,100,25,50,25,100,25,25,50,100,25,25,50,100]) //YES

    function findMissingLetter(array) {
        let result = ''
        let alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let alphabet2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map(el => el.toUpperCase())


        if (array[0] === array[0].toUpperCase()) {
            //if array UPPERCASE
            let indexLetter = alphabet2.indexOf(array[0])

            for (let i = 0; i < array.length; i++) {
                if (array[i] === alphabet2[indexLetter + i]) {
                    continue
                } else if (array[i] !== alphabet2[indexLetter + i]) {
                    result += alphabet2[indexLetter + i]
                    break
                }
            }
        } else if (array[0] !== array[0].toUpperCase()) {

            let indexLetter = alphabet1.indexOf(array[0])

            for (let i = 0; i < array.length; i++) {
                if (array[i] === alphabet1[indexLetter + i]) {
                    continue
                } else if (array[i] !== alphabet1[indexLetter + i]) {
                    result += alphabet1[indexLetter + i]
                    break
                }
            }
        }
        return result
    }


// findMissingLetter(['a','b','c','d','f'])//'e'
    findMissingLetter(['O', 'Q', 'R', 'S'])// 'P'

}

// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
function tripleX(str) {
    let arr = str.split('')
    let result = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x' && arr[i + 1] === 'x') {
            result = true
            break
        }
        if (arr[i] === 'x' && arr[i + 1] !== 'x') {
            result = false
            break
        }
    }
    return result
}

tripleX("abraxxxas") //true
tripleX("xoxotrololololololoxxx")//false

// When provided with a letter, return its position in the alphabet.
// Input :: "a"// Ouput :: "Position of alphabet: 1" // This kata is meant for beginners. Rank and upvote to bring it out of beta
function position(letter) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}

// If　a = 1, b = 2, c = 3 ... z = 26. Then l + o + v + e = 54. and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice stronger than love :-). The input will always be in lowercase and never be empty.
function wordsToMarks(string) {
    let alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = 0
    let arr = string.split('')
    arr.forEach(el => result += alphabet.indexOf(el))
    return result
}

wordsToMarks("attitude")// 100
wordsToMarks("family")// 66

// Метод lastIndexOf() возвращает индекс последнего вхождения подстроки в строке.
{
    let str = 'banana';
    console.log(str.lastIndexOf('a'));    // 5
    console.log(str.lastIndexOf('a', 4)); // 3
    console.log(str.lastIndexOf('a', 3)); // 3
    console.log(str.lastIndexOf('a', 2)); // 1
    console.log(str.lastIndexOf('a', 0)); // -1
}

// Метод startsWith() позволяет определить, начинается ли текущая строка с другой подстроки.

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
function validateCode(code) {
    return `${code}`.startsWith(`1`) || `${code}`.startsWith(`2`) || `${code}`.startsWith(`3`)
}

validateCode(23)// true
validateCode(523)// false

// Метод endsWith() проверяет, заканчивается ли текущая строка символами другой строки
{
    let str = 'Create tests for the given api.';
    str.endsWith('.'); // true
    str.endsWith('api'); // false
    str.endsWith(' ', 7); // true
    str.endsWith('the', 20); // true
    str.endsWith('Api', 30); // false
    str.endsWith('api', 30); // true
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution1(str, ending) {
    return str.endsWith(ending)
}

solution1('abcde', 'cde')// true
solution1('abcde', 'abc')// false

// While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems.
//     So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_". without filter

function searchNames(logins) {
    let result = []
    for (let i = 0; i < logins.length; i++) {
        if (logins[i][0].endsWith('_')) {
            result.push(logins[i])
        }
    }
    return result
}

// withFilter
function searchNames(logins) {
    let result = logins.filter(el => el[0].endsWith('_'))
    return result
}

searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]) //[ "foo", "foo@foo.com" ]

// Метод substring() возвращает подстроку между двумя индексами.
{
    let str = 'Thanksgiving';
    console.log(str.substring(0, 6)); // "Thanks"
    console.log(str.substring(-1, 2)); // "Th"
    console.log(str.substring(0)); // "Thanksgiving"
    console.log(str.substring(0, 30)); // "Thanksgiving"
    console.log(str.substring(str.length - 3)); // "ing", возвращены 3 последние символа строки
    console.log(str.substring(4, 4)); // ""
    console.log(str.substring(str.length - 5)); // "iving", возвращены 5 последних символов стр
}
// Метод slice() извлекает подстроку между индексами и возвращает ее значение.

{
    let str = 'destination';
    console.log(str.slice(0, 5)); // "desti"
    console.log(str.slice(2, 4)); // "st"
    console.log(str.slice(2, 2)); // "", возвращена пустая строка
    console.log(str.slice(5)); // "nation"
    console.log(str.slice(-6)); // "nation"
    console.log(str.slice(-3)); // "ion"
    console.log(str.slice(-3, -1)) // "io"
}

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
const greet = function (name) {
    let result = `Hello ${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}!`
    return result
};
greet('riley')// 'Hello Riley!'

// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."
//     If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

function trim(arr, size) {
    let result
    if (arr.length < 3) {
        result = arr.slice(0, size) + '...'
    } else if (arr.length >= 3 && arr.length <= size) {
        result = arr
    } else {
        result = arr.slice(0, size - 3) + '...'
    }
    return result
}

trim("Creating kata is fun", 14)//,"Creating ka...")
trim("He", 1)//,"Creating ka...")
trim("Code Wars is pretty rad", 50)//"Code Wars is pretty rad"

// our family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.
// The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.
//     You're father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings. Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.
// 6kyu
function rotate(str) {
    let result = []
    let newWord = `${str.slice(1)}${str.slice(0, 1)}`
    for (let i = 1; i <= str.length; i++) {
        let newWord = `${str.slice(i)}${str.slice(0, i)}`
        result.push(newWord)
    }
    return result
}

rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.
function shortenToDate(longDate) {
    return longDate.split(',')[0]
}

shortenToDate("Friday May 2, 9am")// "Friday May 2")
shortenToDate("Tuesday January 29, 10pm")// "Tuesday January 29")
shortenToDate("Monday December 25, 10pm")// "Monday December 25")

// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

function tailSwap(arr) {
    let result = []
    let numberArr1 = arr[0].split(':')[1]
    let numberArr2 = arr[1].split(':')[1]
    result.push(arr[0].split(':')[0] + ':' + numberArr2)
    result.push(arr[1].split(':')[0] + ':' + numberArr1)
    return result
}

tailSwap(['abc:123', 'cde:456'])// ['abc:456', 'cde:123'];
tailSwap(['a:12345', '777:xyz'])// ['a:xyz', '777:12345'];


// 1      /1 = 1    // Works    // 12     /2 = 6    // Works
// 123    /3 = 41   // Works    // 1232   /4 = 308  // Works
// 12322  /5 = 2464.4         // Doesn't work       // 123220 /6 = 220536.333...  // Doesn't work
function polydivisible(x) {
    let temp = x.toString()
    let result
    for (let i = 1; i <= temp.length; i++) {
        let num = Number.isInteger(+((x.toString().slice(0, i)) / i))
        if (num === true) {
            result = true
        } else if (num === false) {
            result = false;
            break
        }
    }
    return result
}

polydivisible(1232) //true
polydivisible(123220)// false

// Метод replace() позволяет найти и заменить какой-либо символ/символы в строке на заменитель.
{
    let str = 'anabell';
    let str2 = str.replace('a', 'A');
    console.log(str2); // "Anabell"

    {
        let str = 'bell';

        function replacer(s) {
            return s + 'BELL';
        }

        let str2 = str.replace('l', replacer);
        console.log(str2); // "belBELLl"
    }
}

