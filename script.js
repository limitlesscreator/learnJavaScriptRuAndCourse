// https://leetcode.com/problems/valid-parentheses/
let isValid = function (s) {
    let stack = []
    let result = true

    let obj = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    for (let i = 0; i < s.length; i++) {
        if (isCloseBracket(s[i])) {
            if (obj[s[i]] !== stack.pop()) {
                result = false;
                break;
            }
        } else stack.push(s[i])
    }
    console.log(stack.length === 0 && result)
};

function isCloseBracket(bracket) {
    return [')', '}', ']'].indexOf(bracket) > -1
}

isValid('()[]{}') // true
isValid('(]') // false
isValid('(]dasd') // false

console.clear()


// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
// var mergeTwoLists = function(list1, list2) {
//
//     for (let i = 0; i < list2.length; i++){
//
//     }
//
// };

// // https://leetcode.com/problems/fizz-buzz/
let fizzBuzz = function (n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                arr.push('FizzBuzz');
                break
            case i % 3 === 0 && i % 5 !== 0:
                arr.push('Fizz');
                break
            case i % 3 !== 0 && i % 5 === 0:
                arr.push('Buzz');
                break
            default:
                arr.push(`${i}`)
        }
    }
    return arr
}

fizzBuzz(3)//["1","2","Fizz"]
fizzBuzz(5)//["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15))//["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])

console.clear()

// https://leetcode.com/problems/add-strings/

let addStrings = (num1, num2) => `${BigInt(num1) + BigInt(num2)}`

console.log(addStrings('11', '123'))

let a = document.querySelectorAll('.child1')

console.log(a)
console.log(String({}))

console.clear()
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// i have to change only current arr (nums)
let removeDuplicates = function (nums) {
    // let obj = {}
    // let counter = nums.length
    // for (let i = 0; i < counter; i++) {
    //     obj[nums[i]] = 0
    // }
    // for (let i = 0; i < counter; i++){
    //     obj[nums[0]] += 1
    //     nums.shift()
    // }
    // Object.keys(obj).forEach(el => {
    //     nums.push(+el)
    // })
    let counter = nums.length
    for (let i = 0; i < counter; i++){
        let temp = nums.pop()
        if (!nums.includes(temp)){
            nums.unshift(temp)
        }
    }
    return nums
};

// console.log(removeDuplicates([1, 1, 2])) // 1,2
console.log(removeDuplicates([-1,0,0,0,0,3,3])) // [-1,0,3]

// https://leetcode.com/problems/length-of-last-word/submissions/
let lengthOfLastWord = (s) =>  s.trim().split(' ').reverse()[0].length
console.clear()

// https://leetcode.com/problems/maximum-subarray/

// let maxSubArray = function(nums) {
//     let biggestNumber = nums[0]
//     let ifAllNegative = nums.every(el => el < 0)
//     let curSum = 0
//     if (!ifAllNegative){
//         for (let i = 0; i < nums.length; i++){
//             for (let j = i; j < nums.length; j++){
//                 // let tempArr = nums.slice(i,j+1).reduce((acc,curr) => acc + curr, 0)
//                 curSum += nums[j]
//                 if (biggestNumber < curSum){
//                     biggestNumber = curSum
//                 }
//             }
//             curSum = 0
//         }
//         return biggestNumber
//     }
//     else {
//         return Math.max(...nums)
//     }
// };
// this is not good because O(n^2) above



// O(n)
let maxSubArray = function(nums) {
    let biggestNumber = nums[0]
    let currentSum = 0
        for (let i = 0; i < nums.length; i++){
            if (currentSum < 0){
                currentSum = 0
            }
            currentSum += nums[i]
            biggestNumber = Math.max(biggestNumber, currentSum)
        }
        return biggestNumber
};

// console.log(maxSubArray([5,4,-1,7,8])) // 23
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
// console.log(maxSubArray([-2,-1])) // -1
// console.log(maxSubArray([-1,0,-2])) // 0
// console.log(maxSubArray([1,2,-1,-2,2,1,-2,1])) // 3




// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
let maxProfit = function(prices) {
    let result = 0

    let left = 0
    let right = 1

    for (let i = 0; i < prices.length; i++){
        if (prices[left] < prices[right]){
            let tempResult = prices[right] - prices[left]
            result = Math.max(result, tempResult)
        }
        else {
            left = right
        }
        right += 1
    }
    return result
};

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
