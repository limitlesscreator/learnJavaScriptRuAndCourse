'use strict'

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

// const object = {
//     name: 'Alice',
//     age: 20,
//     id: 'KUI-567_UIO',
//     1: 'unique',
// };

// console.log(Object.keys(object)); // ["1", "name", "age", "id"]
// console.log(Object.values(object)); // ["unique", "Alice", 20, "KUI-567_UIO"]
// console.log(Object.entries(object)); // [["1", "unique"], ["name", "Alice"], ["age", 20], ["id", "KUI-567_UIO"]]

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

function boredom(staff) {
    let total = 0
    let obj = {
        'accounts': 1,
        'finance': 2,
        'canteen': 10,
        'regulation': 3,
        'trading': 6,
        'change': 6,
        'IS': 8,
        'retail': 5,
        'cleaning': 4,
        'pissing about': 25
    }
    let entriesObj = Object.entries(obj)
    let staffValue = Object.values(staff)

    for (let i = 0; i < staffValue.length; i++) {
        for (let key in entriesObj) {
            console.log(entriesObj[key][1])
            if (staffValue[i] === entriesObj[key][0]) {
                total += entriesObj[key][1]
            }
        }
    }
    let result = total <= 80 ? 'kill me now' : total < 100 && total > 80 ? 'i can handle this' : total >= 100 ? 'party time!!' : null
    return total
}

boredom({
    tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance'
})// 'kill me now'

function numberOfPairs(gloves) {
    let obj = {}
    gloves.forEach((el, index) => obj[el] = 0)
    // let keys = Object.keys(obj)
    // keys

    for (let key in obj) {
        for (let i = 0; i < gloves.length; i++) {
            if (key === gloves[i]) {
                obj[key] += 1
            }
        }
    }
    let countGloves = Object.entries(obj).filter(el => el[1] >= 2)
    if (countGloves.length > 0) {
        for (let i = 0; i < countGloves.length; i++) {
            let exactPair = countGloves[i]
            if (exactPair[1] % 2 !== 0) {
                exactPair[1] -= 1
            }
        }
    } else {
        return 0
    }
    let result = countGloves.reduce((acc, curr) => curr[1] / 2 + acc, 0)
    return result
}

numberOfPairs(['red', 'green', 'red', 'blue', 'blue']) //2
numberOfPairs(['red', 'red', 'red', 'red', 'red', 'red']) //3

clear()

function mostFrequentElement(arr) {
    let result = []
    let obj = {}
    arr.forEach(el => obj[el] = 0)
    for (let i = 0; i < arr.length; i++) {
        for (let key in obj) {
            if (arr[i] === +key) {
                obj[key] += 1
            }
        }
    }
    let findMax = Object.entries(obj)
    let maxRepit = 0
    for (let i = 0; i < findMax.length; i++) {
        if (maxRepit < findMax[i][1]) {
            maxRepit = findMax[i][1]
        }
    }
    findMax = findMax.filter(el => el[1] === maxRepit)
    findMax = Object.fromEntries(findMax)
    result = Object.keys(findMax).map(el => +el)
    return result
}

mostFrequentElement([5, 7, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1]) // [1, 7]

// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter. If such letters are two or more, choose the one that appears in the string( earlier.
function replaceCommon(string, letter) {
    let arrStr = string.split(' ')

    let arrLetters = []
    let obj = {}
    for (let i = 0; i < arrStr.length; i++) {
        let temp = arrStr[i].split('')
        for (let j = 0; j < temp.length; j++) {
            obj[temp[j]] = 0
            arrLetters.push(temp[j])
        }
    }
    let popularLetter = []
    for (let i = 0; i < arrLetters.length; i++) {
        for (let key in obj) {
            if (key === arrLetters[i]) {
                obj[key] += 1
            }
        }
    }

    let objValues = Object.values(obj)
    let maxNumber = Math.max(...objValues)

    //addPopularLetter
    for (let key in obj) {
        if (obj[key] === maxNumber) {
            popularLetter.push(key)
        }
    }
    //change arrStr letter to first popularLetter
    let result = []
    for (let i = 0; i < arrStr.length; i++) {
        let currStr = arrStr[i]
        for (let j = 0; j < currStr.length; j++) {
            currStr = currStr.replace(new RegExp(popularLetter[0]), `${letter}`)
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

clear()

const Counter = {
    value: 0
}

Counter.__proto__.increase = function () {
    return this.value += 1
}

Counter.__proto__.getValue = function () {
    return this.value
}

Counter.__proto__.reset = function () {
    return this.value = 0
}

function like() {
    console.log(this)
}

// like()


var dog = {
    breed: 'Beagles',
    lovesToChase: 'rabbits'
};

function chase() {
    // console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.');
}

dog.foo = chase;
dog.foo();

chase();


const obj2 = {
    name: 'Alice',
    sing() {
        console.log(this.name + ' can sing!');
    },
};


const obj3 = {
    name: 'Alice',
    sing() {
        let moreActions = () => this.name + ' can sing and dance!';
        console.log(moreActions());
    },
};
obj3.sing(); // "Alice can sing and dance!"

// This — это ключевое слово, используемое в JavaScript, которое имеет особое значение, зависящее от контекста в котором оно применяется.
//     Если мы попытаемся обратиться к ключевому слову this в глобальной области видимости, оно будет привязано к глобальному контексту, то есть — к объекту window в браузере.
//     При использовании функций, которые имеются в глобальном контексте (это отличает их от методов объектов) ключевое слово this в них будет указывать на объект window.
//     Когда this используется внутри объекта, это ключевое слово ссылается на сам объект.
//     стоит помнить о том, что ключевое слово this относиться к тому объекту, в методе которого оно используется. Рассмотрим пример.
//     при обращении к this в методе объекта, этому ключевому слову соответствует объект, которому принадлежит метод. Однако это не относится к стрелочным функциям. Вместо этого, this в таких функциях относится к глобальному контексту (к объекту window). Это происходит потому, что стрелочные функции не привязаны к собственным сущностям this. В Mozile MDN советуют не использовать стрелочные фунеции в качестве методов объектов
clear()
const object = {};
console.log(object.toString())

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName
}

// typeof n.firstName != undefined && n.firstName == "John"//, "Verifying First name. Object returned should contain the firstname: John");
// typeof n.lastName != undefined && n.lastName == "Doe"//, "Verifying Last name. Object returned should contain the lastname: Doe");
// typeof n.name != undefined && n.name == "John Doe"//, "Verifying full name. Object returned should contain the full name: John Doe");

{
    const arr = [1, 2, 3, 4, 5];
    arr.reverse();
    console.log(arr); // [5, 4, 3, 2, 1]
}

Array.prototype.reverse = function () {
    let count = [...this].length
    let pushing = []
    for (let i = 0; i < count; i++) {
        pushing.push(this.pop())
    }
    pushing.forEach(el => this.push(el))
    return this
};
// without orriginal

String.prototype.toJadenCase = function () {
    let result = []
    let temp = this.split(' ')
    console.log(temp)
};

let str = 'How can mirrors be real if our eyes aren\'t real'.toJadenCase()
console.log(str)

String.prototype.toJadenCase = function (str) {
    let result = []
    let temp = this.split(' ')
    for (let i = 0; i < temp.length; i++) {
        let deleteFirstLetter = temp[i].split('').shift().toUpperCase()
        let newArr = temp[i].split('')
        newArr.shift()
        newArr.unshift(deleteFirstLetter)
        newArr = newArr.join('')
        result.push(newArr)
    }
    result = result.join(' ')
    return result
};

let Ghost = function () {
    const obj = {
        '0': 'white',
        '1': 'yellow',
        '2': 'purple',
        '3': 'red',
    }
    this.color = obj[Math.floor(Math.random() * 4)]
};

// ghost = new Ghost()

// console.log(ghost)
{
    String.prototype.digit = function () {
        console.log(this)
    };

    let str = '8'
    str.digit()
}
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
String.prototype.digit = function () {
    if (!isNaN(this) && this.trim().length > 0) {
        if (this >= 0 && this <= 9) {
            return true
        } else return false
    } else return false
};
clear()

{
    function Counter() {
        let count = 0
        return () => {
            count++
            return count
        }
    }

    let a = Counter()
    let b = Counter()
    console.log(a())
    console.log(a())
    console.log(a())
    console.log(b())
    console.log(b())
    console.log(a())

}
String.prototype.toAlternatingCase = function () {
    let result = []
    let b = this.split('')
    for (let i = 0; i < b.length; i++) {
        if (b[i] === b[i].toLowerCase()) {
            result.push(b[i].toUpperCase())
        } else {
            result.push(b[i].toLowerCase())
        }
    }
    return result.join('')
}
Array.prototype.only = function (keys) {
    let result = []
    let arr = this.join('')
    keys.forEach(el => result.push(arr[el]))
    return result
}
// let arr = ['a', 'b', 'c', 'd', 'e'].only([0,3])

clear()

function Car(brand, color) {
    this.brand = brand
    this.color = color
}

let b = new Car('Mercedes', 'white')


let s = {brand: 'Mercedes', color: 'red'}

console.log(new Car('Mercedes', 'white'))
console.log(s)

{
    const obj = {
        name: 'Tim',
        age: 35,
        say() {
            console.log(this.name + ' is ' + this.age + ' years old.');
        },
    };
    obj['say']()
}
// В функцию будут переданы 2 аргумента: 'n' и 'other'.
// Вернуть элементы в виде массива, предварительно увеличив их на 'n'.
function biggerNums(n, ...other) { // (1)
    return other.map(el => el + n); // (2)
}

console.log(biggerNums(3, 10, 2, 5, 3)); // [13, 5, 8, 6]}

{
    //linear_search.js
    const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
    let count = 0

    function linearSearch(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i
            }
        }
        return null
    }

    console.log(linearSearch(array, 1))
}
{
    //binary_search.js
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let count = 0

    function binarySearch(array, item) {
        let start = 0
        let end = array.length
        let middle
        let found = false
        let position = -1
        while (found === false && start <= end) {
            count++
            middle = Math.floor((start + end) / 2)
            if (array[middle] === item) {
                found = true
                position = middle
                return position
            }
            if (item < array[middle]) {
                end = middle - 1
            } else {
                start = middle + 1
            }
        }
        return position
    }

    console.log(binarySearch(array, 9))
    console.log(count)
}

