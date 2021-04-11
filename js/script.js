// /*
// // Основы JavaScript
// alert("Я JavaScript!")
//
// // комментарий #1
// /!*комментарий*!/ alert( 'Мир' ); /!*#2*!/
//
// const bigInt = 1234567890123456789012345678901234567890424n;
// alert(typeof bigInt + bigInt)
//
// alert( `результат: ${1 + 2}` ); // результат: 3
//
// let name = "Ilya";
//
// alert( `hello ${1}` ); // hello 1
//
// alert( `hello ${"name"}` ); // hello name
//
// alert( `hello ${name}` ); // hello Ilya
//
// // Создайте страницу, которая спрашивает имя у пользователя и выводит его.
//
// personName = prompt("Как тебя зовут?");
// alert(`Тебя зовут ${personName}`)
// */

/////////////////////////////////////////////////////////////////////////////////
// console.log('Let it snow!\nLet it snow!\nLet it snow!')

// console.log('hello world')
//
// const gold = 1.618;
// const unixTime = 1970;
// let a = 4.25;
// let _ = 4
// let clas = 20
// // camelCase
// let expectedResult;
// let rightBorderColor;
// let priceOfToy;
//
// // console.log(typeof a)
// // console.log(typeof unixTime)
// let NaNumber = 'a' * 2
//
// console.log(NaNumber)
//
// let num = 1 % 2
// console.log(num)
//
// let inf = 1/0
// let infMore = 1/-0
// console.log(inf)
// console.log(infMore)
// console.log(inf+infMore)
// // localcoding.us
// {
//     let a = 2
//     a++
//     console.log(a)
//     ++a
//     console.log(a)
//     --a
//     console.log(a)
// }
// {
//     let a = -1 / 0;
//     console.log(a)
// }
// {
//     const a = 4;
//     const b = 9;
//     const c = 4
//     const p = a + b + c
//     console.log(p)
// }

{
    let a = 'Hello';
    console.log(a[0] + '---------\n' + a[1] + '---------\n' + a[2] + '---------\n' + a[3] + '---------\n' + a[4] + '---------\n')
    console.log(a[a.length - 1])
}


{
    const name = 'McDonald'
    const sign = name[0] + '!'
    console.log(sign)
}
{
    const question = 'How do you do?';
    const length = question.length
    console.log(length)
}
{
    const str = 'Jonh';
    firstSymbol = str[0]
    console.log(firstSymbol)
}
const firstWord = 'Hello';
const secondWord = 'My';
const thirdWord = 'Future';
const greeting = firstWord + ' ' + secondWord + ' ' + thirdWord + "!";
console.log(greeting)

{
    const cState1 = 'California';
    const cState2 = 'Colorado';
    const cState3 = 'Connecticut';
    const threeCStates = cState1 + ',' + cState2 + ',' + cState3;
    console.log(threeCStates)
}
{
    console.clear()
    a = null + 0 === null
    console.log(a)
}
{
    const isStudy = true
    const typeOfIsStudy = typeof isStudy
    console.log(typeOfIsStudy)
}
{
    const a = 2
    const b = 3
    const isABiggerThanB = a > b
    console.log(isABiggerThanB)
}
{
    console.clear()
    const a = 5
    const b = 3
    const isAEqulsB = a === b
    console.log(isAEqulsB)
}
{
    const a = "2"
    const b = 2
    const isAEqualsB = a == b
    console.log(isAEqualsB)
}

let Nu = 10

function Virus() {
    Nu--
    console.log(`lag will in ${Nu}s`)
    if (Nu === 0) {
        for (i = 1; i > 0; i++) {
            console.log("hi")
        }
    }
}

// setInterval(Virus, 1000) //dont use it:)
{
    const a = 'bab';
    const b = 'aba';
    const isABiggerThanB = a > b;
    console.log(isABiggerThanB)
}

{
    const a = null;
    const b = undefined;
    const isStrictEqual = a === b;
    const isEqual = a == b
    const strictResult = 'false'
    const notStrictResult = 'false';
    console.log(isEqual)
}

