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
                arr.push('FizzBuzz'); break
            case i % 3 === 0 && i % 5 !== 0:
                arr.push('Fizz'); break
            case i % 3 !== 0 && i % 5 === 0:
                arr.push('Buzz'); break
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

console.log(addStrings('11','123'))