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