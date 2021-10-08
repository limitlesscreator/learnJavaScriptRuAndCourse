// i don't' remember where is it was, so i need rewrite it:)

let str = '1I do, 2you do, 3they do';
console.log(str.split('do'));
// ["1I ", ", 2you ", ", 3they ", ""], сам разделитель не включается в массив
console.log(str.split(' '));
// ["1I", "do,", "2you", "do,", "3they", "do"], в качестве разделителя указана пустая строка
console.log(str.split('o', 2));
// ["1I d", ", 2y"], есть лимит на количество выводимых подстрок
console.log(str.split('1'));
// ["", "I do, 2you do, 3they do"]
console.log(str.split());
// ["1I do, 2you do, 3they do"], массив содержит 1 элемент со всей строкой
console.log(str.split(/\d/));
// ["", "I do, ", "you do, ", "they do"], /\d/ – регулярное выражение, которое заменяет символы от 0 до 9 включительно
str = '01 2  3    4';
console.log(str.split(/\s*/)); // ["0", "1", "2", "3", "4"], /\s*/ – регулярное выражение, которое означает "ноль или более" (*) пробелов (\s)
//
function clear() {
    console.clear()
}

// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.
//     Your task is to output a list of everything inbetween both occurrences of this element in the list.
function duplicateSandwich(a) {
    let result = a
    let temp
    let indexFirstDuplicate
    let indexSecondDuplicate
    for (let i = 0; i < a.length; i++) {
        temp = a[i]
        for (let j = 0; j < a.length; j++) {
            if (temp === a[j] && a.lastIndexOf(temp) !== a.indexOf(temp)) {
                indexFirstDuplicate = a.indexOf(temp)
                indexSecondDuplicate = a.lastIndexOf(temp)
                break
            }
        }
    }
    result = result.slice(indexFirstDuplicate + 1, indexSecondDuplicate)
    return result
}

duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])// [2, 3, 4, 5, 6]
duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"])// ["Hello", "Example", "hello"]
duplicateSandwich([0, 0])// []

// In English, all words at the begining of a sentence should begin with a capital letter.You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence. For example, input:
// "hello. my name is inigo montoya. you killed my father. prepare to die." output: "Hello. My name is inigo montoya. You killed my father. Prepare to die."
// You may assume:there will be no punctuation besides full stops and spaces all but the last full stop will be followed by a space and at least one word

function fix(paragraph) {
    if (paragraph.length) {
        let result = paragraph
        result = result.split('. ').map(el => el.split('')[0].toUpperCase() + el.slice(1)).join('. ')
        return result
    } else return paragraph
}

fix("")//, "")
fix("hi.")// "Hi.")
fix("hello. my name is inigo montoya. you killed my father. prepare to die.")//"Hello. My name is inigo montoya. You killed my father. Prepare to die."

// Write a function to split a string and convert it into an array of words. For example:
const stringToArray = string => string.split(' ')

stringToArray("Robin Singh")// ["Robin", "Singh"];
stringToArray("I love arrays they are my favorite")// ["I", "love", "arrays", "they", "are", "my", "favorite"]);


function digits(num) {
    let result = String(num).split('')
    let mainResult = []
    let arr = result
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            mainResult.push(+arr[i] + +arr[j])
            result.shift()
        }
    }
    console.log(mainResult)
    console.log(result)
}

digits(12345)

//doesn't work :(

function digits(num) {
    let res = [];
    String(num).split('').forEach((d, i, arr) => {
        for (let j = i + 1; j < arr.length; j++)
            res.push(Number(d) + Number(arr[j]));
    });
    return res;
}

//this bellow is not mine, but i like it solution :)

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.
function removeConsecutiveDuplicates(s) {
    let result = []
    let temp = s.split(' ')
    for (let i = 0; i < temp.length; i++) {
        if (result[result.length - 1] !== temp[i]) {
            result.push(temp[i])
        }
    }
    return result.join(' ')
}

removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta") //'alpha beta gamma delta alpha beta gamma delta'
clear()

// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.
// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
function hydrate(s) {
    let temp = s.split(' ').filter(el => +el).reduce((acc, curr) => acc + +curr, 0)
    return `${temp < 2 ? `${temp} glass of water` : `${temp} glasses of water`}`
}

hydrate("1 beer")// "1 glass of water");
hydrate("2 glasses of wine and 1 shot")// "3 glasses of water");
hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")// "10 glasses of water");

// function solve(eq){
//     let result = []
//     let arr =  eq.split('')
//     for (let i = 0; i < arr.length; i++){
//         if (!isNaN(arr[i])){
//             result.push(arr[i])
//         }
//         else {
//
//         }
//     }
//     result
// }
// solve("100*b/y")//"y/b*100" //not working

// Write a function that reverses the bits in an integer.
//     For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
function reverseBits(n) {
    let result = parseInt((n.toString(2).split('').reverse().join('')), 2)
    return result
}

reverseBits(417)//, 267)
reverseBits(267)//, 417)
reverseBits(0)//, 0)
reverseBits(2017)//, 1087)

// Given 2 string parameters, show a concatenation of:the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER ** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**

function reverseAndMirror(s1, s2) {
    let arr1 = s1.split('')
    let newWord1 = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr1[i].toUpperCase()) {
            newWord1.push(arr1[i].toLowerCase())
        } else newWord1.push(arr1[i].toUpperCase())
    }
    newWord1 = newWord1.join('')
    let twoWords = newWord1.split('').reverse().join('') + newWord1

    let arr2 = s2.split('')
    let newWord2 = []
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === arr2[i].toUpperCase()) {
            newWord2.push(arr2[i].toLowerCase())
        } else newWord2.push(arr2[i].toUpperCase())
    }
    newWord2 = newWord2.reverse().join('')
    let result = newWord2 + '@@@' + twoWords
    return result
}

reverseAndMirror("FizZ", "buZZ") //  "zzUB@@@zZIffIZz"
reverseAndMirror("String Reversing", "Changing Case") //"ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING"
