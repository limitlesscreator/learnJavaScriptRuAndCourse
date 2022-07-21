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
//         throw Error('Error')
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

const requestURL = 'https://jsonplaceholder.typicode.com/todos/1'

let XMLRequest = new XMLHttpRequest()


XMLRequest.onreadystatechange = function (){
    if(this.status == 200 && this.readyState ==4){
        let response =  JSON.parse(this.response)
        console.log(JSON.stringify(response,'',2))
    }
}

XMLRequest.open('GET', requestURL, true)

XMLRequest.send()