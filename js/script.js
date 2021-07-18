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
    {
        // Напишите функцию maxNegative, которая принимает массив arr в качестве аргумента и возвращает максимальный отрицательный элемент в массиве. Если массив arr не содержит отрицательных элементов, вернуть null.
        function maxNegative(arr) {
            if (arr.length > 0) {
                let newArr = []
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < 0) {
                        newArr.push(arr[i])
                    }
                }
                if (newArr.length > 0) {
                    let result = []
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] < 0) {
                            result.push(arr[i])
                        }
                    }
                    return Math.max(...result)
                } else return null

            } else return null
        }
    }
}
clear()
{
    // 7kyu
    // Create the function consecutive(arr) that takes an array of integers and
    // return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number
    function consecutive(arr) {
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        let points = 0
        for (let i = min; i <= max; i++) {
            points++
        }
        return points - arr.length
    }

    consecutive([4, 8, 6])// 2

    //8kyu Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
    function pipeFix(numbers) {
        let min = Math.min(...numbers)

        let max = Math.max(...numbers)
        let newArr = []
        for (let i = min; i <= max; i++) {
            newArr.push(i)
        }
        return newArr
    }

    // Given an array of numbers, return the difference between the largest and smallest values.
    function betweenExtremes(numbers) {
        let minNum = Math.min(...numbers)
        let maxNum = Math.max(...numbers)
        return maxNum - minNum
    }

    function getMinMax(arr) {
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        return [min, max]
    };
    // The numbers are always positive.
    // The numbers are in the range (1  ≤  a, b, c  ≤  10).
    // You can use the same operation more than once.
    // It's not necessary to place all the signs and brackets.
    // Repetition in numbers may occur .
    // You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

    function expressionMatter(a, b, c) {
        let firstResult = a * (b + c)
        let secondResult = a * b * c
        let thirdResult = a + b * c
        let fourthResult = (a + b) * c
        let fifth = a + b + c
        return Math.max(firstResult, secondResult, thirdResult, fourthResult, fifth)
    }

    console.log(); // 0.4879408610989855

    // Напишите функцию с именем integerFromMinToMax, которая принимает два целых положительных числа min, max (min < max) в качестве аргументов и возвращает случайное число от min (включительно) до max (включительно).
    function integerFromMinToMax(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function integerFrom0To99() {
        return Math.floor(Math.random() * 100)
    }

    function integerFrom0To10() {
        return Math.ceil(Math.random() * 10)
    }

    function integerFrom0To100() {
        return Math.floor(Math.random() * 101);
    }

    function integerFrom10To99() {
        return Math.floor((Math.random() * 90) + 10);
    }

    // one another version
    {
        const randomWithBorder = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            console.log(Math.floor(Math.random() * (max - min) + 1) + min)
        }
        randomWithBorder(5, 10)
    }

    function integerFrom0ToN(n) {
        return Math.floor(Math.random() * (n))
    }

    function integerFrom100To999() {
        let min = 100
        let max = 999
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // Напишите функцию с именем createPhoneNumber, которая возвращает случайный номер телефона в виде строки длиной 12, начинающейся с '+1', и случайных цифр.
    function createPhoneNumber() {
        let arrStr = ['+', '1']
        for (let i = 0; i <= 9; i++) {
            arrStr.push(Math.floor(Math.random() * 10))
        }
        return arrStr.join('')
    }

    function yourFutureCareer() {
        let random = Math.random()
        if (random <= 0.32) {
            return "FrontEnd Developer"
        } else if (random <= 0.65) {
            return "BackEnd Developer"
        } else {
            return 'Full-Stack Developer'
        }
    }

    yourFutureCareer();

    clear()
    const binaryArrayToNumber = arr => {
        switch (arr.join('')) {
            case '0001':
                return 1;
                break;
            case '0101':
                return 5;
                break;
            case '0010':
                return 2;
                break;
        }
    };
    binaryArrayToNumber([0, 0, 1, 0])//2

    // Don't give me five!
    // In this kata you get the start number and the end number of a region and should return
    // the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

    // 7kyy
    function dontGiveMeFive(start, end) {
        clear()
        let points = 0
        //     for (let i = start; i <= end; i++){
        //         if (i % 5 === 0 && i % 10 !== 0 || i % 50 === 0 || i % 500 === 0){continue}
        //         else points++
        //     }
        //     return points;
        // }
        let arr = []

        function dontGiveMeFive(start, end) {
            let points = 0
            for (let i = start; i <= end; i++) {
                let isFiveHere = String(i).split(' ')
                for (let j = 0; j < isFiveHere.length; j++) {
                    if (isFiveHere[j][0] == 5 || isFiveHere[j][1] == 5 || isFiveHere[j][2] == 5 || isFiveHere[j][3] == 5) {
                        continue
                    } else points++;
                    break
                }
            }
            return points
        }

        console.log(points)
    }

    dontGiveMeFive(4, 17) //12
}
{
    clear()
    // [[Prototype]], prototype
    const animal = {
        eats: true
    };
    const cat = {
        jumps: true
    };

    cat.__proto__ = animal; // устанавливаем animal как прототип для cat

    console.log(cat.jumps); // true
    console.log(cat.eats); // true
    console.log(cat.eats = false)
    console.log(animal.eats = false)
    console.log(animal.eats)
    const object = {};
    console.log(object); // [object Object] { ... }
    console.log(object.__proto__ === Object.prototype); // true
    console.log(object.__proto__.toString == Object.prototype.toString); // true
    console.log(Object.prototype.__proto__); // null
    clear()
    {
        const array = ['a', 'b', 'c'];
        console.log(array.__proto__ === Array.prototype); // true,
// array наследует методы массивов от Array.prototype
        console.log(array.__proto__.__proto__ === Object.prototype); // true,
// array наследует другие методы (не массивов) от Object.prototype
    }
    // Любой объект создаётся через функции конструктора либо же класса и у любого объекта есть __proto__
    clear()
    // let element = document.querySelector('.thisElement')
    // let newElement = "<span>momo u, </span>"
    // // {element.innerHTML += newElement}
    // setInterval(() => {element.innerHTML += newElement},50)
    console.log((-100).toString()); // "-100"
    console.log((10).toString(2)); // "1010"
    // console.log((100).toString(37)); // RangeError
    console.log(" " + -20)

    // Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
    function addBinary(a, b) {
        return (a + b).toString(2)
    }

    // This kata is about converting numbers to their binary or hexadecimal representation:
    // If a number is even, convert it to binary.
    // If a number is odd, convert it to hex.
    function evensAndOdds(num) {
        return num % 2 === 0 ? num.toString(2) : num.toString(16)
    }

    function toBinary(n) {
        return +n.toString(2);
    }

    function convertNumber(num) {
        return [num, +num.toString(2), +num.toString(8), num.toString(16)]
    }

    function numToHexadecimal(num) {
        return num.toString(16)
    }

    function convertNumber(num, n) {
        return n <= 36 && n >= 2 ? num.toString(n) : undefined
    }

    console.log((1234567890).toString(10))
    // console.log((9).toString(0))
    console.log((0.012345).toString(10))
    {
        // console.log((900.7199254740991).toFixed(101)); // "RangeError"
        // console.log(('153425').toFixed(1)); // "TypeError"
        // console.log(('35$').toFixed(2)); // "TypeError"
        // console.log((35).toFixed(-1)); // "RangeError"
    }
    {
        let num = 1289.56;
        console.log(num.toFixed(1)); // "1289.6", "string"
        console.log(+num.toFixed(1)); // 1289.6, "number"
        console.log(Number(num.toFixed(1))); // 1289.6, "number"
    }
    //return price without vat
    // your code
    function excludingVatPrice(price) {
        let sail = 100 - 15
        let result = price * (sail / 10)
        return result = price / 15 * 0.15
        // will improve
    }

    function averageSpeed(s1, t1, s2, t2) {
        return +((s1 + s2) / (t1 + t2)).toFixed(2)
    }

    console.log(Math.PI)

    function ringSquare(r1, r2) {
        return +(Math.PI * (Math.pow(r1, 2) - Math.pow(r2, 2))).toFixed(2)
    }

    // Напишите функцию convertRadiansToDegrees, которая принимает значение n (угол в радианах) в качестве аргумента и возвращает значение угла в градусах.
    // Результат округлите до 2 знаков после запятой и возвратите в виде числа.
    function convertRadiansToDegrees(n) {
        return +(180 * n / Math.PI).toFixed(2)
    }

    // Напишите функцию average, которая принимает массив marks (массив отметок учеников) в качестве аргумента и возвращает средний балл успеваемости в классе.
    // Результат округлите до 1 знака после запятой и возвратите в виде строки.
    function average(marks) {
        let result = 0
        for (let i = 0; i < marks.length; i++) {
            result += marks[i]
        }
        return (result / marks.length).toFixed(1)
    }

    average([4, 5, 4, 5]) //должна возвратить "4.5".
    // Необходимо отформатировать элементы массива:// элемент с индексом 0 - до 0 знаков после запятой;// элемент с индексом 1 - до 1 знаков после запятой;
    // элемент с индексом 2 - до 2 знаков после запятой;// элемент с индексом 3 - до 3 знаков после запятой; и так далее.
    // Напишите функцию с именем formatArray, которая принимает массив arr в качестве аргумента и и возвращает массив, в котором каждый элемент отформатирован в соответствии с данным правилом.
    function formatArray(arr) {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(+arr[i].toFixed(i))
        }
        return newArr
    }

    formatArray([1.345, 2.234, 3.1234, 4.56789])
    console.log(parseInt('56.5ab', 10)); // 56
    console.log(parseInt('     5abc   ', 16)); // 23228
    console.log(parseInt(56.15, 10)); // 56
    console.log(Number.parseInt('-56.15', 10)); // -56
    console.log(Number.parseInt(100, 2)); // 4
    console.log(Number.parseInt('$56abc', 16)); // NaN
    console.log(parseInt('abc5.6')); // NaN
    clear()

    function getDay(answer) {
        return parseInt(answer, 10)
    }

    // Напишите функцию hydrate, которая принимает массив arr, содержащий строки с названием и количеством стаканов выпитого напитка, и возвращает общее количество выпитой жидкости в мл.
    function hydrate(arr) {
        let glass = 0
        for (let i = 0; i < arr.length; i++) {
            glass += parseInt(arr[i])
        }
        return `${glass * 200} ml`
    }

    hydrate(["3 glasses of water", "1 glass of milk", "2 glasses of juice", "1 glass of wine"]) //1400 ml

    // Напишите функцию isStringContainsNumber, которая принимает строку str в качестве аргумента и возвращает true, если строка содержит целое число, и false, в противном случае.
    function isStringContainsNumber(str) {
        return Number.parseInt(str) == str
    }

    function getAge(inputString) {
        return Number.parseInt(inputString)
    }

    // Complete the function which converts hex number (given as a string) to a decimal number.
    function hexToDec(hexString) {
        return parseInt(hexString, 16)
    }

    function binToDec(bin) {
        return +parseInt(bin, 2)
    }

    console.log(parseInt(15.5))
    console.log(parseInt('QA100'))
    console.log(parseInt(0.314, 10))
    console.log(parseInt(8989898989, 2))

    // Number.parseFloat()
    console.log(parseFloat('2.05')); // 2.05
    console.log(Number.parseFloat('32.32.32')); //32.32
    console.log(parseFloat('11 + true')); // 11
    console.log(Number.parseFloat('1t')); // 1
    console.log(parseFloat('2e+1')); // 20
    console.log(Number.parseFloat('.15a')); // 0.15
    console.log(Number.parseFloat('-18+2')); // -18
}
clear()
//just a little reduce))