// spread operator
function numbers(...arr) {
    return arr.every(el => typeof el === 'number')
}

// Let's build a calculator that can calculate the average for an arbitrary number of arguments.
let Calculator = {
    average: function (...arg) {
        let arr = arg
        let count = arr.reduce((acc, curr) => acc + curr, 0) / arr.length
        return count ? count : 0
    }
};

function last(...list) {
    let data = list
    console.log({}.toString.call(...data))
    if ({}.toString.call(...data) === '[object Array]') {
        let result = data[0][data[0].length - 1]
        console.log(result)
    } else if ({}.toString.call(...data) === '[object String]') {
        let result = data[0].split('')[data[0].split('').length - 1]
        result
    } else {
        let result = data[data.length - 1]
        result
    }
}

last([1, 2, 3, 4, 5])//, 5);   //-- array
last("abcde")//, "e");     //-- string
last(1, "b", 3, "d", 5)//, 5);//-- argumentsnts
// You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
// Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
const add = (...arg) => arg.reduce((acc, curr, index) => acc + (curr * (index + 1)), 0)
add(100, 200, 300)//,1400
add(3, 4, 5)// 26

// Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)
function isDivisible(...s) {
    return s.every(el => Number.isInteger(s[0] / el))
}

console.log(isDivisible(3, 3, 4))//false
console.log(isDivisible(12, 3, 4))//true
console.log(isDivisible(8, 3, 4, 2, 5))//false
// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.
function findSum(...arg) {
    if (arg.every(el => el >= 0)) {
        return arg.reduce((acc, curr) => acc + curr, 0)
    }
    return -1
}

