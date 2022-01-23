// repeat Higher Order Function
{
    const onClick12 = makeClickHandler(12)
    const onClick14 = makeClickHandler(14)
    const onClick16 = makeClickHandler(16)

    function makeClickHandler(size) {
        return function () {
            document.body.style.fontSize = `${size}px`
        }
    }

    document.querySelector('.button12').addEventListener('click', () => {
        onClick12()
    })
    document.querySelector('.button14').addEventListener('click', () => {
        onClick14()
    })
    document.querySelector('.button16').addEventListener('click', () => {
        onClick16()
    })
}

// https://tech.io/playgrounds/347/javascript-promises-mastering-the-asynchronous/some-pratice
function job(callback1, callback2) {
    setTimeout(() => {
        callback1();
    }, 2000)
    const callInterval = setInterval(() => {
        callback2();
    }, 1000)

    setTimeout(() => {
        clearInterval(callInterval)
    }, 3000)
}
const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if(randomNumber < .7) {
        resolve('Все прошло отлично!');
    } else {
        reject(new Error('Что-то пошло не так'));
    }
});
promise.then((data) => {
        console.log(data);  // вывести 'Все прошло отлично!'
    },
    (error) => {
        console.log(error); // вывести ошибку
    }
);


// https://www.youtube.com/watch?v=PoRJizFvM7s stopped at 9:37, have to do work, see ya tomorrow 😎
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
]

function getPost(){
    setTimeout(() => {
        let output = ''
        posts.forEach(el => {
            output += `<li> ${el.title}<li/>`
        })
        document.body.innerHTML = output
    },1000)
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post)
    },2000)
}
getPost()

createPost({title: 'Post Three', body: 'This is post Three'})