const initialState = {
    count: 0,
    cake: true,
    switches: 'zilents',
    user: {name: 'cassidy'}
}

const actions = [
    {type: 'ADD', by: 2},
    {type: 'MINUS', by: 4},
    {type: 'MINUS', by: -4},
    {type: 'EAT_CAKE'},
    {type: 'SWITCH_THE_SWITCH', clack: "Zealios"},
]

function reducer(state, action) {
    if (action.type === 'ADD') {
        return {...state, count: state.count + action.by}
    } else if (action.type === "MINUS") {
        return {...state, count: state.count - action.by}
    } else if (action.type === "EAT_CAKE") {
        return {...state, cake: false}
    } else if (action.type === 'SWITCH_THE_SWITCH') {
        return {...state, switches: action.clack}
    }
    return state
}

console.log(actions.reduce(reducer, initialState))

console.log(Number.parseFloat('1854.359     ')); // 1854.359
console.log(Number.parseFloat('   .156')); // 0.156
console.log(parseFloat('     2.05aa     ')); // 2.

function priceOfItem(receipt) {
    return +parseFloat(receipt)
}

function isStringContainsNumber(str) {
    return parseFloat(str) == str
}

// Напишите функцию purchaseValue, которая принимает массив values, содержащий цены и название каждого купленного товара в качестве аргумента и возвращает общую стоимость покупки.
function purchaseValue(values) {
    let result = 0
    for (let i = 0; i < values.length; i++) {
        result += +parseFloat(values[i])
    }
    return result

}

