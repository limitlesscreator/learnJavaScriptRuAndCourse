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

//React anki's cards

// 1
{
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('Component didMount or Update')
    })

    useEffect(() => {
        console.log('Component didMount')
    }, [])


    useEffect(() => {
        console.log('deps changed or first mount' + counter)
    }, [counter])
}

// 2
// ***useReducer***
// этот хук можно использовать как альтернативу к useState особено будет полезен когда есть некоторая сложная логика
// состояния, то есть когда это не только одно значение, а целый кусок данных который нужно менять по сложному алгоритму.

// 3
//      ***Что такое redux и какую проблему он решает.***
//     библиотека управления состоянием для приложений, написанных на JavaScript.
//     Redux решает проблему с использованием состояний. Например представим, что у нас есть 10 компонент вложенных
//     в друг друга и нужно передать данные с первой в десятую, то получается мы будем перебрасывать через пропсы
//     через все компоненты, а если вдруг нам надо будет что-то родительским компонентам передавать, то код вовсе
//     начнёт быть большим и запутаным по итогу.
//     Но Redux позволяет вынести состояние в нешнюю зависимость и каждая компонента может сразу получить данные
//     из этого состояния


// 3
// ***Что такое хуки?***
// Хуки это функциональность которая позволяет использовать состояние приложения и методы жизненный циклов без
// использование классов. Раньше доскуп к методам жизненного цыкла или к состоянию имели только классовые компоненты,
//     а функциональные могли описывать только разметку.
//     Могу добавить, что хуки можно вызывать только внутри функциональных компонентов на верхнем уровне. Нельзя
// вкладывать хук внутрь другого хука, нельзя вызывать в обработчике событий, так же внутри блоков циклов, но хуки
// можно вызывать внутри кастомных хуков.
//     Функциональные компоненты с хуками читаются проще чем классовые.

// 4
// *** Что такое DOM?***
// Когда мы пишем html код и когда браузер получает этот код страницы, для него это обычная
// последовательность символов которую он не понимает и для того чтобы браузер смог понять что это html5 документ
// в котором например присутствует тег title который нужно прописать на вкладке, то для всего этого html документ
// нужно преобразовать в набор неких сущностей, над которыми можно оперировать програмно – такое преобразование
// называется парсингом. После парсинга все эти символы превращаются в эрорхическую структуру которая называется
// Дерево Объектов и отдельные объекты этого дерева называются node.
//     И если вкратце то DOM это представление HTML документа в виде дерева тегов.
//     А сам Dom нужен нам для того чтобы мы могли взаимодействовать с элементами html страницы с помощью JS.