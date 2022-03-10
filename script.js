// {
//     // nice way to look up object variable
//     let arr = {
//         console1: 'test value 1',
//         console2: 'test value 2',
//     }
//     console.table(arr) // just check the console)
//
//     // counter time of looping for example
//     console.time('Loop')
//     for (let i = 0; i < 10000000; i++){
//         //something
//     }
//     console.timeEnd('Loop') // we gonna get the result time of looping
// }

// Math Solver


const button = document.querySelector('.solve')
const input = document.querySelector('.mathInput')
let valueInput

// function operation(arg) {
//     console.log('started')
//     if (!isNaN(arg)) {
//         return 'number'
//     } else if (arg === '+') {
//         return '+'
//     } else if(arg === '-'){
//         return '-'
//     }
// }
//
// function calculation(arg) {
//     let total = 0
//     let stackNumbers = []
//     let stackOperator = []
//     let countOperation = false
//
//     for (let i = 0; i < arg.length; i++) {
//         debugger
//         if (operation(arg[i]) === 'number') {
//             console.log('here is Number now')
//             stackNumbers.push(+arg[i])
//             if (countOperation && stackOperator[0] === '+') {
//                 total = stackNumbers[0] + +arg[i]
//                 stackNumbers.push(total)
//                 stackNumbers.pop()
//                 stackNumbers.pop()
//                 stackOperator.pop()
//             } else if (countOperation && stackOperator[0] === '-') {
//                 total = stackNumbers[0] - +arg[i]
//                 stackNumbers.push(total)
//                 stackNumbers.pop()
//                 stackNumbers.pop()
//                 stackOperator.pop()
//             }
//         } else if (operation(arg[i]) === '+') {
//             console.log('here is: +')
//             stackOperator.push('+')
//             countOperation = true
//
//         } else if (operation(arg[i]) === '-') {
//             console.log('here is: -')
//             stackOperator.push('-')
//             countOperation = true
//         }
//     }
//     console.log(stackOperator)
//     console.log(stackNumbers)
//     console.log(`result is ${total}`)
// }
let currArr = []

function calculation(arg) {
    // let stackNumbers = [arg.filter(el => !isNaN(+el))]
    console.log(arg)

    for (let i = 0; i < arg.length; i++) {

    }

    for (let i = 0; i < 20; i++) {
        if (arg[i] === '*') {
            let indexOfFirstNum = i - 1
            let indexOfSecondNum = i + 1
            let indexOperation = i
            currArr.push(arg[i - 1] * arg[i + 1])
        }
    }
    console.log(currArr)
}

button.addEventListener('click', () => {
    valueInput = (input.value).replace(/[^+\d]/g, ' ').split(' ')
    calculation(valueInput)
})