{
    const str = 'Andrew';
    const firstSymbol = str[0];
    const isStartWithA = firstSymbol === 'A';
    console.log(isStartWithA)
}
{
    const str = "vladislav"
    const firstSymbol = str[0]
    const lastSymbol = str[str.length - 1]
    const areTheSame = firstSymbol === lastSymbol
    console.log(areTheSame)
}

{
    let a = undefined

    console.log(typeof a)
    console.log(undefined + 1)
}
{
    const unknown = undefined
    const sum = unknown + 100
    const typeOfSum = typeof sum
    // const result = "NaN"
}
{
    const a = null
    const b = ""
    const c = a === b
    console.log(c)
    const r = 1
    console.log(a+r)
}
{
    const money = null;
    const extra = 1000;
    const result = money + extra;
    const type = typeof result;
    console.log(type)
}
{
    const empty = null
    const typeOfEmpty = typeof empty
    console.log(typeOfEmpty) //error of js!!
}
{
    const empty = null
    const strictEqualToZero = empty === 0
    const equalToZero = empty == 0
    console.log(strictEqualToZero,equalToZero)
}
{
    const strictEqual = null === null
    const equal = null == null
    console.log(strictEqual,equal)
}
{
    const isNullEqualEmpty = null === ""
    const isNull = null == ""
    console.log(isNullEqualEmpty,isNull)
}
{
    let name = 'Bob'; 		 // "string"
    let age = 28;			// "number"
    let b = 1234567890123456789012345678901234567890n;  //"bigint"
    let isAdult = age > 18;	// "boolean"
    let isMarried = true;   // "boolean"
    let address;			// "undefined"
    let salary = null;		// "object"
    const_ = 'null';
    console.log(const_)
    console.log(2 + "2")
}
{
    const word = "Apatity"
    const cut = word[0] + '-' + word[word.length -1]
    console.log(cut)
}
{
    const days = 364
    const hours = days * 24
    const minutes = hours * 60
    const seconds = minutes * 60
    console.log(seconds)
}
{
    const zero = null
    const power = zero ** 2
    const type = typeof power
    console.log(type)
}
{
    let name;
    let login = "";
    const areTheSame = name == login;
    console.log(areTheSame)
}
{
    const price = 7
    const count = 10
    const message = `The cost of ${count} balls is equal to ${count*price} dollars`
    console.log(message)
}
{
    let n = 2;
    n += 5;          //  n = n + 5
    n *= 2;          //  n = n * 2
    console.log(n);  // 14
}
{
    console.log(+true);  // 1
    console.log(+'2');   // 2
}
{
    let apples = '2';
    let oranges = '3';
    console.log(apples + oranges);   // "23"
    console.log(+apples + +oranges); // 5
}
{
    let counter = 2;
    counter--;             // counter = counter - 1
    console.log(counter); // 1
}
{
    let counter = 1;
    let a = counter++;
    console.log(a); // 1
}
{
    console.log(2 - '1');   // 1
    console.log('6' / '2'); // 3
}
{
    let a = -5
    console.log(+a)
}
{
    const temp = 30
    const opposite = -temp
    console.log(opposite)
}
{
    const square = 200
    const side = square ** 0.5
    const diagonal = (2 * side **2) ** 0.5
    console.log(diagonal)
}
{
    const perimeter = 1000
    const side = perimeter / 3
    console.log(side)
}
{
    const a = 3
    const b = 5
    const c = (a ** 2 + b ** 2) ** 0.5
    console.log(c)
}
{
    const coin = true
    const value = +coin
    console.log(value)
}
{
    const zero = null
    const value = +zero
    console.log(value)
}
{
    const a = '8'
    const b = '12'
    const sum = +a + +b
    console.log(sum)
}
{
    const side = 10
    const area = (side ** 2 * 3 ** 0.5)/ 4
    console.log(area)
}
{
    let age = 13
    age += 3
    console.log(age)
}
{
    let a = '-13';
    console.log( - + a);
}
{
    const radius = 10
    const pi = 3.14
    const area = pi * radius ** 2
    console.log(area)
}
{
    const a = '2'
    const b = '3'
    const aPlusB = a + b
    const bPlusA = b + a
    const isEqual = aPlusB  == bPlusA
    console.log(isEqual)
}
{
    const a = '12'
    const b = '28'
    const difference = +a - +b
    console.log(difference)
}
{
    const str1 = 'Everything'
    const str2 = "is"
    const str3 = "beautiful"
    const message = str1 + " " + str2 + " " + str3 + "!"
    console.log(message)
}
{
    let d = 2 * 2 + (3 - +'1');
    console.log(d)
}
//////////////////////////////
// y = y + x; равносильно y += x;
// y = y - x; равносильно y -= x;
// y = y * x; равносильно y *= x;
// y = y % x; равносильно y %= x;
// y = y / x; равносильно y /= x;
//////////////////////////////
{
    let a;
    let b = 2;
    let c = 3 - (a = b + 1);
    console.log(c)
}
{
    let num = 453;
    let last = num % 10;
    console.log(last); // 3
    console.log( 4 ** (1/2) ); // 2 (извлечение квадратного корня)
    console.log( 8 ** (1/3) ); // 2 (извлечение корня третьей степени)
}
//-2 ** 2;   // Это некорректно в JavaScript
//-(2 ** 2); // -4 в JavaScript
{
    const a = 30
    const remainder = a % 2
    const isZero = remainder === 0
    console.log(isZero)
}
{
    const b = 33
    const remainder = b % 2
    const isOne = remainder === 1
    console.log(isOne)
}
{
    const a = 12
    const square = a ** 2
    console.log(square)
}
{
    const volume = 3
    const edge = volume ** (1/3)
    console.log(edge)
}
{
    const bookQuantity = 3
    const shelves = 5
    const result = bookQuantity ** shelves
    console.log(result)
}
{
    const number = 101
    const power = 0
    const result = number ** power
    console.log(result)
}
// "modify-in-place"
{let x = 7;
    let y = x++; /* значение x увеличивается на единицу x = 8,
                но возвращается старое значение y = 7 */}
{
    let x = 7;
    let y = ++x; /* значение x увеличивается на единицу x = 8,
                возвращается новое значение y = 8 */
}

