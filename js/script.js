// Основы JavaScript
alert("Я JavaScript!")

// комментарий #1
/*комментарий*/ alert( 'Мир' ); /*#2*/

const bigInt = 1234567890123456789012345678901234567890424n;
alert(typeof bigInt + bigInt)

alert( `результат: ${1 + 2}` ); // результат: 3

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

personName = prompt("Как тебя зовут?");
alert(`Тебя зовут ${personName}`)