purchaseValue(['1.31 bread', '7.96 cabbage', '2.10 candies', '0.84 salad'])

function parseF(s) {
    return +parseFloat(s) == s ? parseFloat(s) : null;
}

clear()
{
    function pushElement(arr, value) {
        arr.push(value)
        return arr
    }

    pushElement([1, 2, 3, 5, 6], 9)
}

function createArray(n, m) {
    let newArr = []
    for (let i = 0; i < n.length; i++) {
        newArr.push(m)
    }
    return newArr
}

{
    clear()

    function createArray(n, m) {
        let newArr = []
        for (let i = 0; i < n; i++) {
            newArr.push(m)
        }
        console.log(newArr)
    }

    createArray(3, 40)
}
// Напишите функцию createOddArray, которая принимает целое неотрицательное число n в качестве аргумента и возвращает массив, содержащий n нечетных чисел.
{
    function createOddArray(n) {
        let newArr = []
        for (let i = 0; newArr.length < n; i++) {
            if (i % 2 !== 0) {
                newArr.push(i)
            }
        }
        return newArr
    }

    // Напишите функцию alternationArray, которая принимает целое неотрицательное число n в качестве аргумента и возвращает массив, содержащий числа от 0 до n, в котором четные числа положительны, а нечетные отрицательны.
    function alternationArray(n) {
        let newArr = []
        for (let i = 0; i <= n; i++) {
            if (i % 2 !== 0 && i !== 0) {
                newArr.push(-i)
            } else newArr.push(i)
        }
        return newArr
    }

    {
        function createArray(n) {
            if (n === 0) {
                return []
            } else {
                let newArr = []
                for (let i = 1; i <= n; i++) {
                    newArr.push(i)
                }
                return newArr
            }
        }
    }
    {
        function createReverseArray(n) {
            let arr = []
            for (let i = n; i >= 0; i--) {
                arr.push(i)
            }
            return arr
        }
    }

    function createNegativeArray(n) {
        let arr = []
        for (let i = -1; i >= -n; i--) {
            arr.push(i)
        }
        return arr
    }

    function createArrayFromNToM(n, m) {
        let newArr = []
        for (let i = n; i <= m; i++) {
            newArr.push(i)
        }
        return newArr
    }

    function createArray(n) {
        let newArr = []
        for (let i = 1; i <= n; i++) {
            newArr.push(i * 10)
        }
        return newArr
    }

    // Sum Numbers
    const sum = numbers => {
        let add = (x, y) => x + y
        let sum = numbers.reduce(add, 0)
        return sum
    }
    console.log(Array.isArray([1, 2, 3])); // true
    console.log(Array.isArray(new Date)); // false
    console.log(Array.isArray({})); // false
    // console.log({}.toString.call(num)); // "[object Number]"
    // console.log({}.toString.call(str)); // "[object String]"
    // console.log({}.toString.call(bool)); // "[object Boolean]"
    // console.log({}.toString.call(arr)); // "[object Array]"
    // console.log({}.toString.call(obj)); // "[object Object]"
    // console.log({}.toString.call(data)); // "[object Date]"
    // console.log({}.toString.call(zero)); // "[object Null]"
    // console.log({}.toString.call(unknown)); // "[object Undefined]"
    function typeOfArg(value) {
        return {}.toString.call(value)
    }

    function isArrayContainsArray(arr) {
        clear()
        let result = false
        for (let i = 0; i <= arr.length; i++) {
            if ({}.toString.call(arr[i]) === '[object Array]') {
                result = true
                break;
            }
        }
        console.log(result)
    }

    isArrayContainsArray([[], true, false, [12]])

    function isArgArray(value) {
        return Array.isArray(value)
    }

    function isArrayInArg(value1, value2) {
        return Array.isArray(value1) || Array.isArray(value2)
    }

    function type(value) {
        switch ({}.toString.call(value)) {
            case "[object Array]": {
                return 'array'
            }
            case "[object Number]": {
                return 'number'
            }
            case "[object String]": {
                return 'string'
            }
            case "[object Object]": {
                return 'object'
            }
            case "[object Date]": {
                return 'date'
            }
            case "[object Null]": {
                return 'null'
            }
            case "[object Undefined]": {
                return 'undefined'
            }
        }
    }

    console.log({}.toString.call(null))

    clear()
    {
        let xArray = [9, 1, 2, 3]
        let yArray = xArray

        const addToScoreHistory = (array, score) => {
            array.push(score)
            return array
        }
        const scoreArray = [44, 23, 12]
        console.log(addToScoreHistory(scoreArray, 15))

        //Shallow copy vs Deep copy (clones)
        clear()
        const zArray = [...yArray, 10]
        console.log(zArray)
        console.log(yArray)

        yArray.push([8, 9, 10])
        const vArray = [...yArray]
        console.log(vArray)
        vArray[4].push(5)
        console.log(vArray)
        console.log(yArray)
        // nested structural data types still share references

        const scoreObj = {
            'first': 44,
            'second': 12,
            'third': {'a': 1, 'b': 2}
        }

        Object.freeze(scoreObj)
        scoreObj.third.a = 8
        console.log(scoreObj)
    }
    clear()
    {
        const arrCheck = value => {
            let result = false

            if ({}.toString.call(value) === '[object Array]' && value.length === 0) {
                console.log(true)
            } else if ({}.toString.call(value) === '[object Array]') {
                for (let i = 0; i < value.length; i++) {
                    if ({}.toString.call(value[i]) === '[object Array]') {
                        result = true
                    } else {
                        result = false;
                        break;
                    }
                }
            } else {
                console.log(result)
            }
            console.log(result)
        }
        arrCheck([[], {}])
    }
    {
        let arr = [2, 15, 7, 13, 10, -14, 9, 11];
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Math.abs(arr[i]) > 10) {
                count++;
            }
        }
        console.log(count)
    }

    // simple tasks with arr again)..
    function countEven(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            arr[i] % 2 === 0 ? result++ : null
        }
        return result
    }

    function countNumbers(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            if ({}.toString.call(arr[i]) === '[object Number]') {
                result++
            }
        }
        return result
    }

    function countOfWords5(names) {
        let result = 0
        for (let i = 0; i < names.length; i++) {
            if (names[i].length === 5) {
                result++
            }
        }
        return result
    }

    countOfWords5(['Noah', 'Liam', 'William', 'Mason', 'James'])//2
    // Напишите функцию isElementInArray, которая принимает массив arr в качестве аргумента и, если массив содержит хотя бы один элемент, равный сумме своих соседей слева и справа, находит первый такой элемент и возвращает строку вида:
    // "true: it is <element>", где <element> - значение элемента.
    // или false, в противном случае.
    function isElementInArray(arr) {
        let leftNum, rightNumber
        let result = false
        for (let i = 0; i < arr.length; i++) {
            leftNum = arr[i - 1]
            rightNumber = arr[i + 1]
            if (leftNum + rightNumber === arr[i]) {
                result = `true: it is ${arr[i]}`;
                break;
            }
        }
        console.log(result)
    }

    isElementInArray([-5, 0, 0, -2, 0, 2])

    function countOppositeSignsPairs(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0 && arr[i + 1] > 0 || arr[i + 1] < 0 && arr[i] > 0) {
                result++
            }
        }
        return (result)
    }
}
{
    function countEvenPositive(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 && arr[i] % 2 === 0) {
                result++
            }
        }
        return result
    }

    // Напишите функцию counOfPositivePairs, которая принимает массив arr в качестве аргумента, и возвращает количество пар соседних элементов, являющихся положительными числами.
    function counOfPositivePairs(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 && arr[i + 1] > 0) {
                result++
            }
        }
        return (result)
    }

    // Напишите функцию lastEvenElement, которая принимает числовой массив arr в качестве аргумента, и возвращает последний четный элемент и его индекс в виде массива [element, index], или undefined, если массив не содержит четных элементов.
    function lastEvenElement(arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result = [arr[i], i]
            } else result = undefined
        }
        return result
    }

    function lastEvenElement(arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result = [arr[i], i]
            }
        }
        if (result.length > 0) {
            return result
        } else return undefined
    }

    clear()
    // Напишите функцию equalElementsInArray, которая принимает массив чисел arr в качестве аргумента,
    // и определяет, есть ли в массиве одинаковые элементы, и если есть, возвращает их в виде массива [element, element].
    // Если таких пар несколько, вернуть первую из них. Если в массиве нет одинаковых элементов, вернуть сообщение "All elements are different". Если исходный массив пустой, вернуть пустой массив.
    function equalElementsInArray(arr) {
        if (arr.length > 0) {
            let firstNumber
            let result = []
            let again = 1
            for (let i = 0; i < arr.length; i++) {
                firstNumber = arr[i]
                for (let j = again; j < arr.length; j++) {
                    if (firstNumber === arr[j]) {
                        result = [arr[i], arr[i]];
                        i = 100;
                        break;
                    }
                }
                again++
            }
            if (result.length > 0) {
                console.log(result)
            } else {
                console.log("All elements are different")
            }
        } else return []
    }

    equalElementsInArray([5, 14, 8, 3, 3, 3, 10, 8]) //8 8

    function changeArray(prices) {
        return prices.map(n => n * 2)
    }

    function isNegativeInArray(arr) {
        let result = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                result = true;
                break
            }
        }
        return result
    }

    function countSheeps(arrayOfSheep) {
        let result = 0
        for (let i = 0; i < arrayOfSheep.length; i++) {
            if (arrayOfSheep[i] === true) {
                result++
            }
        }
        return result
    }

    clear()

    function findDifference(a, b) {
        let result1 = 1
        let result2 = 1
        for (let i = 0; i < a.length; i++) {
            result1 *= a[i]
        }
        for (let i = 0; i < a.length; i++) {
            result2 *= b[i]
        }
        return Math.abs((result2 - result1))
    }

    findDifference([2, 2, 3], [5, 4, 1])
}
