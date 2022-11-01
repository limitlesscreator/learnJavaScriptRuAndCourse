// // Всплытие погружение
//
// document.getElementById('square').addEventListener('click',function (e) {
//     console.log('square clicked ' + e.eventPhase)
//     this.style.background = 'red'
// },true)
//
// function clicked(e){
//     // e.stopPropagation()
//     console.log('this button was clicked '+ e.eventPhase)
// }
//
// function div2(e){
//     // e.stopPropagation()
//     console.log('div2 '+ e.eventPhase) //3 bubbling, 2 - target, 1 - capturing
// }
//
//
// document.getElementById('button1').addEventListener('click', clicked, {capture: true})
// document.getElementById('div2').addEventListener('click', div2, {capture: true})
//
// // Всплытие погружение


// HTML
// <a href="#lala" style="width: 300px; display: block; height: 300px; background: white;" id="square">
//     <div id="div2">
//     <button style="width: 100px; height: 30px;" id="button1">Click</button>
// </div>
// </a>