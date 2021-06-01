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

smalles([34,15,88,2])

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
    function greet(){
        return 'hello world!'
    }
}
//8kyu
{
    function greet(name){
        return "Hello, " + name + " how are you doing today?"
    }

    greet('Vlad')
}
{
    function helloWorld(){
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