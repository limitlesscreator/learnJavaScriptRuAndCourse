// //Пример плохого решения и хорошего регения KISS
//
// // Плохой
//
// function badExampleWeek1(day) {
//     if (day === 1){
//         return 'Monday'
//     }
//     else if(day === 2){
//         return 'Tuesday'
//     }
//     else if(day === 3){
//         return 'Wednesday'
//     }
//     else if(day === 4){
//         return 'Thursday'
//     }
//     else if (day === 5){
//         return 'Friday'
//     }
//     else if (day === 6){
//         return 'Saturday'
//     }
//     else if (day === 7){
//         return 'Sunday'
//     }
//     else {
//         return 'try another number'
//     }
// }
// // Здесь код выглядит простым, но он так же объёмен, что нам не подходит
//
//
// // Плохой
// function badExampleWeek2(day) {
//     return day === 1 ? 'Monday' : day === 2 ? 'Tuesday' : day === 3 ? 'Wednesday' : day === 4 ?
//         'Thursday' : day === 5 ? 'Friday' : day === 6 ? 'Saturday' : day === 7 ? 'Sunday' : 'try another number'
// }
// // Здесь же код короткий, но теперь его не так просто понять на первый взгляд
//
// // Хороший
// function GoodExampleWeek1(day) {
//     switch (day) {
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thursday';
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         case 7:
//             return 'Sunday';
//         default:
//             throw Error('Not valid number')
//     }
// }
// // Данный код является уже простым для понимания и занимает меньше на 6 строк чем при написании else if
//
// //Хороший
// function GoodExampleWeek2(day) {
//     if (day < 1 || day > 7){
//         throw Error('Not valid number')
//     }
//
//     let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//
//     return days[day - 1]
// }
// // Один из самых коротких и понятных в данном случае кодов является этот
//
// // console.log(week2(3))
// // console.log(badExampleWeek1(12))
//
//
// console.log(GoodExampleWeek2(2))
// ///////////////////////////////////////////////////////////////////////////////////
//
// //Пример плохого решения и хорошего регения DRY
// // https://www.youtube.com/watch?v=KPqZvsyQ1p0
//
// // have to look some examples in google
//
// Один из примеров DRY

// Представим что у нас есть два массива и мы хотим отобразить их элементы по очереди
// let drinks = ['lemonade', 'soda', 'tea', 'water'];
// let food = ['beans', 'chicken', 'rice']
// let score = ['12', '50', '83']


// drinks.forEach(el => {
//     console.log(el)
// })
//
// food.forEach(el => {
//     console.log(el)
// })
//
// score.forEach(el => {
//     console.log(el)
// })
// /////////////////////////////////////////////////////////////////
//
// let drinks = ['lemonade', 'soda', 'tea', 'water'];
// let food = ['beans', 'chicken', 'rice']
// let score = ['12', '50', '83']
//
// function logItems(array) {
//     array.forEach(el => {
//         console.log(el)
//     })
// }
//
// logItems(drinks)
// logItems(food)
// logItems(score)

// let colorElement = document.querySelector('#color')
//
// colorElement.addEventListener('change', (e) => {
//     console.log(e.currentTarget.value)
// })

class Person {
    #age
    constructor(name, age){
        this.name = name
        this.#age = age
    }
  static  showAge(){
        console.log('hello')
    }
}

class Man extends Person{
    constructor(name, age, height){
        super(name,age)
        this.height = height
    }
}

const men = new Man('Mike',38, '210')

console.log(men)

Person.showAge()


// let testBlueElement = document.getElementById('testBlue').textContent
// console.log(testBlueElement)
