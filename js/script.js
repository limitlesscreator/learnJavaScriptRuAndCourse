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

{
    let smalles = (arg) => {
        console.log(arg)
    }

    smalles([34, 15, 88, 2])

// freeCodeCamp
    console.log("Alan Peter".length);


//local coding us

// Test.assertEquals имеет параметры: название функции с передаваемыми параметрами
// ожидаемый результат
// необязательное сообщение, которое появляется в результате несовпадения реального и ожидаемого результатов

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
    {
        let a = "code";
        let b = "wa.rs";
        let name = a + b;
    }
// 8kyu
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create
// the most creative hello world you can think of?
//     What is a "hello world" solution you would want to show your friends?
// Write a function "greet" that returns "hello world!"
    {
        function greet() {
            return 'hello world!'
        }
    }
//8kyu
    {
        function greet(name) {
            return "Hello, " + name + " how are you doing today?"
        }

        greet('Vlad')
    }
    {
        function helloWorld() {
            const str = 'Hello World!'
            console.log(str)
            return str
        }

        helloWorld()
    }
    {
        // 8kyu
        // Complete the function body for this hello() function so that it takes one argument (person, a string)
        // and returns a string saying hello to that person. The result should be formatted so that when you call the function like this:
        //
        // hello "Grae"
        // you return a string that looks like this:
        //
        // "Hello, Grae"
        function hello(name) {
            let str = 'Hello, ' + name
            return str
        }

        hello('Mike')
    }
    {
        function happyBirthday(name) {
            return 'Happy birthday to you' + '\n' + "Happy birthday to you" + '\n' + "Happy birthday dear " + name + '\n' + "Happy birthday to you.";
        }
    }
    {
        function greetings(name) {
            return `Hi ${name}! How are you?`
        }
    }
    {
        console.log(1 % 0)
        console.log(+'+1')
        console.log(+1)
        console.log(2 ** 2 ** 3)
        // console.log(a = 5++) doesn't work
        let x = 4

        // --(--x);
        function evenOrOdd(num) {
            if (num % 2 === 0) {
                return "Even"
            } else {
                return "Odd"
            }
        }

        function triangle(a, b, c) {
            function triangle(a, b, c) {
                let perimeter = a + b + c
                let p = (a + b + c) / 2
                let area = (p * (p - a) * (p - b) * (p - c)) ** 0.5
                return [perimeter, area]
            }
        }

    }
    {
        function expression(x) {
            let y = 3 * (x ** 6) - 6 * (x ** 2) - 7
            return y
        }
    }
    {
        function parallelepiped(a, b, c) {
            let v = a * b * c
            let s = 2 * (a * b + b * c + a * c)
            return [v, s]
        }
    }
    {
        function equation(a, b) {
            let x = -b / a
            return x
        }

        function opposite(num) {
            return -num
        }

        function centigrade(tempF) {
            let tc = (tempF - 32) * (5 / 9)
            console.log(Math.round(tc))
        }

        centigrade(19)
        {
            function plusMinusOne(number) {
                let minus = number - 1
                let plus = number + 1
                console.log([plus, minus])
            }

            plusMinusOne(2)
        }
        {
            function fahrenheit(tempC) {
                let result = tempC * (9 / 5) + 32
                return Math.round(result)
            }
        }
        {
            function costOfSweets(x, y, cost) {
                let result = (y * cost) / x
                return result
            }
        }
        // here
        {
            function fourOperations(a, b) {
                return [a + b, a - b, a * b, a / b]
            }
        }
        {
            function areaComparison(r, a) {
                let SoFSquare = a ** 2
                let SoFCircle = Math.PI * (r ** 2)
                if (SoFCircle > SoFSquare) {
                    return ('circle')
                } else if (SoFSquare > SoFCircle) {
                    return ('square')
                } else if (SoFSquare === SoFCircle) {
                    return ('the same')
                }
            }

            areaComparison(2, 5)
        }
        {
            function cube(edge) {
                let v = edge ** 3
                let s = 6 * edge ** 2
                console.log([v, s])
            }

            cube(1)
        }
        {
            function changeValues(a, b) {
// your code will be here
            }

            changeValues(1, 2)
        }
        {
            let a = 5, b = 6;
            [a, b] = [b, a];
            console.log(`${a} ${b}`);
        }
        {
            function time(hour, minutes, seconds) {
                let h = hour * 60 * 60
                let m = minutes * 60
                let s = seconds
                let result = h + m + s
            }

            {
                function breakChocolate(n, m) {
                    if (n > 0 && m > 0) {
                        return n * m - 1;
                    } else {
                        return 0
                    }
                }
            }
        }
    }
    {
        function root(x, n) {
            let result = (x) ** (1 / n)
            console.log(result)
        }

        root(6.25, 2)
    }
    {
        function converter(mpg) {
            let gallon = mpg / 4.54609188
            let litres = gallon * 1.609344
            console.log(Number(litres.toFixed(2)))
        }

        converter(30)
    }
    {
        // Given an array of 4 integers
        // [a,b,c,d] representing two points (a, b) and (c, d),
        // return a string representation of the slope of the line joining these two points.
        //
        // For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
        //
        // a:x1
        // b:y1
        // c:x2
        // d:y2
        // Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope
        function slope(points) {
            let x = points[2] - points[0]
            let y = points[3] - points[1]
            let slope = y / x
            if (slope === -Infinity || slope === Infinity || x === 0 || x === '0') {
                return ('undefined')
            } else {
                return (String(slope))
            }
        }

        slope([19, 3, 20, 3])
        {
            // ' equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
            //     When you have finished the work, click "Run Tests" to see if your code is working properly.
            //     In the end, click "Submit" to submit your code pass this kata.
            var v1 = 50;
            v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250

            function equal1() {
                var a = v1
                var b = v1
                return a + b;
            }

//Please refer to the example above to complete the following functions
            function equal2() {
                var a = v3  //set number value to a
                var b = v1  //set number value to b
                return a - b;
            }

            function equal3() {
                var a = v1  //set number value to a
                var b = v5  //set number value to b
                return a * b;
            }

            function equal4() {
                var a = v4    //set number value to a
                var b = v5  //set number value to b
                return a / b;
            }

            function equal5() {
                var a = v6 //set number value to a
                var b = v3  //set number value to b
                return a % b;
            }

            {
                console.clear()

                function howMuchILoveYou(nbPetals) {
                    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']

                    if (nbPetals > 0) {
                        nbPetals %= 6
                        if (nbPetals === 1) {
                            return arr[0]
                        }
                        if (nbPetals === 2) {
                            return arr[1]
                        }
                        if (nbPetals === 3) {
                            return arr[2]
                        }
                        if (nbPetals === 4) {
                            return arr[3]
                        }
                        if (nbPetals === 5) {
                            return arr[4]
                        }
                        if (nbPetals === 6) {
                            return arr[5]
                        }
                    }
                    if (nbPetals === 0) {
                        return arr[5]
                    }

                }

                //must to fix tomorrow
                console.log(howMuchILoveYou(0))
            }
        }
    }
    {
        console.clear()

        // Seats in Theater
        function seatsInTheater(nCols, nRows, col, row) {
            return (nRows - row) * (nCols - col + 1)
        }

        function arrowArea(a, b) {
            return a * b / 4
        }

        function perimeterSequence(a, n) {
            let result = 0
            let numbers = []
            for (let i = 0; i <= n; i++) {
                numbers[i] = i + i
            }
            numbers.shift()
            for (let i = 0; i < numbers.length; i++) {
                result += numbers[i]
            }
            console.log(result)
        }

        perimeterSequence(1, 3)
        // The function takes in 2 inputs x and y, and should return x to the power of y
        // Simple, right? But you're NOT allowed to use Math.pow();
        // Obs: x and y will be naturals, so DON'T take fractions into consideration;
        function power(x, y) {
            console.clear()
            let total = 1
            if (y === 0) {
                return 1
            } else {
                total = x
                for (let i = 1; i < y; i++) {
                    total *= x
                }
                console.log(total)
            }
        }

        power(7, 6)

    }
///here
    {
        function otherAngle(a, b) {
            return 180 - a - b;
        }

        function angle(n) {
            return (n - 2) * 180
        }

        function maxMultiple(divisor, bound) {
            console.clear()

            let result = bound % divisor
            let finalResult = bound - result
            console.log(finalResult)
        }

        maxMultiple(2, 7)
    }
// number (числа и специальные значения: Infinity, -Infinity и NaN);
// const array = [1, 2, 3];  // "object"
// let obj = {name: "Bob"}; // "object"
// let data = new Date(); // "object"
    console.log(typeof [])
    console.log(typeof NaN)
    console.log(typeof Infinity)
    console.log(typeof (' ' + 1))
    console.log(typeof '123' > typeof 123);

    function typeOfArgument(value) {
        return typeof value
    }

    function numbersIncrement(value) {
        if (typeof value === 'number') {
            return ++value
        } else {
            return 'It is not a number'
        }
    }

    function isThereAString(value1, value2) {
        if (typeof value1 === 'string' || typeof value2 === 'string') {
            return "String received"
        } else {
            return "There are no strings"
        }
    }

    function booleanTranslate(value) {
        if (typeof value === "boolean") {
            if (value === true) {
                return "Truth"
            } else if (value === false) {
                return "Lie"
            } else if (value > 1) {
                return "Not a boolean value"
            }
        } else {
            return "Not a boolean value"
        }
    }

    function typeOfSum(val1, val2, val3) {
        console.clear()
        let result = val1 + val2 + val3
        console.log(typeof result)
    }

    typeOfSum(3, 3, '5')

    function bugsFixing(value) {
        if (typeof value === 'number') {
            return value *= 2;
        } else if (typeof value === 'string') {
            return value + '!'
        } else return 'Wrong value';
    }

    function countNumbers(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                result++
            }
        }
        return result
    }

    countNumbers([2, 6, 'one'])

    function cookie(x) {
        console.clear()
        if (typeof x === 'string') {
            return ("Who ate the last cookie? It was Zach!")
        } else if (typeof x === 'number') {
            return ('Who ate the last cookie? It was Monica!')
        } else {
            return "Who ate the last cookie? It was the dog!"
        }
    }

    function isUndefined(value) {
        if (typeof value === 'undefined') {
            return true
        } else {
            return false
        }
    }

    function myFirstKata(a, b) {
        if (typeof (a) === "number" && typeof (b) === "number") {
            return (a % b) + (b % a);
        } else if (a === true && b === true) {
            return false
        } else if (a === false && b === false) {
            return true
        } else {
            return false
        }

    }

    myFirstKata(3, 3)