findSum(1, 2, 3, 4); // returns 10
findSum(1, -2);    // returns -1
findSum();        // returns 0
// Write function heron which calculates the area of a triangle with sides a, b, and c.
function heron(...arg) {
    let s = (arg[0] + arg[1] + arg[2]) / 2
    return Math.sqrt(s * (s - arg[0]) * (s - arg[1]) * (s - arg[2]))
}

heron(3, 4, 5)// 6

//Метод call
let x = 10;
let obj = {x: 15};

function fun() {
    // alert(this.x);
    // alert(this);
}

fun();          // 10, [object Window]
fun.call(obj);  // 15, [object Object]

//Постановка контекста и передача в нём аргрументов
let person = {
    firstName: "John",
    lastName: "Konor",
    specialty: "юрист-консультант"
};

function fullName(param1, param2) {
    // alert(this[param1] + " " + this[param2]);
}

fullName.call(person, 'firstName', 'lastName') // John Konor
fullName.call(person, 'firstName', 'specialty') // John юрист-консультан

{
    let person = {
        firstName: "John",
        lastName: "Konor",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    let user = {
        firstName: "Max",
        lastName: "White",
    }
    // alert(person.fullName.call(user)) // MAx White
}
let car = {
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function () {
        console.log(this.registrationNumber + " " + this.brand);
    }
}
{
    let car = {
        registrationNumber: "GA12345",
        brand: "Toyota"
    }

    function displayDetails(ownerName) {
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }

    displayDetails.call(car, "Vivian")
}

clear()
let array = [-1, 0, 3, 5, 7, 9, 12]

let search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid
    while (left <= right) {
        mid = Math.floor((right - left) / 2) + left
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else if (target > nums[mid]) {
            left = mid + 1
        }
    }
    return -1
}

console.log(search(array, 9))

// You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.
function spread(func, args) {
    return func.apply(null, args)
}

// spread(someFunction, [1, true, "Foo", "bar"] )
// someFunction(1, true, "Foo", "bar")

{
    const user = {
        name: 'Joe',
    };

    function sayHi(word) {
        console.log(word + ' Hi! ' + this.name);
    }

    let funcUser = sayHi.bind(user);
    funcUser('Nice!'); // "Nice! Hi! Joe"
}
{
    const user = {
        name: 'Ivan',
        age: 30,
        introduction: function (job) {
            console.log('Name is ' + this.name);
            console.log('Age is ' + this.age);
            console.log('Job is ' + job);
        },
    };
    let say = user.introduction.bind(user);
    say('QA');

    const person = {
        name: 'Anna',
        age: 25,
    };
    user.introduction.bind(person, 'QA')();
}

String.prototype.trimAndUp = function () {
    return this.trim().toUpperCase();
}
console.log(' c a t    '.trimAndUp()); // "C A T"
console.log('   Dog'.trimAndUp()); // "DOG"

{
    String.prototype.trimSpaces = function () {
        return this.split(/\s/).join(''); // /\s/ - удаление пробелов
    };
    let str = 'a b      c d  e   ';
    let str2 = 'Hi! James Bond ! ';
    console.log(str.trimSpaces()); // "abcde"
    console.log(str2.trimSpaces()); // "Hi!JamesBond!"
}

