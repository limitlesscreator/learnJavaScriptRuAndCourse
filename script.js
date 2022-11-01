function openMenu(){
    history.pushState(null,null,'menu')
    console.log('menu')
    if (location.href.split('/').reverse()[0] === 'menu'){
        content.innerHTML = '<p>Menu content<p/>'
    }
}

function openHome(){
    history.pushState(null,null,'home')
    console.log('home')
    console.log(location)
    if (location.href.split('/').reverse()[0] === 'home'){
        content.innerHTML = '<p>Home content<p/>'
    }
}


const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const content = document.getElementById('content')

menuBtn.addEventListener('click',openMenu)
homeBtn.addEventListener('click',openHome)



