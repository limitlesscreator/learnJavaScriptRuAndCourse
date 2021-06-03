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
        function fourOperations(a, b){
            return [a+b,a-b,a*b,a/b]
        }
    }
    {
        function areaComparison(r,a){
            let SoFSquare = a ** 2
            let SoFCircle = Math.PI * (r ** 2)
            if (SoFCircle > SoFSquare){
                return('circle')
            }
            else if(SoFSquare > SoFCircle){
                return('square')
            }
            else if(SoFSquare === SoFCircle){
                return('the same')
            }
        }
        areaComparison(2,5)
    }
    {
        function cube(edge){
            let v = edge ** 3
            let s = 6 * edge ** 2
            console.log([v,s])
        }
        cube(1)
    }
    {
        function changeValues(a, b){
// your code will be here
        }
        changeValues(1,2)
    }
    {
        let a = 5, b = 6;
        [a, b] = [b, a];
        console.log(`${a} ${b}`);
    }
    {
        function time(hour, minutes, seconds){
            let h = hour * 60 * 60
            let m = minutes * 60
            let s = seconds
            let result = h + m + s
        }
        {
            function breakChocolate(n,m) {
                if(n > 0 && m > 0){
                    return n * m - 1;
                }
                else{
                    return 0
                }
            }
        }
    }
}
{
    function root(x, n) {
        let result = (x) ** (1/n)
        console.log(result)
    }
    root(6.25,2)
}
{
    function converter (mpg) {
        let gallon = mpg / 4.54609188
        let litres = gallon * 1.609344
        console.log(Number(litres.toFixed(2)))
    }
    converter(30)
}