{
    Number.prototype.add = function (num) {
        return this + num
    }
    console.log((5).add(5))
}
{
    //Калькулятор в прототипе
    Number.prototype.add = function (value) {
        return this + value;
    };
    Number.prototype.subtr = function (value) {
        return this - value;
    };
    Number.prototype.mult = function (value) {
        return this * value;
    };
    Number.prototype.div = function (value) {
        return this / value;
    };
    let num = 100;
    console.log(num.add(5)); // 105
    console.log(num.subtr(10)); // 90
    console.log(num.mult(5)); // 500
    console.log(num.div(20)); // 5
    console.log(num.add(50).div(50).mult(3).subtr(9)); // 0
}
{
    // Создать метод, который позволит вернуть сумму всех аргументов, переданных в функцию, предварительно увеличив значение каждого аргумента на значение объекта Number, к которому метод будет применен.
    Number.prototype.addAdd = function (...arg) {
        let sum = arg.map(el => el + this).reduce((acc, curr) => acc + curr, 0)
        return sum
    }

    let num2 = 5;
    console.log(num2.addAdd(1, 1, 2, 3)); // 27
}
{
    // Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password.
    // If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
    function Sleigh() {
    }

    Sleigh.prototype.authenticate = function (name, password) {
        return name === 'Santa Claus' && password === 'Ho Ho Ho!'
    };
}

function fetchData() {
    fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR")
            }
            return response.json()
        })
        .then(data => {
            console.log('Data from API')
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
}

// fetchData()

//just started new course jsAlgorithms

{
    const reverse = str => str.split('').reverse().join('')
}
//reverse without reverse method
{
    function reverse(str) {
        let arr = []
        str.split('').forEach(el => arr.unshift(el))
        return arr.join('')
    }

    console.log(reverse('hello'))
}
//reverse with reduce
{
    function reverse(str) {
        return str.split('').reduce((acc, curr) => curr + acc, '')
    }

    console.log(reverse('hello'))
}
clear()
//Knapsack problem
{
    let items = [
        {id: 'a', val: 10, w: 3},
        {id: 'b', val: 6, w: 8},
        {id: 'c', val: 3, w: 3},
    ]
    let maxWeight = 8

    function bag(items, maxWeight) {
        let result = []
        let weight = 0
        let value = 0
        for (let i = 0; i < items.length; i++) {
            if (weight + items[i].w <= 8) {
                weight += items[i].w
                result.push(items[i])
                value += items[i].val
            }
        }
        console.log(value)
        return result
    }

    console.log(bag(items, maxWeight))
}


{
    // This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
    let numbers = [1, 2, 3, 4, 5];

    Array.prototype.square = function () {
        return this.map(el => Math.pow(el, 2))
    }
    Array.prototype.cube = function () {
        return this.map(el => Math.pow(el, 3))
    }
    Array.prototype.average = function () {
        return this.reduce((acc, curr) => acc + curr, 0) / this.length
    }
    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => acc + curr, 0)
    }
    Array.prototype.even = function () {
        return this.filter(el => el % 2 === 0)
    }
    Array.prototype.odd = function () {
        return this.filter(el => el % 2 !== 0)
    }


    console.log(numbers.square())// must return [1, 4, 9, 16, 25]
    console.log(numbers.cube())   // must return [1, 8, 27, 64, 125]
    console.log(numbers.average()); // must return 3
    console.log(numbers.sum())     // must return 15
    console.log(numbers.even())// must return [2, 4]
    console.log(numbers.odd())     // must return [1, 3, 5]
}


{
    // Write a method, capitalize(), such that when the method is called on a String, only the very first letter of the string is capitalized (if it is a letter).
    // For the purposes of this Kata, the following methods are disabled:
    // toUpperCase()
    // toLowerCase()
    let str = '1history is a very special subject.  what do you think?'

    String.prototype.capitalize = function () {
        const obj = {
            'a': 'A',
            'b': 'B',
            'c': 'C',
            'd': 'D',
            'e': 'E',
            'f': 'F',
            'g': 'G',
            'h': 'H',
            'i': 'I',
            'j': 'J',
            'k': 'K',
            'l': 'L',
            'm': 'M',
            'n': 'N',
            'o': 'O',
            'p': 'P',
            'q': 'Q',
            'r': 'R',
            's': 'S',
            't': 'T',
            'u': 'U',
            'v': 'V',
            'w': 'W',
            'x': 'X',
            'y': 'Y',
            'z': 'Z',
        }
        return obj[this.split('').shift()] === undefined ? this.split('').shift() + this.split('').slice(1).join('') : (obj[this.split('').shift()] + this.split('').slice(1).join(''))
    }
    console.log(str.capitalize())
}

