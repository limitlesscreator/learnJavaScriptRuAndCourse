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
        let bmi = weight / Math.pow(height,2)
        if (bmi <= 18.5){return "Underweight"}
        else if (bmi <= 25.0 ){return "Normal"}
        else if (bmi <= 30.0){return "Overweight"}
        else if (bmi > 30.0){return "Obese"}
    }

    function fuelPrice(litres, pricePerLitre) {
        //   😎
        let sail = 0
        for (let i = 0; i < litres; i++){
            if (sail !== 0.25 && litres >= 2){
                if (litres % 2 === 0){
                    sail = (litres / 2) * 5
                    if (sail > 25){
                        sail = 25
                    }
                }
                else if (litres % 2 === 1){
                    litres--
                    sail = (litres / 2) * 5
                    litres++
                    if (sail > 25){
                        sail = 25
                    }
                }
            }
        }
        console.log(((litres * pricePerLitre - (litres * (sail/100))).toFixed(2)))
    }
    fuelPrice(5,5.6)
    function roots(a,b,c){
        clear()
        let result = Math.pow(b,2) - (4 * (a * c))
        if (Number.isInteger(Math.sqrt(result))){
            let secondX = (-b - result )/ (2*a)
            let thirdX = (-b + result )/ (2*a)
            console.log(+(secondX + thirdX).toFixed(2))
        }
        else {
            console.log(null)
        }
    }
    roots(5,40,26)
}