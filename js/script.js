function start() {
    function clear() {
        console.clear()
    }


    let p = new Promise((resolve, reject) => {
        let a = 1 + 1
        if (a === 2) {
            resolve('Success')
        } else {
            reject('Failed')
        }
    })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('Error inside Promise' + message)
// })
/////////////////////////////////////////////////////////////////
// not good example of code bellow without Promise
    {
        const userLeft = false
        const userWatchingCatMeme = true

        function watchTutorialCallback(callback, errorCallback) {
            if (userLeft) {
                errorCallback({
                    name: 'User Left',
                    message: ':('
                })
            } else if (userWatchingCatMeme) {
                errorCallback({
                    name: 'User Watching Cat Meme',
                    message: 'WebDevSimplified < Cat'
                })
            } else {
                callback('Thumbs up and Subscribe')
            }
        }

        // watchTutorialCallback((message) => {
        //     console.log('Success: ' + message)
        // }, (error) => {
        //     console.log(error.name + ' ' + error.message)
        // })
    }

// good example of code bellow with Promise :)

    {
        const userLeft = false
        const userWatchingCatMeme = true

        function watchTutorialPromise() {
            return new Promise((resolve, reject) => {
                if (userLeft) {
                    resolve({
                        name: 'User Left',
                        message: ':('
                    })
                } else if (userWatchingCatMeme) {
                    reject({
                        name: 'User Watching Cat Meme',
                        message: 'WebDevSimplified < Cat'
                    })
                } else {
                    resolve('Thumbs up and Subscribe')
                }
            })
        }

        watchTutorialPromise().then((message) => {
            console.log('Success: ' + message)
        }).catch((error) => {
            // console.log(error.name + ' ' + error.message)
        })
    }

    const recordVideoOne = new Promise((resolve, reject) => {
        resolve('Video 1 Recorded')
    })

    const recordVideoTwo = new Promise((resolve, reject) => {
        resolve('Video 2 Recorded')
    })

    const recordVideoThree = new Promise((resolve, reject) => {
        resolve('Video 1 Recorded')
    })

    Promise.all([recordVideoOne, recordVideoThree, recordVideoTwo]).then((messages) => {
        // console.log(messages)
    })

//start
//Async code example
// setTimeout(() => {
//     console.log('We are in the timeout')
// },1000)

    console.log('Start')

    function loginUser(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({userEmail: email})
            }, 1500)
        })
    }

    const user = loginUser('deved@mail.ru', 123456)
        .then(obj => {
            console.log(obj)
        })
        .then(() => console.log('End'))
        .catch(() => console.log('Error'))

//Practice Call Stack

    function multiply(a, b) {
        return a * b
    }

    function square(n) {
        return multiply(n, n)
    }

    function printSquare(n) {
        const result = square(n)
        console.log(result)
    }

    setInterval(function timeout() {
        setTimeout(function timeout() {
            console.log('3')
        }, 1000)
    }, 1000)
}

function stop() {
    console.log('start')

    setTimeout(() => {
        console.log('timer 1')
        setTimeout(() => {
            console.log('timer 2')
            setTimeout(() => {
                console.log('timer 5')
            }, 10)
        }, 20)
    }, 0)

    setTimeout(() => {
        console.log('timer3')
        setTimeout(() => {
            console.log('timer 4')
            setTimeout(() => {
                console.log('timer 6')
            }, 0)
        }, 0)
    }, 0)

    console.log('end')
}


//start
//end
//
// callStack = [1,3,2]

function CalculateString(n, nums) {
    let result = []
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = nums.replace(/10/, '')
        result.push(temp)
        nums = temp
    }
    return nums.length
}

CalculateString(4, "1100")//0
CalculateString(5, "01010")//1

const removeVowels = function (str) {
    return str.replace(/[aeiou]/g, '')
}

removeVowels("drake")//"drk"

// Create a function that takes any sentence and redistributes the spaces (and adds additional spaces if needed) so that each word starts with a vowel. The letters should all be in the same order but every vowel in the sentence should be the start of a new word.
// The first word in the new sentence may start without a vowel. It should return a string in all lowercase with no punctuation (only alphanumeric characters).
// EXAMPLES 'It is beautiful weather today!' becomes 'it isb e a ut if ulw e ath ert od ay' 'Coding is great' becomes 'c od ing isgr e at' 'my number is 0208-533-2325' becomes 'myn umb er is02085332325'
function vowelStart(str) {
    let result = []

    function replacer(s) {
        return ` ${s}`
    }

    str = str.replace(/[ ]/g, '')
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].replace(/[aeiou]/i, replacer))
    }
    return result.join('').toLowerCase().trim().replace(/[!,_-]/gi, '')
}

