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

let lengthOfLongestSubstring = function (s) {
    let prevLongest = 0
    let longest = 0
    let arrLetters = Array.from(new Set([...s.split('')]))// without duplicate

    let objWithTotal = {} // obj with a:0 b:0 c:0


    for (let i = 0; i < arrLetters.length; i++) {
        objWithTotal[arrLetters[i]] = 0 // creating main obj
    }

    let cleanObjWithTotal = {...objWithTotal}

    // console.log(objWithTotal) // if 2 brake!
    let arrElements = s.split('')
    for (let i = 0; i < arrElements.length; i++) {
        // let currentElement = arrElements[i]
        if (objWithTotal[arrElements[i]] !== undefined) {
            // are all less than 2?
            objWithTotal[arrElements[i]] += 1

            if (objWithTotal[arrElements[i]] < 2) {
                if (arrElements[i].length > 0 && arrElements[i] !== ' ') {
                    longest++
                } else if (i === 0 && arrElements[i] === ' ') {
                    longest++
                }
            } else {
                if (prevLongest < longest) {
                    prevLongest = longest
                }
                longest = 0
                if (arrElements.length - 1 === i) {
                    break;
                }
                let iOfElementEquals = (arrElements.indexOf(arrElements[i]))
                arrElements[iOfElementEquals] = ' '
                i = -1
                arrElements = [...arrElements.slice(iOfElementEquals + 1)]
                objWithTotal = {...cleanObjWithTotal}
            }
        }
    }
    prevLongest < longest ? prevLongest = longest : longest
    return prevLongest
};

console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring(" ")) // 1
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("jbpnbwwd")) // 4

console.log(lengthOfLongestSubstring("aab")) // 2
console.log(lengthOfLongestSubstring("dvqrcdf")) // 6
console.log(lengthOfLongestSubstring("dvdf")) // 3
console.log(lengthOfLongestSubstring("tmmzuxt")) // 5

// I DID IT!!!!!!!!!!!!!!!!!!!!!

console.clear()
// https://leetcode.com/problems/3sum-closest/ medium

function threeSumClosest(nums, target) {
    let closestSum = nums[0] + nums[1] + nums[2]
    let checkIsAllTheSame = true

    for (let i = 0; i < nums.length; i++) { // if all the same/ lets count
        if (nums[i] === nums[0]) {
            continue
        } else {
            checkIsAllTheSame = false;
            break;
        }
    }
    if (checkIsAllTheSame) {
        closestSum = nums[0] + nums[1] + nums[2]
        return closestSum
    }


    if (nums.length === 3) {
        return nums.reduce((acc, curr) => acc + curr, 0)
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let q = j + 1; q < nums.length; q++) {
                let whatWeCounter = [nums[i], nums[j], nums[q]]
                let whatWeCounter2 = `i:${i} | j:${j} | q:${q}`
                let count = nums[i] + nums[j] + nums[q] // count current 3
                if (i === j || i === q || j === q) {
                    continue
                }
                if (count === target) {
                    closestSum = count // if target === count all done 100%
                    return count
                    break
                }
                //add number if it closer than closesSum
                let addNumberToClosestOrNot = Math.abs(target - count) < Math.abs(target - closestSum)
                if (addNumberToClosestOrNot) {
                    closestSum = count
                }
            }
        }
    }
    return closestSum
}

console.log(threeSumClosest([0,1,2], 0)) // 3
console.log(threeSumClosest([1, 1, 1, 1], 0)) // 3
console.log(threeSumClosest([1, 2, 5, 10, 11], 12)) // 13
console.log(threeSumClosest([0, 2, 1, -3], 1)) // 0
console.log(threeSumClosest([1, 1, 1, 0], 100)) // 3
console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
console.log(threeSumClosest([-1, 0, 1, 1, 55], 3)) // 2
console.log(threeSumClosest([1, 1, 1, 0], -100)) // 2
console.log(threeSumClosest([-3, -2, -5, 3, -4], -1)) /// -2
console.log(threeSumClosest([1, 1, -1, -1, 3], -1)) // -1






