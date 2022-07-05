// class Samurai {
//     constructor(name) {
//         this.name2 = name
//     }
//     hello(){alert(this.name)}
// }
//
// let shogun = new Samurai('Random')
//
// // // shogun.hello()
// // // console.log(shogun.__proto__.__proto__) // ?
// // // console.dir(shogun.__proto__.constructor.__proto__) // ?
// // // console.log(shogun.__proto__.constructor.__proto__.__proto__) // ?
//
// //
// // let testObj = {
// //     first: 5,
// //     second: 8,
// //     third: 11,
// //     5: 8,
// //     car: function () {
// //         return 1
// //     }
// // }
// //
// // // for (let elem in testObj){
// // //     console.log(elem)
// // // }
// //
// // // console.log(shogun)
// //
// // for (let elem in shogun){
// //     console.log(elem)
// // }
//
// function eventHandlerM(event){
//     event.stopImmediatePropagation()
//     console.log(event.eventPhase)
//     console.log('mouse down')
// }
//
// function eventHandlerC(event){
//     event.stopImmediatePropagation()
//     console.log(event.eventPhase)
//     console.log('full click')
// }
//
// let testElement = document.getElementById('firstChild')
// testElement.addEventListener('click', eventHandlerC)
// testElement.addEventListener('mousedown', eventHandlerM)

let text = document.getElementById('test')
let button = document.getElementById('button1')

    button.addEventListener('click',deleteText)

function deleteText(){
    button.hidden = true
}



try {
    console.log('Start of try runs')

    unicycle

    console.log('End of tru runs --never reached')

} catch (error) {
    console.log('Error has occured' + error)
}
finally {
    console.log('THis is always run')
}

console.log('...Then the execution continues')
