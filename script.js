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

function operation(arg){
    console.log('started')
    if (!isNaN(arg)){
        return 'number'
    }
    else if (arg === '+'){
        return '+'
    }
}

function calculation(arg){
    let total = 0
    let stackNumbers = []

    for (let i = 0; i < arg.length; i++){
        if (operation(arg[i]) === 'number'){
            console.log('here is Number now')
            stackNumbers.push(+arg[i])
        }

        else if (operation(arg[i]) === '+'){
            console.log('here is +')
                total = stackNumbers[0] + +arg[i+1]
        }
    }
    console.log(stackNumbers)
    console.log(`result is ${total}`)
}

button.addEventListener('click', () => {
    valueInput = (input.value).replace(/ /gi,'').split('')
    calculation(valueInput)
    console.log(valueInput)
})
// continue tomorrow had reed, job, ect))
