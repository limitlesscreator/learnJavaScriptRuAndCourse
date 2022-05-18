// https://leetcode.com/problems/roman-to-integer/

function witchNumber(roman) {
    switch (roman) {
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        case 'D':
            return 500
        case 'M':
            return 1000
        default:
            return
    }
}

let romanToInt = function (s) {
    let result = 0
    let arrOfRoman = s.split('')
    for (let i = 0; i < arrOfRoman.length; i++) {
        if (witchNumber(arrOfRoman[i]) < witchNumber(arrOfRoman[i + 1]) && witchNumber(arrOfRoman[i + 1])) {
            result += witchNumber(arrOfRoman[i + 1]) - witchNumber(arrOfRoman[i])
            i += 1
        } else {
            result += witchNumber(arrOfRoman[i])
        }
    }
    return result
}

romanToInt('III')// 3
romanToInt('LVIII')// 58
romanToInt('MCMXCIV')// 1994

console.clear()

// https://leetcode.com/problems/remove-element
let removeElement = function (nums, val) {
    let newArr = [...nums.filter(el => el !== val)]
    let countPop = nums.length

    for (let i = 0; i < countPop; i++) {
        nums.pop()
    }

    for (let i = 0; i < newArr.length; i++) {
        nums[i] = newArr[i]
    }

    return nums
}

console.log(removeElement([3, 2, 2, 3], 3)) // [2,2,_,_]
// removeElement([0,1,2,2,3,0,4,2],2) // [0,1,4,0,3,_,_,_]

console.clear()

// https://leetcode.com/problems/integer-to-roman/ - medium

let intToRoman = function (num) {
    let result = ''
    let obj = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    }
    for (let i = 0; i < 20; i++) {
        for (let key in obj) {
            if (num - obj[key] >= 0) {
                result += `${key}`
                num -= obj[key]
                break
            }
        }
    }
    return result
};

console.log(intToRoman(1994))

console.clear()

// https://leetcode.com/problems/longest-substring-without-repeating-characters/  medium

var lengthOfLongestSubstring = function(s) {
    let prevLongest = 0
    let longest = 0
    let arrLetters = Array.from(new Set([...s.split('')]))// without duplicate

    let objWithTotal = {} // obj with a:0 b:0 c:0

    for (let i = 0; i < arrLetters.length; i++){
        objWithTotal[arrLetters[i]] = 0 // creating main obj
    }

    // console.log(objWithTotal) // if 2 brake!
    let arrElements = s.split('')
    for (let i = 0; i < arrElements.length; i++){
        debugger
        if (objWithTotal[arrElements[i]] !== undefined){
            // are all less than 2?
            objWithTotal[arrElements[i]] += 1

            let temp = Object.entries(objWithTotal)
            let trueOrFalse = temp.every(el => el[1] < 2)

            if (trueOrFalse){
                longest++
            }

            else {
                if (prevLongest < longest){
                    prevLongest = longest
                }
                longest = 0
                // if all elements same
                let checkAll = arrElements.every(el => el === arrElements[i])

                if (arrElements.length - 1 === i || checkAll){
                    break
                }

                // ********************************************
                //     if (arrElements.indexOf(arrElements[i] === 0)){
                //         i -= i - (arrElements.indexOf(arrElements[i]) + 1)
                //     }
                //     else {
                        i -= i - (arrElements.indexOf(arrElements[i]))
                    // }
                // ********************************************

                //find firstIndexOf element that create 2 and set to the i + 1

                temp.forEach((el,index) => {
                    objWithTotal[el[0]] = 0
                })
            }
        }
    }
    prevLongest < longest ? prevLongest = longest : longest
    return prevLongest
};

// console.log(lengthOfLongestSubstring("pwwkew")) // 3
// console.log(lengthOfLongestSubstring(" ")) // 1
// console.log(lengthOfLongestSubstring("bbbbb")) // 1
// console.log(lengthOfLongestSubstring("dvqrcdf")) // 6
// console.log(lengthOfLongestSubstring("aab")) // 2

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
// console.log(lengthOfLongestSubstring("dvdf")) // 3

// what the hell, i can't solve it, yet :D

