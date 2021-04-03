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
    console.log(undefined + 1 )
}
{
    const unknown = undefined
    const sum = unknown + 100
    const typeOfSum = typeof sum
    // const result = "NaN"
}