// here
    console.log('10' + '20')
    console.log(Number(0))
    console.log(Number(undefined))
    console.log(Number(null))
    console.log(Number(false))
    console.log(Number('0'))
    console.log(Number('one'))
    console.log(+undefined)
    console.log(Number('5,2'))
    console.log(Boolean(null))
    console.log(Boolean(NaN))
    console.log(!!undefined)
    console.log(!![0])

    function numberToString(num) {
        return String(num)
    }

    function numberToString(num) {
        return '' + num
    }

    function valueToNumber(value) {
        return +value
    }

    function valueToNumber(value) {
        return Number(value)
    }

    function clear() {
        console.clear()
    }

    function valueToBoolean(value) {
        return !!value
    }

    function arithmeticExpression(a, b) {
        let c = a + b
        return `${a} + ${b} = ${c}`
    }

    function differenceOfStr(a, b) {
        return String(+a - +b)
    }

    function sumOfBoolean(a, b, c) {
        return String(!!a + !!b + !!c)
    }

// Math.abs(x) возвращает абсолютное значение числа x;
// Math.cos(x) возвращает косинус числа x (x – значение в радианах);
// Math.sin(x) возвращает синус числа x (x – значение в радианах);
// Math.atan() возвращает арктангенс числа (в радианах);
// Math.sqrt(x) возвращает квадратный корень числа x. Если число отрицательное, то вернется NaN;
// Math.pow(x, y) возвращает x в степени y;
// Math.floor(x) округление вниз. Округляет аргумент x до ближайшего меньшего целого;
// Math.ceil(x) округление вверх. Округляет аргумент x до ближайшего большего целого;
// Math.round(x) возвращает число, округлённое к ближайшему целому;
// Math.trunc(x) возвращает целую часть числа путём удаления всех дробных знаков;
// Math.max(x, y, ..., ) возвращает наибольшее из нуля или более чисел;
// Math.min(x,y, ..., ) возвращает наименьшее из нуля или более чисел;
// Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1).
    clear()
    {
        let x = 9.475
        console.log(Math.sqrt(x) === Math.pow(x, 0.5));
        console.log(Math.pow(x, 1) === Math.sqrt(x));
        console.log(Math.pow(x, 3) === x ** 3);
        console.log(Math.pow(x, 0) === 1);
        console.log(Math.pow(x, 1 / 2) === Math.sqrt(x));
        console.log(Math.ceil(x))
    }

    function discoverOriginalPrice(discountedPrice, salePercentage) {
        let procent = 100 - salePercentage
        let result = discountedPrice * 100 / procent
        console.log(+result.toFixed(2))
    }

    discoverOriginalPrice(728.424, 25)//101)

    function twoDecimalPlaces(n) {
        console.log(+n.toFixed(2))
    }

    twoDecimalPlaces(4.659725356) //4.66
    {
        function twoDecimalPlaces2(number) {
            let value = 0
            let setNum = String(number)
            let arrStr = setNum.split('')
            for (let i = 0; i < arrStr.length; i++) {
                if (arrStr[i] === '.') {
                    break;
                }
                value++
            }
            console.log(Number(String(number).substr(0, value + 3)))
        }

        clear()
        twoDecimalPlaces2(-7488.83485834983)
    }
