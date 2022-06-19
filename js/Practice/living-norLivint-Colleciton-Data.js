

let живая = document.getElementsByClassName('block-1')
let неЖивая = document.querySelector('.block-1')

let parent = document.getElementById('parent').append()
let firstChild =  document.getElementById('firstChild')

parent.removeChild(firstChild)

console.log(живая)
console.log(неЖивая)


// HTML
// <!--Живая - Не живая Коллекция данных-->
// <!--<div id="parent">-->
// <!--    <div id="firstChild" class="block-1"></div>-->
//     <!--    <div class="block-1"></div>-->
//     <!--    <div class="block-1"></div>-->
//     <!--</div>-->
// <!--Живая - Не живая Коллекция данных-->