function twistedSum(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        let split = i.toString().split('')
        split.forEach(el => sum += Number(el))
    }
    return sum
}

console.log(twistedSum(12))

// 6kyu XD
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
function sortArray(array) {
    let arrayWithEven = []
    let arrayWithOdd = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayWithEven.push(array[i])
        } else arrayWithEven.push('')
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            arrayWithOdd.push(array[i])
        }
    }
    arrayWithOdd = arrayWithOdd.sort((a, b) => a - b)
    for (let i = 0; i < arrayWithEven.length; i++) {
        if (arrayWithEven[i] === '') {
            arrayWithEven[i] = arrayWithOdd.shift()
        }
    }
    return arrayWithEven
}

sortArray([5, 8, 6, 3, 4])// [3, 8, 6, 5, 4]
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])// [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// 6kyu
function countSmileys(arr) {
    debugger
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        let scanSmile = arr[i].split('')
        if ((scanSmile.includes(')') || scanSmile.includes('D')) && (scanSmile.includes(':') || scanSmile.includes(';'))) {
            counter++
        }
    }
    return counter
}

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))//, 1))
// 6kyu


// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//     Rules for a smiling face:
//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
//     Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
function countSmileys(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        let scanSmile = arr[i].split('')
        if ((scanSmile.length === 2 && (scanSmile.includes(')') || scanSmile.includes('D')) && (scanSmile.includes(':') || scanSmile.includes(';'))) || scanSmile.length === 3
            && (scanSmile[0] === ':' || scanSmile[0] === ';') && (scanSmile[1] === '-' || scanSmile[1] === '~') && (scanSmile[2] === ')' || scanSmile[2] === 'D')) {
            counter++
        }
    }
    return counter
}

console.log(countSmileys([]))//, 0))
console.log(countSmileys([':D', ':~)', ';~D', ':)']))//, 4))
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']))//, 2))
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))//, 1))
console.log(countSmileys([':D', ';~>', ':>', ';o)', ':>', ':->', ';)']))//, 2))
clear()
//repeat Asynchronous JavaScript nellow
{
    // setTimeout(() => {
    //     console.log('start')
    // })
    console.log('hi')
    clear()
}

{
    let test = function () {
        setTimeout(() => {
            console.log('Start of code')

            alert('Notice Me!')

            console.log('End of code')
        }, 10)
    }

    let test2 = function () {
        console.log('Now I get attention')
    }
    // test()
    // test2()

    function test1() {
        setTimeout(() => {
            console.log('1')
            setTimeout(() => {
                console.log('3')
            }, 0)
        }, 0)
        setTimeout(() => {
            console.log('2')
        }, 0)
    }

    // test1()
    const hero = {
        name: 'Super Man',
        greet: function () {
            setTimeout(() => {
                console.log('Hi, my name is', this.name)
            }, 1000)
        }
    }
    // console.log(hero.greet())
}
//repeat Asynchronous JavaScript above

//sugar syntax
function createPerson(name, age, admin) {
    return {
        name,
        age,
        isAdmin: admin
    }
}

createPerson('Vladislav', '20', true)

