const clear = () => {
    console.clear()
}

{
    // function animals(heads, legs){
    //     let chikens = 0,
    //         cows = 0
    //     let result = [chikens,cows]
    //     for (let i = 0; heads > i; i++){
    //         heads--
    //         chikens++
    //     }
    //     console.log(result)
    // }
    // animals(344, 872) //[252, 92] [Chickens, Cows]
    function animals(heads, legs) {
        if (heads === 0 && legs === 0) return [0, 0]
        if (legs % 2 != 0 || heads < 1 || legs < 2) return "No solutions";
        if (heads * 4 < legs) return "No solutions";
        for (let i = 0; i <= heads; i++) {
            let cow = (heads - i) * 4;
            let chick = i * 2;
            if (cow + chick === legs) return [chick / 2, cow / 4];
        }
        return "No solutions"
    }

    clear()
    {
        function makeChocolates(small, big, goal) {
            // let smallCandy = 0
            // let newGoal = goal
            // for (let i = 0; i < goal; i++){
            //     if (newGoal - 5 >= 2){
            //         smallCandy++
            //         newGoal -= 2
            //     }
            //     else if (newGoal - 5 <= 2 && newGoal - 5 === 0 ){
            //         newGoal -= 5
            //         break
            //     }
            // }
            // if (newGoal >0 ){
            //     smallCandy = -1
            // }
            // console.log(smallCandy)
        }

        makeChocolates(4, 1, 14)//4
        // can't' solve that sry
        // console.log(5 * 'box'); // NaN
        // console.log(Math.sqrt(-4)); // NaN, невозможно получение квадратного корня отрицательного числа
        // console.log(5 + 2 + +'kiwi'); // NaN, т.к. +'kiwi' в результате становится NaN
        // console.log(Number('5olives')); // NaN
        let num = true * 2;
        console.log(num)
        let str = 'apple'
        let nan = +str
        console.log('------------------')
        console.log('July' + 31)
        console.log('Three' + 'Two')
        console.log('Two' * 'Two')
        console.log('NaN')
        console.log(NaN + 2)
    }
    {
        clear()
        console.log(('July' + 31).valueOf())
        console.log(('Three' + 'Two').valueOf())
        console.log((+'One' * +'Five').valueOf())
        console.log(('to be' || !'to be').valueOf())
        console.log(('Two' * 'Two').valueOf())
        console.log(('NaN').valueOf())
        console.log((NaN + 2).valueOf())
        let notANumber = 'Two' * 2
        console.log(isNaN('23')); // false
        console.log(isNaN('fun')); // true
        console.log(0 / 0)
        const isReallyNaN = (val) => {
            // return isNaN(val);  // wasn't working as planned :-(
            return Number.isNaN(val) ? true : false
        };
    }
    {
        //Your task is to return a number from a string.
        const FilterString = (value) => {
            let arr = []
            for (let i = 0; i < value.length; i++) {
                if (!isNaN(value[i])) {
                    arr.push(+value[i])
                }
            }
            return +arr.join('')
        }
        FilterString("a1b2c3") //123
    }
    console.log(!isNaN('f'))

    function isValid(value) {
        if (!Number.isNaN(value)) {
            return ('Value is valid')
        } else return 'Value is not a number'
    }

    function isArgNaN(value) {
        clear()
        if (isNaN(value)) {
            return NaN
        } else return value
    }

    isArgNaN("13.826074336985506")
}
{
    function multBy5(value) {
        if (Number.isNaN(value)) {
            return "Value is NaN"
        } else return value * 5
    }

    function countNaN(arr) {
        let points = 0
        for (let i = 0; i < arr.length; i++) {
            if (Number.isNaN(arr[i])) {
                points++
            }
        }
        console.log(points)
    }

    countNaN([NaN, 1, NaN + 1, "a" * 2]) //3
    console.log(-1 / Infinity)
    console.log(isFinite('1312312'))
    console.log(isFinite(true))
    console.log(Number.isFinite(2221312))

    function checkingForFinite(a, b) {
        let result = a / b
        return Number.isFinite(result) ? true : false
    }

    function countInfinity(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            if (!Number.isFinite(arr[i])) {
                result++
            }
        }
        console.log(result)
    }

    countInfinity([Infinity, 1 / 0, -10 / 0, 12]) // 3
    // Number.MAX_SAFE_INTEGER - максимальное безопасное целочисленное значение (равно 9007199254740991 или "2 в 53-й степени минус 1"),
    // Number.MIN_SAFE_INTEGER - минимальное безопасное целочисленное значение (равно -9007199254740991 или "-(2 в 53-й степени минус 1)").
    console.log(Number.isSafeInteger(9007199254740991 + 10)); // false
    console.log(Number.isSafeInteger(9007199254740991)); // true
    console.log(Number.isSafeInteger(-5000)); // true
    clear()
    console.log(Number.isSafeInteger(-156576576576))
    console.log(Number.isSafeInteger(676876360))
    console.log(Number.isSafeInteger(-1308e+500))
    console.log(Number.isSafeInteger(Infinity))

    function checkingForfSafe(a, b) {
        return Number.isSafeInteger(a * b)
    }

    function isSumEqualsNumber(a, b, c) {
        return +(a + b).toFixed(2) === +(c.toFixed(2))
    }

    isSumEqualsNumber(0.41, 0.81, 1.22)

    function safeNumber(x) {
        return Number.isSafeInteger(x)
    }

    function countOfSafeNumbers(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            Number.isSafeInteger(arr[i]) ? result++ : null
        }
        return result
    }

    console.log(-(-2 - 1))
    console.log(25 / -5)
    {

        let num = 3;
        num = -num;
        console.log(num)
    }
    {
        function invert(array) {
            return array = array.map(n => n * -1)
        }

        function changeMax(a, b) {
            return a === b ? "The numbers are equal" : a > b ? -a : -b
        }

        function oppositePoint(x, y) {
            return `N(${-x}, ${-y})`
        }

        function oppositeInArray(arr, num) {
            let indexNum = undefined
            for (let i = 0; i < arr.length; i++) {
                if (-arr[i] === num) {
                    indexNum = i
                    break;
                }
            }
            return indexNum
        }

        oppositeInArray([100, 36, 1, 50], -50)//3
    }
    {
        clear()
        Math.abs('-100'); // 100, работает численное преобразование
        Math.abs(-200); // 200
        Math.abs(null); // 0, работает численное преобразование
        Math.abs(''); // 0, работает численное преобразование
        Math.abs('10a'); // NaN, в метод передана нечисловая строка
        // Три точки a, b, c с различными координатами лежат на числовой оси. Определите, какая из двух точек: b или c ближе к точке a.
        //
        // threePoints
        //
        // Напишите функцию с именем nearestPoint, которая принимает три числа a, b, c (координаты трех точек на числовой оси) в качестве аргументов и возвращает:
        //
        // строку "b", если точка b ближе к точке a,
        // строку "c", если точка c ближе к точке a,
        // строку "distances are equal", если расстояния от точек b и c до точки a равны.
        function nearestPoint(a, b, c) {
            let ab = Math.abs(a - b)
            let ac = Math.abs(a - c)
            if (ab < ac) {
                return 'b'
            } else if (ac < ab) {
                return 'c'
            } else if (ab === ac) {
                return 'distances are equal'
            }
        }

        // Напишите функцию с именем nearestCafe, которая в качестве аргументов принимает три различные числа x, n, m (x - этаж, где вы находитесь; n, m - этажи, где расположены кафетерии) и возвращает название ближайшего кафетерия. В случае, если количество этажей до кафетериев одинаковое, вы предпочитаете завтракать в кафе "Merci".
        function nearestCafe(x, n, m) {
            let xn = Math.abs(x - n)
            let xm = Math.abs(x - m)
            if (xn < xm) {
                return 'Nonstop'
            } else if (xm < xn) {
                return 'Merci'
            } else if (xn === xm) {
                return 'Merci'
            }
        }

        function expressionValue(a, b, c) {
            let result = (Math.abs(a - c) + Math.abs(b - c)) / Math.abs((a + b + c))
            return +(result.toFixed(2))
        }

        // Напишите функцию с именем absValue, которая принимает число x в качестве аргумента и возвращает модуль этого числа. Решите эту задачу без использования метода Math.abs(x)
    }

    function absValue(x) {
        return x < 0 ? -x : x
    }

    // function multiply(number) {
    //     let result = 0
    //     debugger
    //     for (let i = 0; i < number ; i++) {
    //         result += number * number
    //         number--
    //     }
    //     console.log(result+1)
    // }
    //
    // multiply(10) //250
    // You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
    function sixToast(num) {
        return Math.abs(num - 6)
    }

    function multiply(number) {
        return number * (5 ** String(Math.abs(number)).length);
    }

    Math.pow(3, 0); // 1, любое число в степени 0 равно единице
    Math.pow(9, 0.5); // 3, то же самое что корень квадратный из 9
    Math.pow(81, 1 / 2); // 9, то же самое что корень квадратный из 81
    Math.pow(-81, 1 / 2); // NaN, нельзя получить квадратный корень отрицательного числа
    // You are given an array with positive numbers and a non-negative number N.
    // \You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
    function index(array, n) {
        let result = 0
        if (array.length > n) {
            result = array[n] ** n
        } else result = -1
        console.log(result)
    }

    index([5, 8], 4) //1000000
    {
        function power(x, y) {
            return Math.pow(x, y)
        }

        // Напишите функцию с именем square, которая принимает четыре числа a, b, c, d в качестве аргументов и возвращает общую площадь квартиры.
        function square(a, b, c, d) {
            return (a * a) + (b * b) + (c * c) + (d * d)
        }

        // Напишите функцию с именем powersOfTwo, которая принимает число n в качестве аргумента, и возвращает массив степеней числа 2 (степени от 0 до n).
        function powersOfTwo(n) {
            let result = [1]
            for (let i = 1; i <= n; i++) {
                result.push(Math.pow(2, i))
            }
            return (result)
        }

        powersOfTwo(4)
    }

    function squareOfHypotenuse(a, b) {
        return Math.pow(a, 2) + Math.pow(b, 2)
    }

    // Напишите функцию с именем powerArray, которая принимает массив arr, возводит каждый четный элемент в квадрат, каждый нечетный элемент - в куб, и возвращает измененный массив.
    function powerArray(arr) {
        clear()
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                newArr.push(Math.pow(arr[i], 2))
            } else newArr.push(Math.pow(arr[i], 3))
        }
        console.log(newArr)
    }

    powerArray([2, -1, -1])

    // Напишите функцию с именем sumOfSquares, которая принимает число n в качестве аргумента, и возвращает сумму квадратов чисел от 1 до n.
    function sumOfSquares(n) {
        let result = 0
        for (let i = 1; i <= n; i++) {
            result += Math.pow(i, 2)
        }
        return result
    }

    clear()

    function squareOrSquareRoot(array) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
            if (Number.isInteger(Math.pow(array[i], 0.5))) {
                newArr.push(Math.pow(array[i], 0.5))
            } else newArr.push(Math.pow(array[i], 2))
        }
        return newArr
    }

    squareOrSquareRoot([4, 3, 9, 7, 2, 1])

    // Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
    function squares(x, n) {
        if (n <= 0) {
            return []
        } else {
            let result = [x]
            for (let i = 0; i < n - 1; i++) {
                result.push(Math.pow(result[i], 2))
            }
            return result
        }
    }

    // In this kata you will create a function that takes non negative integers (from 0 to n) and return the amount of cubes that the Menger Sponge would have in that specific iteration.
    function calc_ms(n) {
        let result = 1
        for (let i = 0; i < n; i++) {
            result *= 20
        }
        return result
    }

    console.log(Math.sqrt('64')); // 8
    console.log(Math.sqrt(-64)); // NaN
    console.log(Math.sqrt(Infinity)); // Infinity
    console.log(Math.sqrt('12a')); // NaN
    console.log(Math.sqrt(true)); // 1

    function quadraticEquation(a, b, c) {
        let d = Math.pow(b, 2) - 4 * a * c
        let x1 = 0
        let x2 = 0
        if (d < 0) {
            return "There are no roots"
        } else {
            x1 = (-b + Math.sqrt(d)) / (2 * a)
            x2 = (-b - Math.sqrt(d)) / (2 * a)
            return [x1, x2]
        }
    }

    {
        function isSquare(x) {
            if (Number.isInteger(Math.sqrt(x))) {
                return `${x} is square of ${Math.sqrt(x)}`
            } else return `${x} is not a square`
        }

        function squareRoot(x) {
            if (x >= 0) {
                return +Math.sqrt(x).toFixed(2)
            } else if (x <= 0) {
                return "Root of a negative number is NaN"
            }
        }

        function expression(a, b, c) {
            function expression(a, b, c) {
                return +(Math.sqrt(a) + (Math.sqrt(Math.abs(b - c))) / (Math.pow(a, 3) + Math.pow(b, 2) + Math.pow(c, 4))).toFixed(2)
            }
        }

        function perimeter(x1, y1, x2, y2, x3, y3) {
            let ab = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2))
            let ac = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2))
            let bc = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2))
            return +(ab + ac + bc).toFixed(2)
        }

        // console.log(Math.sqrt('9') === Math.pow(9,0.5))
        isSquare = function (n) {
            if (Number.isInteger(Math.sqrt(n))) {
                return `${n} is a square number (${Math.sqrt(n)} * ${Math.sqrt(n)})`
            } else return `${n} is not a square number`

        }

        // const isSquare = n => Number.isInteger(Math.sqrt(n)) also my solution btw))
        function cutCube(volume, n) {
            clear()
            if (Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume))) {
                if (Number.isInteger(volume / n)) {
                    console.log(true)
                } else console.log(false)
            } else console.log(false)
        }

        cutCube(256, 8)
        console.log(Math.log(9))
        console.log(Math.log(Math.E))
        console.log(Math.log(-9))
        console.log(Math.log(0))
        console.log(Math.log2(0.5))
        console.log(Math.log2(1))

        function logs(x, a, b) {
            return (Math.log(a * b) / Math.log(x));
        }

        function isPowerOfTwo(n) {
            if (Number.isInteger(Math.log2(n))) {
                return true
            } else return false
        }

        // Напишите функцию countPowersInArray, которая принимает массив arr в качестве аргумента и возвращает количество элементов массива, являющихся степенью числа 2 или степенью числа 10.
        function countPowersInArray(arr) {
            clear()
            let result = 0
            for (let i = 0; i < arr.length; i++) {
                if (Number.isInteger(Math.log2(arr[i])) || Number.isInteger(Math.log10(arr[i]))) {
                    result++
                }
            }
            console.log(result)
        }

        countPowersInArray([10, 100, 0.1, 4, 8])
        console.log(Math.log10(10))

        function isPowerOfTen(n) {
            return Number.isInteger(Math.log10(n))
        }

        console.log(Math.floor(-100.1))

        function amountOfMinutes(n) {
            return Math.floor(n / 60)
        }

        function countOfRugs(a, b) {
            return Math.floor(a / b)
        }

        function cockroachSpeed(s) {
            clear()
            let result = s / 60 / 60 * 100000
            console.log(Math.floor(result))
        }

        cockroachSpeed(0.8764817860669847) // 24
    }
    {
        clear()

        function dutyFree(normPrice, discount, hol) {
            console.log(Math.floor(hol / (normPrice * (discount / 10)) * 10))
        }

        dutyFree(17, 10, 500) //294
    }
    {
        function toTime(seconds) {
            clear()
            let hourS = Math.floor(seconds / 60 / 60)
            let menuteS = Math.floor((seconds / 60) - (hourS * 60))
            let result = `${hourS} hour(s) and ${menuteS} minute(s)`
            console.log(result)
        }

        toTime(323500) // '89 hour(s) and 51 minute(s)'

        // Клавдия покупает сладости в магазине, ее покупка составляет $XX.XX. Она собирается расплатиться наличными, у нее есть пачка долларовых банкнот, и нет никаких монет. Какое минимальное количество долларов должна Клавдия передать кассиру, чтобы расплатиться за покупку?
        function numberOfDollars(cost) {
            return Math.ceil(cost)
        }

        // Напишите функцию с именем century, которая принимает целое положительное число year (номер года) в качестве аргумента и возвращает номер столетия.
        function century(year) {
            return Math.ceil(year / 100)
        }

        function officeRooms(k, number) {
            return Math.ceil(number / k)
        }

        // Получите строку вида "Outside the window is 32.3 degrees Celsius. That is almost 33"
        // Напишите функцию с именем temperatureOutside, которая принимает целое положительное число temperatureExact (точное значение температуры) в качестве аргумента и возвращает строку, как указано выше
        function temperatureOutside(temperatureExact) {
            return `Outside the window is ${temperatureExact} degrees Celsius. That is almost ${Math.ceil(temperatureExact)}`
        }

        // Площадь поверхности стен в комнате составляет s квадратных метров. Трубка обоев имеет длину 10 метров и ширину w метров. Сколько минимальное количество трубок обоев надо купить, чтобы сделать ремонт в комнате?
        function numberOfWallpapers(s, w) {
            return Math.ceil(s / (10 * w))
        }

        function cookingTime(eggs) {
            const cookingTime = eggs => Math.ceil(eggs / 8) * 5;
        }

        cookingTime(4260) //should equal 3275
        function quotient(a, b) {
            return Math.round(a / b)
        }

        function forceOfGravity(m) {
            return Math.round(m * 9.81)
        }

        // Напишите функцию roundElementsOfArray, которая принимает массив arr в качестве аргумента и возвращает массив, в котором все элементы округлены до ближайшего целого числа.
        function roundElementsOfArray(arr) {
            arr.map(n => Math.round(n))
        }

        function distanceToMoon(distance) {
            return [Math.round(distance / 100000), Math.round(distance / 100)]
        }

        distanceToMoon(38020012375) //[380200, 380200124]
        function newFunction(numbers, precision) {
            console.log(numbers.toFixed(precision))
        }

        newFunction(3.1415926535, 4) //3.1416

        function danspower(num, power) {
            let result = num ** power;
            if (result % 2 == 1)
                result = Math.round(result / 10) * 10;
            return result;
        }

        danspower(6, 9) //10077696
        console.log(Math.trunc('15.56$')); // NaN, если значение не может быть преобразовано в число
        console.log(Math.trunc('5' / 2)); // 2
        function nDecimalDigits(num, n) {
            clear()
            // let firstN = Math.trunc(num)
            // let secondN = num - firstN
            // let result = firstN
            // for (let i = 0; i < n; i++){
            //     secondN *= 10
            // }
            // secondN = Math.trunc(secondN)
            // for (let j = 0; j < n; j++) {
            //     secondN /= 10
            // }
            // secondN = +secondN.toFixed(n)
            //     console.log(result + secondN)
        }

        nDecimalDigits(3.2083652, 3) // 3.208
        const coinCombo = function (cents) {
            let money = cents
            let result = [0, 0, 0, 0]
            for (let i = 0; money > 0; i++) {
                if (money - 25 >= 0) {
                    result[3]++;
                    money -= 25
                } else if (money - 10 >= 0) {
                    result[2]++;
                    money -= 10
                } else if (money - 5 >= 0) {
                    result[1]++;
                    money -= 5
                } else if (money - 1 >= 0) {
                    result[0]++;
                    money -= 1
                }
            }
            console.log(result)
        }
        coinCombo(6) //[1, 1, 0, 0]
        // finished
    }
    {
        clear()

        // freecodecamp
        function sequentialSizes(val) {
            var answer = "";
            // Only change code below this line
            switch (val) {
                case 1:
                case 2:
                case 3:
                    return 'Low';
                    break;
                case 4:
                case 5:
                case 6:
                    return 'Mid';
                    break;
                case 7:
                case 8:
                case 9:
                    return 'High';
                    break;
            }

            // Only change code above this line
            return answer;
        }

        sequentialSizes(1);

        function chainToSwitch(val) {
            var answer = "";
            // Only change code below this line
            switch (val) {
                case 'bob':
                    return 'Marley';
                    break;
                case 42:
                    return 'The Answer';
                    break;
                case 1:
                    return 'There is no #1';
                    break;
                case 99:
                    return 'Missed me by this much!';
                    break;
                case 7:
                    return 'Ate Nine'
            }

            // Only change code above this line
            return answer;
        }

        chainToSwitch(7);
    }
    {
        function nDecimalDigits(num, n) {
            num = num.toString();
            num = num.slice(0, (num.indexOf(".")) + n + 1);
            console.log(+num)
        }

        nDecimalDigits(8.76173981, 4)
    }

    function integerPartsOfElements(arr) {
        return arr.map(n => Math.trunc(n))
    }

    {
        function cc(card) {
            clear()
            let count = 0
            switch (card) {
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    count++;
                    break;
                case 10:
                case "J":
                case "Q":
                case "K":
                case "A":
                    count--;
                    break;
            }
            console.log(count)
        }

        cc(5)
        // Math.min(1, 3); // 1
        // Math.min('2', 2); // 2
        // Math.min(undefined, 3); // NaN
        {
            let arr = [1, 5, 8];
            console.log(Math.min(...arr)); // 1
        }
    }
    {
        clear()

        function min(a, b) {
            return Math.min(a, b)
        }

        // Напишите функцию minPositive, которая принимает массив arr в качестве аргумента и возвращает минимальный положительный элемент в массиве. Если массив arr не содержит положительных элементов, вернуть null.
        function minPositive(arr) {
            let result = 0
            let newArr = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    newArr.push(arr[i])
                }
            }
            if (newArr.length > 0) {
                return Math.min(...newArr)

            } else return null
        }

        minPositive([3, 6, 8, -4, -3, 2, 16])// 2
        // Напишите функцию minValue, которая принимает два числа a, b в качестве аргументов и возвращает меньшее значение из суммы (a + b) и разности (a - b).
        clear()

        function minValue(a, b) {
            let result1 = a - b
            let result2 = a + b
            return result1 > result2 ? result2 : result1
        }

        // Напишите функцию min, которая принимает массив arr в качестве аргумента и возвращает минимальный элемент этого массива. Если массив пустой, функция должна вернуть []
        function min(arr) {
            return arr.length > 0 ? Math.min(...arr) : []
        }

        min([7, 23, 34, 9, 4, 45])// 4
        // Напишите функцию с именем victoryInSwim, которая принимает массив arr, хранящий результаты соревнований, в качестве аргумента и возвращает наименьшее время. Во всех тестах количество спортсменов всегда равно 3.
        function victoryInSwim(arr) {
            let arrResults = []
            for (let i = 0; i < arr.length; i++) {
                arrResults.push(arr[i][1])
            }
            console.log(Math.min(...arrResults))
        }

        victoryInSwim([['Nick', 8], ['Bob', 10], ['Kim', 6]]) //6
        // сделал задачу лучше (решение для неограниченного кол-во участников)

        // Напишите функцию minSquareSide, которая принимает четыре числа a, b, c, d (площади четырех квадратов) в качестве аргументов и возвращает сторону наименьшего квадрата.
        function minSquareSide(a, b, c, d) {
            return Math.min(Math.sqrt(a), Math.sqrt(b), Math.sqrt(c), Math.sqrt(d))
        }

        function minMax(arr) {
            let min = Math.min(...arr)
            let max = Math.max(...arr)
            return [min, max]
        }

        // Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
        function sumOfMinimums(arr) {
            let result = 0
            for (let i = 0; i < arr.length; i++) {
                result += (Math.min(...arr[i]))
            }
            console.log(result)
        }

        sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) //9

        function minimum(a, x) {
            let result = a % x;
            let result2 = x - result;

            return result < result2 ? result : result2;
        }

        minimum(10, 6) // 2
        console.log(Math.min('2', 1.99, 4))
        console.log(Math.min(undefined, 0, 1))
        // Math.max(1, 3); // 3
        // Math.max('2', 2); // 2
        // Math.max(undefined, 3); // NaN
        let arr = [1, 5, 8];
        console.log(Math.max(...arr)); // 8

        // Напишите функцию differenceMaxMin, которая принимает массив arr в качестве аргумента и возвращает разность между максимальным и минимальным значением. Если массив пустой, вернуть null.
        function differenceMaxMin(arr) {
            return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : null
        }

        // Напишите функцию maxMin, которая принимает массив arr в качестве аргументов и возвращает массив, содержащий максимальное и минимальное значение: [max, min]. Если массив пустой, вернуть [].
        function maxMin(arr) {
            return arr.length > 0 ? [Math.max(...arr), Math.min(...arr)] : []
        }

        // Напишите функцию max, которая принимает массив arr в качестве аргумента и возвращает максимальный элемент этого массива. Если массив пустой, функция должна вернуть [].
        function max(arr) {
            return arr.length > 0 ? Math.max(...arr) : []
        }
    }
}
// 845