// above and bellow doing the same work
    {
        function twoDecimalPlaces3(number) {
            clear()
            console.log(Math.trunc(number * 100) / 100)
        }

        twoDecimalPlaces3(-7488.83485834983)
    }
// Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.

    {
        function squareRoot(x) {
            clear()
            let value = 0

            for (let i = 0; i < x; i++) {
                if (i * i === x) {
                    value = i
                }
            }
            console.log(value)
        }

        squareRoot(81)
    }
    {
        console.log(Math.PI)
    }
    {
        function howManyTimes(annualPrice, individualPrice) {
            clear()
            let value = 0
            for (let i = 0; i < annualPrice; i++) {
                if (individualPrice < annualPrice) {
                    ++value
                    annualPrice -= individualPrice
                }
            }
            console.log(value + 1)
        }

        howManyTimes(80, 15)
    }
// here
    {
        // Given a number return the closest number to it that is divisible by 10.
        const closestMultiple10 = num => {
            clear()
            // for (let i = 0; i < num; i++){
            //     num -= 1
            //     if (num % 10 === 0){
            //         break
            //     }
            // }
            let result = Math.round(num / 10) * 10
            console.log(result)
        };
        closestMultiple10(54)
    }
    {
        function oddCount(n) {
            clear()
            let arr = []
            let replay = n
            for (let i = 0; i < replay; i++) {
                --n
                if (n % 2 !== 0) {
                    arr.push(n)
                }
            }
            arr.reverse()
            console.log(arr)
        }

        oddCount(15)
    }
    {
        function century(year) {
            clear()
            console.log(Math.ceil(year / 100))

        }

        century(1705)
    }
    {
        function womensAge(n) {
            clear()
            let numFirst = (Math.floor(n / 2))
            let result = String(n % numFirst)
            let result2 = String(2 % numFirst)
            let mainresult = Number(result2 + result)
            console.log(`${n}? That's just ${mainresult}, in base ${numFirst}!`)
        }

        womensAge(32)
    }
    {
        function squareOperations(a, b) {
            let arr1 = a * a + b * b
            let arr2 = (a - b) * (a + b)
            let arr3 = (a * b) * (a * b)
            let arr4 = Math.round((a / b) * (a / b))
            let result = [arr1, arr2, arr3, arr4]
            return (result)
        }

        squareOperations(17, 4)
    }
    {
        function jumpRecord(res1, res2, res3) {
            return Math.max(res1, res2, res3)
        }
    }
    {
        function angleInRadians(angle) {
            return Math.round(Math.PI / 180 * angle)
        }

        function hypotenuse(a, b) {
            return Math.ceil(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))
        }

        hypotenuse(14, 4)

        function randomNumber() {
            console.log(Math.floor(Math.random() * 100))
        }

        randomNumber()
    }

    function geometricMean(a, b) {
        return Math.sqrt(a * b).toFixed(2)
    }

    function fuelPrice(litres, pricePerLitre) {
        return +(litres * pricePerLitre).toFixed(2)
    }

    function circleArea(r) {
        return Math.round(Math.PI * Math.pow(r, 2))
    }

    function absoluteValuesOperations(a, b) {
        clear()
        let result = [Math.abs(a) + Math.abs(b), Math.abs(a) - Math.abs(b), Math.abs(a) * Math.abs(b), Math.round(Math.abs(a) / Math.abs(b))]
        console.log(result)
    }

    absoluteValuesOperations(5, 3)
}
// here
{
    function distance(x1, y1, x2, y2) {
        clear()
        console.log(Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2))))
    }

    distance(3, 9, 7, 11)

    function rectangle(x1, y1, x2, y2) {
        let a = Math.abs(x2 - x1)
        let b = Math.abs(y2 - y1)
        let s = a * b
        let p = 2 * (a + b)
        return [p, s]
    }
}

