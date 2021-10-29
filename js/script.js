function clear() {
    console.clear()
}

{
    const obj = {};
    obj['likes read'] = true;

    let carModel = 'BMW Mini Cooper';
    obj[carModel] = 1;
    const employees = {
        accountant: 3,
        HR: 3,
        assistant: 1,
        courier: 1,
    };
    delete employees.HR
    const obj2 = {
        first: 1,
        third: 3,
        exists: undefined,
    };
    console.log(obj2.second); // undefined
    console.log(obj.first === undefined); // false
    console.log(obj.second === undefined); // true
    console.log(obj.exists === undefined); //!!! true, !!!!! значение присутствует
    let result = 'HR' in employees

    let questions = [{
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0
    }, {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0
    }];

    function users(questions) {
        questions.map(obj => obj.usersAnswer = null)
    }

    users(questions)
}

//i just wrote it's better than it was

// Write a function that takes an array and counts the number of each unique element present.
function count(array) {
    let result = {}
    for (let i = 0; i < array.length; i++) {
        if (result[array[i]] === undefined) {
            result[array[i]] = array.filter(el => el === array[i]).length
        }
    }
    return result
}

count(['a', 'a', 'b', 'b', 'b'])// { 'a': 2, 'b': 3 }
count(['james', 'james', 'john']) // { 'james': 2, 'john': 1}
let candidate1 = {minSalary: 120000},
    job1 = {maxSalary: 130000},
    job2 = {maxSalary: 80000};

function match(candidate, job) {
    let result = candidate.minSalary - (job.maxSalary / 10) <= job.maxSalary
    return result
}

match(candidate1, job1)
match(candidate1, job2)

function numObj(s) {
    let result = []
    for (let i = 0; i < s.length; i++) {
        let charCodeToString = String.fromCharCode(s[i])
        let obj = {[s[i]]: charCodeToString}
        result.push(obj)
    }
    return result
}

numObj([118, 117, 120]) //[{'118':'v'}, {'117':'u'}, {'120':'x'}])
numObj([101, 121, 110, 113, 113, 103])// [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}])


// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.
let list1 = [
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C'},
    {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'},
    {firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby'},
    {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C'},
];

function countLanguages(list) {
    let language = []
    let result = {}
    for (let key in list) {
        let value = list[key].language
        result[value] = 0
        language.push(value)
    }
    language.map(el => result[el]++)
    return result
}

countLanguages(list1) //{ C: 2, JavaScript: 1, Ruby: 1 }
// Create a function named bite(), that takes a LivingThing object as input. If the 'race' key of the object is 'human', the function should convert its 'race' to a 'zombie' and returning the, now modified, object.
let player = {
    name: 'Gary',
    race: 'human'
}

function bite(thing) {
    let obj = thing
    if (obj.race === 'human') {
        obj.race = 'zombie'
        return obj
    } else {
        return obj
    }
}

bite(player) //{name: "Gary", race: "zombie"};

// With this kata, write a function nameScore(name) to work out the score of a name that is passed to the function.
let alpha = {'ABCDE': 1, 'FGHIJ': 2, 'KLMNO': 3, 'PQRST': 4, 'UVWXY': 5}

function nameScore(name) {
    let result = name.split(' ').join('').toUpperCase().split('')
    let totalScore = 0
    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
        for (let key in alpha) {
            if (key.split('').includes(result[i])) {
                totalScore += alpha[key]
            }
        }
    }
    return {[name]: totalScore}
}

nameScore('Mary Jane') //{"Mary Jane":20}

const object = {
    name: 'Alice',
    age: 20,
    id: 'KUI-567_UIO',
    1: 'unique',
};

console.log(Object.keys(object)); // ["1", "name", "age", "id"]
console.log(Object.values(object)); // ["unique", "Alice", 20, "KUI-567_UIO"]
console.log(Object.entries(object)); // [["1", "unique"], ["name", "Alice"], ["age", 20], ["id", "KUI-567_UIO"]]

const items = {
    milk: 3,
    bread: 4.5,
    tomatoes: 1.9,
};

let arr = Object.entries(items);
console.log(arr); // [["milk", 3], ["bread", 4.5], ["tomatoes", 1.9]]

let newArr = arr.map(([key, value]) => [key, (value * 1.1).toFixed(2)]);
console.log(newArr); // [["milk", "3.30"], ["bread", "4.95"], ["tomatoes", "2.09"]]

const itemsNew = Object.fromEntries(newArr)
console.log(itemsNew);

function boredom(staff){
    let total = 0
    let obj = {
        'accounts' : 1,
        'finance' : 2,
        'canteen': 10,
        'regulation' : 3,
        'trading' : 6,
        'change' : 6,
        'IS' : 8,
        'retail' : 5,
        'cleaning' : 4,
        'pissing about' : 25
    }
    let entriesObj = Object.entries(obj)
    let staffValue = Object.values(staff)

    for (let i = 0; i < staffValue.length; i++){
        for (let key in entriesObj){
            console.log(entriesObj[key][1])
            if (staffValue[i] === entriesObj[key][0]){
                total += entriesObj[key][1]
            }
        }
    }
    let result = total <= 80 ? 'kill me now' : total < 100 && total> 80 ? 'i can handle this' : total >= 100 ? 'party time!!' : null
    return total
}
boredom({tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance' })// 'kill me now'

function numberOfPairs(gloves) {
    let obj = {}
    gloves.forEach((el,index) => obj[el] = 0)
    // let keys = Object.keys(obj)
    // keys

    for (let key in obj){
        for (let i = 0; i < gloves.length; i++){
            if (key === gloves[i]){
                obj[key] += 1
            }
        }
    }
    let countGloves = Object.entries(obj).filter(el => el[1] >= 2)
    if (countGloves.length > 0){
        for (let i = 0; i < countGloves.length; i++){
            let exactPair = countGloves[i]
            if (exactPair[1] % 2 !== 0){
                exactPair[1] -= 1
            }
        }
    }
    else {
        return 0
    }
    let result = countGloves.reduce((acc,curr) => curr[1] / 2 + acc ,0)
    return result
}
numberOfPairs(['red','green','red','blue','blue']) //2
numberOfPairs(['red','red','red','red','red','red']) //3

clear()

function mostFrequentElement(arr){
    let result = []
    let obj = {}
    arr.forEach(el => obj[el] = 0)
    for (let i = 0; i < arr.length; i++){
        for (let key in obj){
            if (arr[i] === +key){
                obj[key] += 1
            }
        }
    }
    let findMax = Object.entries(obj)
    let maxRepit = 0
    for (let i = 0; i < findMax.length; i++){
        if (maxRepit < findMax[i][1]){
            maxRepit = findMax[i][1]
        }
    }
    findMax = findMax.filter(el => el[1] === maxRepit)
    findMax = Object.fromEntries(findMax)
    result = Object.keys(findMax).map(el => +el)
    return result
}
mostFrequentElement([5,7,7,1,1,1,8,7,3,6,7,1]) // [1, 7]

// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter. If such letters are two or more, choose the one that appears in the string( earlier.
function replaceCommon(string, letter) {
    let arrStr = string.split(' ')

    let arrLetters = []
    let obj = {}
    for (let i = 0; i < arrStr.length; i++){
        let temp = arrStr[i].split('')
        for (let j = 0; j < temp.length; j++){
            obj[temp[j]] = 0
            arrLetters.push(temp[j])
        }
    }
    let popularLetter = []
    for (let i = 0; i < arrLetters.length; i++){
        for (let key in obj){
            if (key === arrLetters[i]){
                obj[key] += 1
            }
        }
    }

    let objValues = Object.values(obj)
    let maxNumber = Math.max(...objValues)

    //addPopularLetter
    for (let key in obj){
        if (obj[key] === maxNumber){
            popularLetter.push(key)
        }
    }
    //change arrStr letter to first popularLetter
    let result = []
    for (let i = 0; i < arrStr.length; i++){
        let currStr = arrStr[i]
        for (let j = 0; j < currStr.length; j++){
            currStr = currStr.replace(new RegExp(popularLetter[0]) ,`${letter}`)
        }
        result.push(currStr)

    }
    result = result.join(' ')
    return result
}

replaceCommon('my mom loves me as never did', 't')//, 'ty tot loves te as never did'
replaceCommon('real talk bro', 'n')//, 'neal talk bno'
replaceCommon('great job go ahead', 'k')//, 'grekt job go khekd'
replaceCommon('yyyaaa twwww ttt uuu ccca', 'p')//, 'yyyppp twwww ttt uuu cccp