{
    const specialProperty = 'nationality'
    const firstName = 'John'
    const lastName = 'Doe'

    const person = {
        firstName,
        lastName,
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        },
        [specialProperty]: 'German'
    }
    console.log(person)

    function greeting(name = 'Lydia') {
        return `Hello there ${name}`
    }

    console.log(greeting('John'))
    console.log(greeting())
    {
        const person = {
            name: 'John Doe',
            age: 45
        }
        const {name, age} = person
        console.log(name, age)
    }
}

{
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }
    }

    let newUser = new User('Vladislav', 'Voloshenko')
    console.log(newUser)

    class Admin extends User {
        constructor(firstName, lastName) {
            super(firstName, lastName)
            this.role = 'admin'
        }
    }

    let newAdmin = new Admin('Will', 'Smith')
    console.log(newAdmin)
}
clear()
let hasDriversLicense = false
const passTest = true
// hasDriverLicense = true - error

{
    const jonas = {
        birthYear: 2001,
        calcAge() {
            this.age = 2021 - this.birthYear
        },
        hadDriversLicense: true,
        job: 'teacher',
        firstName: 'Jonas',
        lastName: 'Scmedtmann',
        getSummary() {
            return `${this.firstName} is a ${this.age}-year old ${this.job},
            and he has ${this.hadDriversLicense ? 'a ' : 'no'} driver's license`
        }
    }
    // console.log(jonas.calcAge())
    // console.log(jonas.age)
    // console.log(jonas.getSummary())
}
//--------------------------------------------------------------------------------------------------------------------------------------------
// that's better than notepad, so i decided to write here my (text), WARNING: u will find much mistakes!!!                                   |
// JS is High-level programing language - developer does not have to worry about manage resources manually everything happens automatically  |
// Prototype-based object-oriented: almost everything in JavaScript is an object except for primitive values                                 |
// Dynamically-typed language, but if you wanna use js with types, you can always look into TypeScript                                       |
// Single-Threaded: JS runs in one single thread, so it can do one thing at a time -> But we have non-block behavior. By using an event-loop |
// takes long running tasks - executes them in the background, and puts them back in the main thread once they are finished.                 | :)
//-------------------------------------------------------------------------------------------------------------------------------------------- <3
console.log(this)

const calcAge = function (birthYear) {
    console.log(2021 - birthYear)
    console.log(this) //undefined with strict mod
}
calcAge(2001)

const calcAgeArrow = (birthYear) => {
    console.log(2021 - birthYear)
    console.log(this) //window (parent's) cuz arrow function doesn't get its own disc keyword
}
calcAgeArrow(2001)
clear()

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this)
        console.log(2037 - this.year)
        // solution 1
        // const self = this
        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996)
        // }
        // isMillenial()

        // solution 2
        const isMillenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial()
    },
}
jonas.calcAge()

const matilda = {
    year: 2017
}
matilda.calcAge = jonas.calcAge
matilda.calcAge()

const f = jonas.calcAge
// f()  undefined
// var a = 2 in global object
console.log(this)
jonas.calcAge()

const addExpr = function (a, b) {
    console.log(arguments)
}
addExpr(1, 2, 3)

const addArrow = (a, b) => console.log(arguments)

// addArrow(1,2,4,23) error

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

const marriedJessica = {...jessica}
const jessicaCopy = Object.assign({}, jessica)
console.log(jessicaCopy)
marriedJessica.lastName = 'Devis'
console.log('Before marriage:', jessica)
console.log('After marriage', marriedJessica)

// The for-of Loop
{
    const comeNumbers = [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
    for (const num of comeNumbers) {
        for (const newNum of num) {
            console.log(newNum)
        }
    }
    for (const nums of comeNumbers.entries()) {
        console.log(nums)
    }
}

// DATA STRUCTURE: SET

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
])
console.log(ordersSet)
console.log(ordersSet.size)
ordersSet.add('sushi')
console.log(ordersSet)
console.log(ordersSet.has('Pasta'))

ordersSet.delete('Risotto')
console.log(ordersSet)

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']

const uniqStaff = [...new Set(staff)]
console.log(uniqStaff)
clear()
// Data Structure: MAP