vowelStart('It is beautiful weather today!')//, 'it isb e a ut if ulw e ath ert od ay',)
vowelStart('Coding is great')//'c od ing isgr e at
vowelStart('my number is 0208-533-2325')//,'myn umb er is02085332325' ,)
vowelStart('oranges, apples, melon, pineapple')//, 'or ang es appl esm el onp in e appl e', )
vowelStart('under_score')//, 'und ersc or e')
// just a little hard, but i feel so good so nice XD

// \d – все цифры от 0 до 9.
// \D – не цифры.
// \s – пробельные символы, символ табуляции, новые строки (\n).
// \S – все, кроме \s.
// \w – латиница (буквы русского алфавита не подходят), цифры, подчёркивание '_'.
// \W – все, кроме \w.
// /./ – любой символ кроме перевода строки \n.
//     Квантификатор – количество раз, которое встречается символ в строке подряд:
//     + – означает «один или более» (например: /\d+/).
// * – означает «ноль или более» (например: /\d*/).

function stopPromises() {
    const inventory = {
        sunglasses: 1900,
        pants: 1088,
        bags: 1344
    };

    function myExecutor(resolve, reject) {
        if (inventory.sunglasses > 0) {
            resolve('Sunglasses order processed.')
        } else {
            reject('That item is sold out.')
        }
    }

    const myFirstPromise = new Promise(myExecutor)

    function orderSunglasses() {
        return new Promise(myExecutor)
    }

    const orderPromise = orderSunglasses()

    console.log(orderPromise)
}

function withoutAsync() {
    // without async await
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err + 'ops  ')
        })
}

const asyncFunction = async () => {
    // with async
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos/1'
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.error(err)
    }
}
asyncFunction().then((data) => console.log(data))

// Метод split() разбивает строку на массив подстрок путём разделения строки указанным разделителем.

// Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

reverseWords("kata editor")//  "editor kata"
reverseWords("row row row your boat")//"boat your row row row")

// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.
//     Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number".
//     If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
const palindromeChainLength = function (n) {
    let result = 0
    for (let i = 0; i < 100; i++) {
        let palindromeIs = String(n) === String(n).split('').reverse().join('')
        if (!palindromeIs) {
            n = n + Number(String(n).split('').reverse().join(''))
            result++
        } else {
            break
        }
    }
    return result
}
palindromeChainLength(87)// 4
palindromeChainLength(89)// 24
palindromeChainLength(10)// 1

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia). Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = function (test, original) {
    let result
    let tempTest = test.toLowerCase()
    let tempOrig = original.toLowerCase().split('')

    for (let i = 0; i < 100; i++) {
        // debugger
        if (tempTest.indexOf(tempOrig[i]) !== -1) {
            tempTest = tempTest.replace(tempOrig[i], '')
        } else if (tempTest.length === 0 && test.length === original.length) {
            result = true
            break
        } else if (tempTest.indexOf(tempOrig[i]) === -1) {
            result = false
            break
        }
    }
    return result
};
isAnagram("foefet", "toffee")
isAnagram('Twoo', 'Woot')

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
function addLength(str) {
    let result = str.split(' ')
    result = result.map(el => `${el} ${el.length}`)
    return result
}

addLength('apple ban')//["apple 5", "ban 3"]
addLength('you will win')//["you 3", "will 4", "win 3"]

// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
function makeString(s) {
    let word = s.split(' ')
    word = word.map(el => el[0]).join('')
    return word
}

makeString("sees eyes xray yoat")// "sexy"
makeString("brown eyes are nice")// "bean"

function findLongest(str) {
    debugger
    let spl = str.split(" ")
    let longest = 0
    for (let i = 0; i > spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }

    return longest
}

findLongest("The quick white fox jumped around the massive dog")

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
function findLongest(str) {
    let spl = str.split(" ")
    let longest = 0
    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest
}

findLongest("The quick white fox jumped around the massive dog")// 7
findLongest("Take me to tinseltown with you")// 10


// Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word If there is punctuation, it should be interpreted as a regular character; no special rules.
//     If there is spacing before/after the input string, leave them there. String will not be empty. function reverser(sentence) {
function reverser(sentence) {
    let result = sentence.split(' ')
    result = result.map(el => el.split('').reverse().join('')).join(' ')
    return result
}

reverser("Hi mom")// 'iH mom'
reverser("friendzone")// 'enozdneirf'