// Напишите функцию с именем area, которая принимает два числа a и b в качестве аргументов и возвращает площадь закрашенной фигуры.
function area(a, b) {
    let first = a * a
    let second = b * b
    return first - second
}

function circleArea(circleLength) {
    let r = circleLength / (2 * Math.PI)
    let s = Math.PI * Math.pow(r, 2)
    return Math.round(s)
}

function average(a, b) {
    return ((a + b) / 2).toFixed(2)
}

function circleLength(d) {
    return (Math.PI * d).toFixed(2)
}

// площадь кольца, ограниченного двумя окружностями
function ringArea(r1, r2) {
    return Math.floor(Math.PI * (Math.pow(r1, 2) - Math.pow(r2, 2)))
}

function totalPrice(price, tipPercent, taxPercent) {
    clear()
    let first = price / 100 * tipPercent
    let second = price / 100 * taxPercent
    let result = price + first + second
    console.log(+(result).toFixed(2))
}

totalPrice(68, 25, 9)
// let x = 5;
// console.log(x > 0); // true (величина х положительна)
// console.log(x >= 0); // true  (величина x неотрицательна)
// console.log(x < 0); // false (величина х не является отрицательной)
// console.log(15 == '15'); // true (величина равны по значению, но не по типу)
// console.log(15 === 3 * 5); // true (величины равны по типу и значению)
// console.log(15 !== '15'); // true (число 15 не равно строке ‘15’)
{
    function hoopCount(n) {
        if (n >= 10) {
            return "Great, now move on to tricks"
        } else {
            return "Keep at it until you get it"
        }
    }
}
// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.
// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...
// Go show some truth who's boss!
{
    function ifChuckSaysSo() {
        return (1 === 0)
    }
}
{
    function trueOrFalse(val) {
        if (val) return 'true';
        else return 'false';
    }

    function add(a, b) {
        if (a == b) {
            return true
        } else return false
    }

    function hero(bullets, dragons) {
        return bullets >= dragons * 2
    }
}
{
    function equalParity(a, b) {
        if (a % 2 === 0 && b % 2 === 0) {
            console.log(true)
        } else if (a % 2 === 1 && b % 2 === 1 || a % 2 === -1 && b % 2 === -1) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    equalParity(54, -33)
}
// here
{
    function inequalitiesAreFulfilled(a, b) {
        return a > 2 && b <= 3 ? true : false
    }

    function exactlyTwoArePositive(a, b, c) {
        clear()
        if (a > 0 && b > 0 && c < 0 || a > 0 && c > 0 && b < 0 || b > 0 && c > 0 && a < 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    exactlyTwoArePositive(12, 6, 0)

    function atLeastOnePairOfOpposite(a, b, c) {
        if (-a === b || -b === c || -c === a || -c === b) {
            console.log(true)
        } else console.log(false)
    }

    atLeastOnePairOfOpposite(4, -4, 10)

    function areAllDigitsDifferent(num) {
        clear()

        let strNum = String(num).split('')
        if (strNum[0] === strNum[1] || strNum[0] === strNum[2] ||
            strNum[1] === strNum[2]) {
            return false
        }
        console.log(strNum)
    }

    areAllDigitsDifferent(362)

    function isThreeDigitOddNumber(num) {
        let strNum = String(num).split('')
        if (strNum.length === 3 && num % 2 === 1) {
            return true
        } else return false
    }

    function atLeastOneIsOdd(a, b) {
        if (a % 2 === 1 || b % 2 === 1) {
            return true
        } else return false
    }

    function atLeastOneIsOdd(a, b) {
        if (a % 2 === 1 || b % 2 === 1 || a % 2 === -1 || b % 2 === -1 || a % 2 === 1 && b % 2 === 1 || a % 2 === -1 && b % 2 === -1) {
            return true
        } else return false
    }

    function areNumbersOdd(a, b) {
        if (a % 2 === 1 && b % 2 === 1 || a % 2 === -1 && b % 2 === -1 || a % 2 === -1 && b % 2 === 1 || a % 2 === 1 && b % 2 === -1) {
            return true
        } else return false
    }

    function onlyOneIsPositive(a, b, c) {
        if (a > 0 && b <= 0 && c <= 0 || b > 0 && a <= 0 && c <= 0 || c > 0 && a <= 0 && b <= 0) {
            return true
        } else return false
    }

    function inequalitiesAreFulfilled(a, b, c) {
        if (a < b && b < c) {
            return true
        } else return false
    }

    function exactlyOneIsOdd(a, b) {
        if (a % 2 === 1 && b % 2 === 0 || a % 2 === -1 && b % 2 === 0 || a % 2 === 0 && b % 2 === 1 || a % 2 === 0 && b % 2 === -1) {
            return true
        } else return false
    }

    function isPropositionTrue(a, b, c) {
        if (a < b && b < c || a > b && b > c) {
            return true
        } else return false
    }

    function areDigitsInAscendingOrder(num) {
        let strNum = String(num).split('')
        if (strNum[0] < strNum[1] && strNum[1] < strNum[2]) {
            return true
        } else return false
    }

    function isNumberPositive(num) {
        return num > 0 ? true : false
    }

    function atLeastOnePairOfEquals(a, b, c) {
        if (a === b || a === c || b === c) {
            return true
        } else return false
    }

    function areNumbersEven(a, b) {
        if (a % 2 === 0 && b % 2 === 0) {
            return true
        }
        return false
    }

    function isTwoDigitEvenNumber(num) {
        let result = String(num).split('').length
        return result === 2 && num % 2 === 0 ? true : false
    }

    function eachIsPositive(a, b, c) {
        return a > 0 && b > 0 && c > 0
    }

    function exactlyOneIsEven(a, b, c) {
        if (a % 2 === 0 && (b % 2 === 1 || b % 2 === -1) && (c % 2 === 1 || c % 2 === -1) ||
            b % 2 === 0 && (a % 2 === 1 || a % 2 === -1) && (c % 2 === 1 || c % 2 === -1) ||
            c % 2 === 0 && (a % 2 === 1 || a % 2 === -1) && (b % 2 === 1 || b % 2 === -1)
        ) {
            return true
        } else return false
    }

// here
    {
        let x = 3
        // if ('abc' > 'def') console.log('Odd'); else console.log('Even');
        // if (!null) console.log('Odd'); else console.log('Even');
        if (!!5) console.log('Odd'); else console.log('Even');
        let age = 18;
        if (age > 0 && age < 11) console.log('free');
        else if (age < 17) console.log('5 dollars');
        else if (age >= 17 && age < 21) console.log('10 dollars');
        else console.log('15 dollars');
    }
    {
        function isLucky(n) {
            let value = 0
            let strNum = String(n).split('')
            for (let i = 0; i < strNum.length; i++) {
                value += +strNum[i]
            }
            if (value % 9 === 0) {
                return true
            } else return false
        }

        isLucky(1892376)
    }
    {
        const isLuckyBetter = (n) => n % 9 === 0
        console.log(isLuckyBetter(1892376))
    }
    {
        function getGrade(s1, s2, s3) {
            let average = (s1 + s2 + s3) / 3
            if (average <= 100 && average >= 90) {
                return 'A'
            }
            if (average < 90 && average >= 80) {
                return 'B'
            }
            if (average < 80 && average >= 70) {
                return 'C'
            }
            if (average < 70 && average >= 60) {
                return 'D'
            }
            if (average < 60 && average >= 0) {
                return 'F'
            }
        }

    }
}
{
    function calculate(a, o, b) {
        let result
        if (o === "+") {
            result = a + b;
        } else if (o === "-") {
            result = a - b;
        } else if (o === "/" && b !== 0) {
            result = a / b;
        } else if (o === "/" && b === 0) {
            result = null;
        } else if (o !== "/" && o !== "-" && o !== "+" && o !== "*") {
            result = null
        } else if (o === '*') {
            result = a * b
        }
        return (result)
    }

    calculate(-3, '/', 0)

    function chromosomeCheck(sperm) {
        return sperm === 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
    }

    function rainAmount(mm) {
        if (mm < 40) {
            return "You need to give your plant " + `${40 - mm}` + "mm of water"
        } else return "Your plant has had more than enough water for today!"
    }

    function getRealFloor(n) {
        if (n <= 0) {
            return n
        } else if (n < 13) {
            return n - 1
        } else if (n > 13) {
            return n - 2
        }
    }

    function calculateAge(a, b) {
        if (a > b && a - b !== 1) {
            return `You will be born in ${a - b} years.`
        } else if (a > b && a - b === 1) {
            return `You will be born in ${a - b} year.`
        } else if (a < b && b - a !== 1) {
            return `You are ${b - a} years old.`
        } else if (a < b && b - a === 1) {
            return `You are ${b - a} year old.`
        } else {
            return "You were born this very year!"
        }
    }

    function bmi(weight, height) {
        let bmi = weight / Math.pow(height, 2)
        if (bmi <= 18.5) {
            return "Underweight"
        } else if (bmi <= 25.0) {
            return "Normal"
        } else if (bmi <= 30.0) {
            return "Overweight"
        } else if (bmi > 30.0) {
            return "Obese"
        }
    }

    function fuelPrice(litres, pricePerLitre) {
        //   😎
        let sail = 0
        for (let i = 0; i < litres; i++) {
            if (sail !== 0.25 && litres >= 2) {
                if (litres % 2 === 0) {
                    sail = (litres / 2) * 5
                    if (sail > 25) {
                        sail = 25
                    }
                } else if (litres % 2 === 1) {
                    litres--
                    sail = (litres / 2) * 5
                    litres++
                    if (sail > 25) {
                        sail = 25
                    }
                }
            }
        }
        console.log(((litres * pricePerLitre - (litres * (sail / 100))).toFixed(2)))
    }

    fuelPrice(5, 5.6)

    function roots(a, b, c) {
        clear()
        let result = Math.pow(b, 2) - (4 * (a * c))
        if (Number.isInteger(Math.sqrt(result))) {
            let secondX = (-b - result) / (2 * a)
            let thirdX = (-b + result) / (2 * a)
            console.log(+(secondX + thirdX).toFixed(2))
        } else {
            console.log(null)
        }
    }

    roots(5, 40, 26)
}
// here
{
    function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {

        let result
        if (dolphin === true) {
            result = (pontoonDistance / youSpeed) / 2 < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!"
        } else if (dolphin === false) {
            result = (pontoonDistance / youSpeed) < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!"
        }
        return result
    }
}
{
    function apple(x) {
        return Math.pow(Number(x), 2) > 1000 ? "It's hotter than the sun!!" : 'Help yourself to a honeycomb Yorkie for the glovebox.'
    }

    function humanYearsCatYearsDogYears(humanYears) {
        let catYears = 0
        let dogYears = 0
        for (let i = 1; i <= humanYears; i++) {
            if (i === 1) {
                catYears += 15
                dogYears += 15
            } else if (i === 2) {
                catYears += 9
                dogYears += 9
            } else if (i > 2) {
                catYears += 4
                dogYears += 5

            }
        }
        return [humanYears, catYears, dogYears]
    }
}
{
    function isPalindrome(num) {
        let result = Number(('' + num).split('').reverse().join(''))
        console.log(result === num)
    }

    isPalindrome(898)

    function minOfThree(a, b, c) {
        if (a !== b && b !== c && a !== c) {
            return Math.min(a, b, c)
        } else {
            return a
        }
    }

    function newValues(a, b, c) {
        if (a < b && b < c && a < c) {
            console.log('work')
        } else {
            console.log('stop')
        }
    }

    newValues(1, 2, 2)

    function newValues(a, b, c) {
        if (a < b && b < c && a < c) {
            a *= 2;
            b *= 2;
            c *= 2;
        } else {
            a = -a;
            b = -b;
            c = -c
        }
        return [a, b, c]
    }

    function numberSign(num) {
        if (num > 0) {
            return 'plus'
        } else if (num < 0) {
            return 'minus'
        } else {
            return null
        }
    }

    function countOfPositive(a, b, c) {
        let arr = [a, b, c]
        let result = 0
        for (let i = 0; i < 3; i++) {
            if (arr[i] > 0) {
                result++
            }
        }
        console.log(result)
    }

    countOfPositive(6, -10, 0)

    function middleOfThree(a, b, c) {
        let arr = [a, b, c]

        let max = Math.max(...arr)
        let min = Math.min(...arr)
        if (a !== max && a !== min) {
            return a
        }
        if (b !== max && b !== min) {
            return b
        }
        if (c !== max && c !== min) {
            return c
        }
    }

    middleOfThree(5, 4, 6)
    console.log(Math.abs(1))
    console.log(Math.trunc(-45.95))
    console.log(Math.floor(-45.95))

    function changeNumber(num) {
        return num > 0 ? num *= 2 : num /= 2
    }

    function sumOfTwoLargest(a, b, c) {
        let arr = [a, b, c]
        let min = Math.min(...arr)
        if (a !== min && b !== min) {
            return a + b
        }
        if (a !== min && c !== min) {
            return a + c
        }
        if (b !== min && c !== min) {
            return c + b
        }
    }
}
// here
{
    function areaComparison(r, a) {
        let circleS = Math.PI * Math.pow(r, 2)
        let squareS = a * 4
        if (circleS > squareS) {
            return "circle"
        }
        if (squareS > circleS) {
            return "square"
        }
        if (squareS === circleS) {
            return "the same"
        }
    }

    function distanceComparison(x1, y1, x2, y2) {
        let d1 = Math.sqrt(x1 * x1 + y1 * y1)
        let d2 = Math.sqrt(x2 * x2 + y2 * y2)
        if (d1 < d2) {
            console.log(1)
        } else if (d2 < d1) {
            console.log(2)
        } else if (d1 === d2) {
            console.log(0)
        }
        console.log(d1, d2)
    }

    function putInOrder(a, b) {
        let arr = [a, b]
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        return [max, min]
    }

    distanceComparison(-7, 0, 4, 6)

    function equationHasRoots(a, b, c) {
        let result = Math.pow(b, 2) - 4 * (a * c)
        if (result >= 0 && Number.isInteger(Math.sqrt(result))) {
            console.log(Number.isInteger(Math.sqrt(result)))
            return "The equation has roots"
        } else if (result < 0) {
            return "The equation has no roots"
        } else return "The equation has roots"
    }

    equationHasRoots(-1, 4, -4)

    function smallerOfTwo(a, b) {
        let arr = [a, b]
        let minNumber = a
        let indexMinNumber = 1
        for (let i = 0; i <= a || i <= b; i++) {
            if (minNumber > arr[i]) {
                minNumber = arr[i]
                indexMinNumber++
            }
        }
        return [minNumber, indexMinNumber]
    }

    smallerOfTwo(1, -1)

    function countOfPosAndNeg(a, b, c) {
        clear()
        let positive = 0
        let negative = 0
        let arr = [a, b, c]
        for (let i = 0; i < 3; i++) {
            if (arr[i] < 0) {
                negative++
            } else if (arr[i] !== 0 && arr[i] > 0) {
                positive++
            }
        }
        console.log(positive, negative)
    }

    countOfPosAndNeg(-5, -13, -1)

    function changeNumber(num) {
    }

    // num > 0 ? num + 8 : num

    function orderNumberOfDifferentValue(a, b, c) {
        let result = 0
        let numbersArr = [a, b, c]
        let deleteTheNumbers
        if (a === b) {
            deleteTheNumbers = a
        } else if (b === c) {
            deleteTheNumbers = c
        } else if (c === a) {
            deleteTheNumbers = a
        }
        for (let i = 0; i < 3; i++) {
            if (numbersArr[i] === deleteTheNumbers) {

            } else result = numbersArr[i]
        }
        if (a === result) {
            return 1
        } else if (b === result) {
            return 2
        } else if (c === result) {
            return 3
        }
    }

    orderNumberOfDifferentValue(-4, -2, 10)
    // here
    let a = '12'
    {
        console.log(a > 0 && a < 12)
        console.log(true && true); // true
        console.log(false && true); // false
        console.log(true && false); // false
        console.log(false && false); // false
    }
    const rps = (p1, p2) => {
        if (p1 === p2) {
            return 'Draw!'
        } else if (p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors') {
            console.log('Player 1 won!')
        } else if (p2 === 'scissors' && p1 === 'paper' || p2 === 'paper' && p1 === 'rock' || p2 === 'rock' && p1 === 'scissors') {
            console.log('Player 2 won!')
        }
    };
    rps('rock', 'paper')
    const perfectRoots = num => {
        let sq2 = Number.isInteger(Math.pow(num, 1 / 2))
        let sq4 = Number.isInteger(Math.pow(num, 1 / 4))
        let sq8 = Number.isInteger(Math.pow(num, 1 / 8))
        return sq2 && sq4 && sq8
    }
    perfectRoots(1000)
    const isDivideBy = (number, a, b) => Number.isInteger(number / a) && Number.isInteger(number / b)

    function finalGrade(exam, projects) {
        if (exam > 90 || projects > 10) {
            return 100
        } else if (exam > 75 && exam <= 90 && projects >= 5 && projects <= 10) {
            return 90
        } else if (exam > 50 && exam < 76 && projects >= 2 || exam > 50 && projects >= 2) {
            return 75
        } else {
            return 0
        }
    }

    function numberDescription(num) {
        clear()
        let result = String(num).split('')
        if (result[0] === '-') {
            result[0] = ''
        }
        result = String(+result.join('')).split('').length
        console.log(result)
        if (result === 3) {
            return "three-digit number"
        } else if (result === 2) {
            return "two-digit number"
        } else if (result === 1) {
            return "one-digit number"
        }
    }

    numberDescription(-223)
}
{
    function numberDescription(num) {
        if (num < 0 && num % 2 === 0) {
            return "negative even number"
        } else if (num < 0 && num % 2 === 1) {
            return "negative odd number"
        } else if (num > 0 && num % 2 === 1) {
            return "positive odd number"
        } else if (num < 0 && num % 2 === -1) {
            return "negative odd number"
        } else if (num > 0 && num % 2 === -1) {
            return "positive odd number"
        } else if (num > 0 && num % 2 === 0) {
            return "positive even number"
        } else if (num === 0) {
            return "zero number"
        }
    }

    numberDescription(-12)
}
{
    function positionOfPoint(x, y) {
        if (x > 0 && y === 0 || x < 0 && y === 0) {
            return (1)
        } else if (y > 0 && x === 0 || y < 0 && x === 0) {
            return (2)
        } else if (x > 0 && y > 0 && y !== x || y > 0 && x > 0 && x !== y || x < 0 && y < 0 && y !== x || y < 0 && x < 0 && x !== y ||
            x < 0 && y > 0 && y !== x || y < 0 && x > 0 && x !== y || x > 0 && y < 0 && y !== x || y > 0 && x < 0 && x !== y || x === y && x !== 0 && y !== 0) {
            return (3)
        } else if (x === 0 && y === 0) {
            return (0)
        }
    }

    console.log(3 % 15)

    function areYouPlayingBanjo(name) {
        if (name[0] === 'R' || name[0] === 'r') {
            return name + " plays banjo"
        } else {
            return name + " does not play banjo"
        }
    }

    function getAges(sum, difference) {
        if (sum > 0 && difference >= 0) {
            let res = [(sum + difference) / 2, (sum - difference) / 2]
            return res[0] >= 0 && res[1] >= 0 ? res : null;
        }
        return null;
    };
}
// here
{
    function atLeastOneEven(a, b, c) {
        if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
            return true
        } else return false
    }

    function dayOfWeek(day) {
        if (day > 0 && day < 6) {
            return "Time to get up for work"
        } else if (day > 5 && day < 8) {
            return "You can get some sleep"
        }
    }

    function pythagoreanThree(a, b, c) {
        clear()
        let result = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
        console.log(result)
    }

    pythagoreanThree(3, 4, 5)

    function nameStartsWithA(str1, str2, str3) {
        if (str1[0] === 'A' || str2[0] === 'A' || str3[0] === 'A') {
            return 'Yes'
        } else return 'No'
    }

    function rainbowСolor(color) {
        if (color === 'red' || color === 'orange' || color === 'yellow' || color === 'green' || color === 'blue' || color === 'indigo' || color === 'violet') {
            return true
        } else return false
    }

    function luckyNumber(a, b) {
        if (a === 8 || b === 8 || a === 3 || b === 3 ||
            a === 5 || b === 5 || a === 7 || b === 7) {
            return true
        } else return false
    }

    function season(month) {
        if (month > 0 && month < 3 || month === 12) {
            return 'Winter'
        } else if (month > 2 && month < 6) {
            return 'Spring'
        } else if (month > 5 && month < 9) {
            return 'Summer'
        } else if (month > 8 && month < 12) {
            return 'Fall'
        }
    }

    function atLeastOneNegative(a, b, c, d) {
        return a < 0 || b < 0 || c < 0 || d < 0 ? true : false
    }

    function sweetSeason(month) {
        if (month === 2 || month === 10 || month === 12) {
            return "Time to buy sweets"
        } else return "Not the time to buy sweets"
    }

    function isGoodNumber(num) {
        num !== 39 ? "The number of suitable" : "The number is unsuccessful"
    }

    function moneyInCash(money) {
        return money !== 0 ? true : false
    }

    function newValues(a, b) {
        if (a === b) {
            return [0, 0]
        } else if (a < b) {
            return [b, b]
        } else if (b < a) {
            return [a, a]
        }
    }

    function floorNumber(floor, amount) {
        if (floor !== 4 && floor <= amount && floor > 0) {
            return true
        } else {
            return false
        }
    }

    function newValues(a, b) {
        if (a === b) {
            return [0, 0]
        } else if (a !== b) {
            return [a + b, a - b]
        }
    }

    let str = 5
    let x = 5
    console.log(!!'abc'); // true
    console.log(!!null); // false
    console.log(!!5); // true
    console.log(x % 2 !== 0);  // true, т.к. остаток от деления числа 5 на 2 не равен 0
    console.log(!(typeof str === 'string'));  // true, т.к. тип переменной str – не строка
}
// here
{
    function plural(n) {
        if (n === 0) {
            return true
        } else if (n === 0.5) {
            return true
        } else if (n === 1) {
            return false
        } else if (n === 100) {
            return true
        } else if (n === Infinity) {
            return true
        } else {
            return true
        }
    }

    console.log(2 % 2 == 0)

    function divide(weight) {
        let result = weight % 2 === 0
        if (weight > 2) {
            return result
        } else return false
    }

    function yearDays(year) {
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            return `${year} has 366 days`
        } else return `${year} has 365 days`
    }

    // let isAdult = (age > 18) ? true : false;
    {
        let age = 6;
        let status = (age > 18) ? 'adult' : (age > 5) ? 'student' : 'baby';
        console.log(status); // будет выведено "student"
    }

    function absValue(x) {
        return typeof x === 'number' ? Math.abs(x) : null
    }

    console.log('a' < 'b'); //true
    console.log('c' < 'b'); //false
    console.log('0' < '1'); //true
    // function isDigit(letter) {
    //     return typeof letter === 'number' ? "digit" : "not a digit"
    // }
    // {
    //     let letter = '5'
    //     console.log(Number(letter))
    // }
    function isDigit(letter) {
        return letter === '0' || letter === '1' || letter === '2' || letter === '3' || letter === '4' || letter === '5' || letter === '6' || letter === '7' || letter === '8' || letter === '9' ? 'digit' : 'not a digit'
    }

    // sry, i'm so sleepy
    // sry, i'm so sleepy
    isDigit('g')

    function boolToString(bool) {
        return Boolean(bool) ? 'True' : 'False'
    }

    function isTeenager(age) {
        return age > 12 && age < 20 ? 'teenager' : 'not a teenager'
    }

    function changeNumber(num) {
        return num % 2 === 0 ? num * 2 : num * 3
    }

    function scoreIncrease(current, level) {
        return level === 'easy' ? current + 2 : level === 'medium' ? current + 4 : current + 8
    }

    function saleFruits(n) {
        return (n >= 10 ? n * 0.60 : n >= 3 ? n * 0.80 : n * 1).toFixed(2)
    }

    const boolToWord = bool => bool ? 'Yes' : 'No'

    function hoopCount(n) {
        return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
    }

    function howManyDalmations(number) {

        let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

        console.log(dogs[2])
        return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]
    }

    howManyDalmations(10)
}
// here
{
    // Return the nth triangular number
    function triangular(n) {
        let result = 0

        if (n > 0) {
            result = n * (n + 1) / 2
        } else if (n <= 0) {
            result = 0
        }
        return result
    }

    triangular(5)
    // or const triangular = n => n > 0 ? n * (n + 1) / 2 : 0
    let n = "You're a(n)"
    const describeAge = age => age <= 12 ? `${n} kid` : age >= 13 && age <= 17 ? `${n} teenager` : age >= 18 && age <= 64 ? `${n} adult` : `${n} elderly`

    function bonusTime(salary, bonus) {
        if (Number.isInteger(salary) && bonus) {
            return `£${salary * 10}`
        } else return `£${salary}`
    }

    // const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`
    function saleHotdogs(n) {
        return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : n * 90
    }

    function getRes(myScore) {
        return myScore < 70 ? `Sorry, you have failed. Better luck next time!` + ' Thank you for taking part.' : "Congratulations, you have passed!" + ' Thank you for taking part.'
    }

    function ownedCatAndDog(catYears, dogYears) {
        let cat = 0
        let dog = 0
        let result = []
        if (catYears > 14 && catYears < 24) {
            result.push(1)
            if (dogYears > 14 && dogYears < 24) {
                result.push(1)
            } else if (dogYears > 23 && dogYears < 29) {
                result.push(2)
            } else if (dog === 29) {
                result.push(3)
            } else if (dogYears > 29) {
                dog = Math.floor((dogYears - 29) / 5)
                result.push(dog + 3)
            } else if (dog < 15) {
                result.push(0)
            }
        } else if (catYears > 23 && catYears < 28) {
            result.push(2);
            if (dogYears > 14 && dogYears < 24) {
                result.push(1)
            } else if (dogYears > 23 && dogYears < 29) {
                result.push(2)
            } else if (dog === 29) {
                result.push(3)
            } else if (dogYears > 29) {
                dog = Math.floor((dogYears - 29) / 5)
                result.push(dog + 3)
            } else if (dog < 15) {
                result.push(0)
            }
        } else if (catYears > 27) {
            cat = Math.floor((catYears - 28) / 4)
            result.push(cat + 3)
            if (dogYears > 14 && dogYears < 24) {
                result.push(1)
            } else if (dogYears > 23 && dogYears < 29) {
                result.push(2)
            } else if (dogYears > 29) {
                dog = Math.floor((dogYears - 29) / 5)
                result.push(dog + 3)
            } else if (dog < 15) {
                result.push(0)
            }
        } else if (catYears < 15) {
            result.push(0);
            if (dogYears > 14 && dogYears < 24) {
                result.push(1)
            } else if (dogYears > 23 && dogYears < 29) {
                result.push(2)
            } else if (dogYears > 29) {
                dog = Math.floor((dogYears - 29) / 5)
                result.push(dog + 3)
            } else if (dog < 15) {
                result.push(0)
            }
        }
        console.log(result)
    }

    ownedCatAndDog(5, 32)
    function solve(s,g){
        clear()
        let result = s-g
        if (s - result !== g && result > 0 || s === g){
            console.log([s - result,result])
        }
        else if (result < 0 || s - result === g) {
            console.log(-1)
        }
    }
    solve(3,3)
    // const solve = (s,g) => (s%g) ? -1 : [g,(s / g-1)*g]
}