const rest = new Map()

rest.set(true, 'we are open :)')
    .set(false, 'we are closed(')
    .set('open', 11)
    .set('close', 23)
    .set('name', 'Clasico Italiano')

const time = 12
console.log(rest.get(time >= rest.get('open') && time < rest.get('close') ? true : false))

rest.set([1, 2], 'Test')
console.log(rest)
console.log(rest.get([1, 2]))  //undefined because different references

let arr2 = [2, 2]
rest.set(arr2, 'Tes2t')
console.log(rest.get(arr2)) // here is:)


const newMap = new Map()
newMap.set(1, 'one')
newMap.delete('one') //nothing
newMap.delete('1') //nothing
newMap.delete(1) //deleted
console.log(newMap)
{
    let map = new Map();

    map.set("name", "John");

    let keys = [...map.keys()]
    console.log(keys)
}

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable)
        console.log('Inner Variable: ' + innerVariable)
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct!'],
    [false, 'Try again!!'],
])

console.log(question)
// Quiz app
console.log(question.get('question'))
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}
// const answer = Number(prompt('Your answer'))

// console.log(question.get(answer === 3))

//Convert map to array
const newArray = [...question]
console.log(question.entries())
console.log(question.keys())
console.log(question.values())
clear()

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
])

const allEventNoDuplicates = [...new Set([...gameEvents.values()])]
console.log(allEventNoDuplicates)
gameEvents.delete(64)
console.log(gameEvents)

const averageMinutesOfEvents = [0, ...gameEvents.keys()]
let countMinutes = 0
for (let i = 0; i < averageMinutesOfEvents.length - 1; i++) {
    countMinutes += (averageMinutesOfEvents[i + 1] - averageMinutesOfEvents[i])
}
console.log(`An event happened, on average, every ${Math.floor(countMinutes / averageMinutesOfEvents.length)} minutes`)

let eventsFirstOrSecondHalf = new Map()
for (const [key, event] of gameEvents) {
    if (key < 45) {
        eventsFirstOrSecondHalf.set(`[FIRST HALF] ${key}`, event)
    } else if (key >= 45) {
        eventsFirstOrSecondHalf.set(`[SECOND HALF] ${key}`, event)
    }
}
console.log(eventsFirstOrSecondHalf)
clear()

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
}
// createBooking(1)
// createBooking(2,4)

{
    const flight = 'LH234'
    const jonas = {
        name: 'Jonas Schmedtmann',
        passport: 24739479284
    }

    const checkIn = function (flightNum, passenger) {
        flightNum = 'LH999'
        passenger.name = 'Mr.' + passenger.name

        if (passenger.passport === 24739479284) {
            // alert('Checked in')
        } else {
            // alert('Wrong passsport!')
        }
    }
    checkIn(flight, jonas)
    console.log(flight)//flight is primitive and don't will changed
    console.log(jonas.name)//jonas.name have  reference and  will changed}
    clear()
}

const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase()
}
// console.log(oneWord('h i  '))

const upperFirstWord = function (str){
    return str.split(' ')[0].toUpperCase() + ' ' + str.split(' ').slice(1).join(' ')
}

// console.log(upperFirstWord('vladislav is my name'))

// Higher-order function
const transformer = function(str,fn){
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)

    console.log(`Transformed by ${fn.name}`)
}

// transformer('JavaScript is the best! React too:)', upperFirstWord)

{
    const greet = greeting => {
        return name => {
            console.log(`${greeting} ${name}`)
        }
    }
    const greeterHey = greet('Hey')

    greeterHey('Jonas')
    greeterHey('Steven')

    greet('Hello')('Alica')
}

{
    const betterGreet = greeting => name => console.log(`${greeting} ${name}`)

    betterGreet('Hi')('Janeta:)') // I remember you >:)
}
clear()

//something wrong with project 3 of work, so i decided do commit here, cuz i worked today:)



