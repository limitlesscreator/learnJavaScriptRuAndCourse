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
    console.log(a[0]+'---------\n'+a[1]+'---------\n'+a[2]+'---------\n'+a[3]+'---------\n'+a[4]+'---------\n')
    console.log(a[a.length -1])
}
let Nu = 53

function someName(){
    Nu--
    console.log(`until the end of discounts ${Nu}`)
}
setInterval(someName, 1000)

{
    const name = 'McDonald'
    const sign = name[0]+ '!'
    console.log(sign)
}
{
    const question  = 'How do you do?';
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
const greeting = firstWord + ' ' + secondWord +' '+thirdWord +"!";
console.log(greeting)