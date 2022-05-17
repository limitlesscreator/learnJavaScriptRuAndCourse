window.addEventListener('contextmenu',(event) => {
    event.preventDefault()
})

const circle = document.querySelector('.circle').addEventListener('click',function(){
    console.log(this.classList.toggle('black'))
})