// ++a Инкремент, префиксная форма
// a++ Инкремент, постфиксная форма
{
    let user = {
        name: 'Bob',
        age: 39,
        isAdult: true,
        salary: null,
    };
    console.log(user);
}
{
    let user = {
        name: "John",
        age: 30,
        "likes programming": true,  // имя свойства из нескольких слов должно быть в кавычках
    }
    //console.log(user.likes programming);  // появится ошибка
    console.log(user['likes programming']);  // true
}
{
    let a = null
    console.log(typeof a)
}
{
    const school = {
        '1a': 18,
        '1b': 20,
        '2a': 21,
        '2b': 22,
    }
    console.log(school['1a']);   // 18
}
{
    const person = {
        name : 'Alice',
        "likes dogs": true,
        "likes cats": false,
    }
}
{
    const user = {
        name: "Bob",
        hasJob: true,
        salary: 80000,
    }
    const money = user.salary
    console.log(money)
}
{
    const husband = {
    name: "Bob",
        salary: 95000,
}
    const wife = {
        name: "Alice",
        salary: 90000
    }
    income = husband.salary + wife.salary
    console.log(income)
    const obj = new Object();
    console.log(obj)
}
{
    let car = {}; // задание пустого объекта car
    console.log(car)
}
{
    let person = {}; // задание пустого объекта person
    person.name = 'Bob';
    console.log(person)
}
{
    const animal = {
        name: "bear",
    }
    animal.class = "mammal"
}
{
    const animal = {
        name: "gorilla",
        color: "brown"
    }
    animal.color = 'black'
}
{
    const car = {
        make: "Ford",
        model: "Mustang",
        year: 2015
    }
    delete car.year
    console.log(car)
    console.log(+null)
}
{
    let user = {
        name: 'Bob',
        age: 30,
        isStudent: true
    }
    if  (user.age) console.log ('Yes');  //'Yes'

}
{
    let user = {
        name: 'Bob',
        age: 30,
        isStudent: true
    }
    console.log(user.lala)
}
{
    let menuPrice = {};
    menuPrice.coffee = 5;
    menuPrice.tea = 3;
    menuPrice['type'] = 'drink';
    console.log(menuPrice)
}
{
    const obj = { 'apple': 40,
        'orange': 25,
        'mango': 50, }
    const hasOrange = Boolean(obj.orange)
    console.log(hasOrange)
}
{
    const obj = { 'apple': 40, 'orange': 25, 'mango': 50, }
    const hasApple = !!obj.apple
    console.log(hasApple)
}
{
    const car = { 'make': 'Toyota',
        'model': 'Camry',
        'year': 2016, }
    const hasModel = car.hasOwnProperty('model')
    console.log(hasModel)
}
{
    const report = { 'math': 5, 'history': 4, 'science': 5, }
    const hasMath = 'math' in report
    console.log(hasMath)
}
{
    const report = { 'math': 5, 'geo': 4, 'science': 5, }
    const hasHistory = 'history' in report
    console.log(hasHistory)
}
{
    const book = {
        author: 'Margaret Mitchell',
        style: 'novel',
        title :'Gone with the Wind',
        year: 1936,
    }
    const hasAuthor = 'author' in book
    const hasTitle= 'title' in book
    const hasStyle= 'style' in book
    const hasYear= 'year' in book
    const hasPages = 'pages' in book
    console.log(hasAuthor,hasTitle,hasPages)
}
{
    const trip = {
        milesPerDay : 400 ,
        gallonsPerMile: 0.02,
        days: 5
    }
    const totalMiles = trip.milesPerDay * trip.days
    const totalGallons = trip.milesPerDay / trip.days
    console.log(totalMiles,totalGallons)
}
{
    shop1 = { count: 900, price: 1.4, }
    shop2 = { count: 1200, price: 1.3,}
    const total = shop1.count * shop1.price + shop2.count * shop2.price
    console.log(total)
}
{
    const  school = {
        name: 'Fox Trail Elementary',
        boys: 543,
        girls: 487
    }
    const count = school.boys + school.girls
    console.log(count)
}
{
    collection = { cosmos: 134, cities: 255, fishes: 322, animals: 290,}
    const total = collection.cosmos + collection.cities + collection.fishes + collection.animals
    console.log(total)
}
{
    trip = { 'teachers': 4, '9a': 15, '9b': 17, '10a': 12, }
    const count = trip['teachers'] + trip['9a'] + trip['9b'] + trip['10a']
    console.log(count)
}
{
    gifts = { 'puzzles': 30, 'dolls': 14, 'cars': 20, 'lego': 15, }
    count = gifts['puzzles'] + gifts['dolls'] + gifts['cars'] + gifts['lego']
}
{
    ship1 = { name: 'MSC Seaview', passengers: 4050, },
        ship2 = { name: 'Costa Magica', passengers: 2716, }
    total = ship1.passengers + ship2.passengers
    console.log(total)
}
{
    const a = true
    console.log(a)
}
{
    const num = 12
    const isPositive = num > 0
    console.log(isPositive)
}
{
    const num = 0
    const isNonNegative = num === 0
    console.log(isNonNegative)
}
{
    const a = 3
    const b = 5
    const isNotEqual = a !== b
    console.log(isNotEqual)
}
{
    const a = 5
    const b = 4
    const isAGreaterThanB = a > b
    console.log(isAGreaterThanB)
}
{
    const num = 34
    const isEven = num % 2 === 0
    console.log(isEven)
}
{
    const num = 33
    const isOdd = num % 2 !== 0
}
{
    const num = 5
    const isDivided5 = num % 5 === 0
    console.log(isDivided5)
}
{
    const a = 4
    const b = 20
    const isATimesB  = a % b === 0
    console.log(isATimesB)
}
{
    const a = 3
    const b = 3
    const isDifferenceEven  = (a - b) % 2 === 0
    console.log(isDifferenceEven)
}
{
    const day = 5
    const isWeekend = day === 6 || day === 7
    console.log(isWeekend)
}
{
    const toBe = true
    const notToBe = false
    const answer = toBe || notToBe
    console.log(answer)
}
{
    const month = 6
    const isWinter = month === 6 || month === 8
    console.log(isWinter)
}
{
    const age = 34
    const isVisaFree = age <= 12 || age >=65
    console.log(isVisaFree)
}
{
    const number = 34
    const isLucky = number % 3 === 0 || number % 5 === 0
    console.log(isLucky)
}
{
    const size = ('XS', 'X', 'M', 'L', 'XL', 'XXL')
    const isFit = size === 'X' || size === "XS"
    console.log(typeof  size)
}
{
    const age = 23
    const isNotSchoolAge = age < 6 || age > 18
    console.log(isNotSchoolAge)
}
{
    const x = -2
    const a = 0
    const b = 1
    const notIncluded = x < a || x > b
    console.log(notIncluded)
}
{
    const a = 10
    const b = -3
    const arePositive = a > 0 || b > 0
    console.log(arePositive)
}
{
    const a = 3
    const b = 4
    const areNonZeros = a !== 0 || b !== 0
    console.log(areNonZeros)
}
{
    const a = -3
    const b = 3
    const result = a + b === 0 || a * b === 0
    console.log(result)
}
{
    const phone = '1234567890'
    const isPhoneCorrect = phone.length === 11 || phone.length === 12
    console.log(isPhoneCorrect)
}
{
    const month = 7
    const isSummer =  month >= 6 || month <= 8
    console.log(isSummer)
}
{
    const day = 4
    const isWorkDay = day >= 1 || day <= 5
    console.log(isWorkDay)
}
{
    const number = -3
    const isOneDigitNegative = number >= -9 || number <= -1
    console.log(isOneDigitNegative)
}
{
    const number = 55
    const isTwoDigitPositive = number >= 10 && number <= 99
    console.log(isTwoDigitPositive)
}
{
    const number = - 22
    const isTwoDigitNegative = number >= -99 && number<= 10
    console.log(isTwoDigitNegative)
}
{
    const number = 33
    const isPositiveEven = number % 2 === 0 && number > 0
    console.log(isPositiveEven)
}
{
    const number = 4
    const isPositiveOdd = number % 2 !== 0 && number > 0
    console.log(isPositiveOdd)
}
{
    const x = 23
    const a = 20
    const b = 30
    const isBelongs = x >= a && x <= b
    console.log(isBelongs)
}
{
    const name = "Andey"
    const isCorrect = name[0] === 'A' && name.length === 5
    console.log(isCorrect)
}
{
    const password = 'qwerty1234'
    const isPasswordCorrect = password.length >= 8 && password.length <= 20
    console.log(isPasswordCorrect)
}
{
    const word = 'Vladislav'
    const isCorrect = word.length === 4 && word[0] === word[word.length -1]
    console.log(isCorrect)
}
{
    const x = 3
    const y = 5
    const isForth = x > 0 && y < 0
    console.log(isForth)
}
{
    const a = 3
    const b = 5
    const haveDifferentSigns = a > 0 && b < 0
    console.log(haveDifferentSigns)
}
{
    const a = 5
    const b = 4
    const haveTheSameSign = a < 0 && b < 0 || a > 0 && b > 0
    console.log(haveTheSameSign)
}
{
    const x = 54
    const y = 68
    const isFirst = x > 0 && y > 0
    console.log(isFirst)
}
{
    const x = 3
    const y = 3
    const z = 4
    const isCube = x === y && y === z
}
{
    const a = 54
    const b = 54
    const angle = 90
    const isSquare = a === b && angle === 90
    console.log(isSquare)
}
{
    console.log( !true ); // false
    console.log( !0 ); // true
    console.log( !!'string' ); // true
    console.log( !!null ); // false
}
{
    const value = 0
    const result = !value
    console.log(result)
}
{
    const value = false
    const result = !value
    console.log(result)
}
{
    const value = 1
    const result = !value
    console.log(result)
}
{
    const value = "Whats up"
    const result = !value
    const value2 = null
    const result2 = !value2
    const value3 = ""
    const result3 = !value3
    const value4 = undefined
    const result4 = !value4
    console.log(result,result2,result3,result4)
    const value5 = 0
    const result5 = !!value5
    console.log(result5)
    const value6 = 1
    const result6 = !!value6
    console.log(result6)
}