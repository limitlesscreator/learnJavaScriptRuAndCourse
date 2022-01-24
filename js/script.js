// repeat Higher Order Function
// {
//     const onClick12 = makeClickHandler(12)
//     const onClick14 = makeClickHandler(14)
//     const onClick16 = makeClickHandler(16)
//
//     function makeClickHandler(size) {
//         return function () {
//             document.body.style.fontSize = `${size}px`
//         }
//     }
//
//     document.querySelector('.button12').addEventListener('click', () => {
//         onClick12()
//     })
//     document.querySelector('.button14').addEventListener('click', () => {
//         onClick14()
//     })
//     document.querySelector('.button16').addEventListener('click', () => {
//         onClick16()
//     })
// }

// // https://tech.io/playgrounds/347/javascript-promises-mastering-the-asynchronous/some-pratice
// function job(callback1, callback2) {
//     setTimeout(() => {
//         callback1();
//     }, 2000)
//     const callInterval = setInterval(() => {
//         callback2();
//     }, 1000)
//
//     setTimeout(() => {
//         clearInterval(callInterval)
//     }, 3000)
// }
// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//
//     if(randomNumber < .7) {
//         resolve('Все прошло отлично!');
//     } else {
//         reject(new Error('Что-то пошло не так'));
//     }
// });
// promise.then((data) => {
//         console.log(data);  // вывести 'Все прошло отлично!'
//     },
//     (error) => {
//         console.log(error); // вывести ошибку
//     }
// );


// https://www.youtube.com/watch?v=PoRJizFvM7s stopped at 9:37, have to do work, see ya tomorrow 😎
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
]

// function getPosts(){
//     setTimeout(() => {
//         let output = ''
//         posts.forEach(el => {
//             output += `<li> ${el.title}</li>`
//         })
//         document.body.innerHTML = output
//     },1000)
// }

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = true

            if (!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }

        }, 2000)
    });


}

// createPost({title: 'Post Three', body: 'This is post Three'})
//     .then(() => getPosts())
//     .catch((err => console.error(err)))

// const promise1 = Promise.resolve('Hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'Goodbye')
// })

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values)
// })

const getPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await data.json()
}
const getUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    return await data.json()
}
const getComments = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments')
    return await data.json()
}

// //if error then reject Promise
Promise.all([getPosts(),getComments(),getUsers()]).then(data => console.log(data))
// Promise.allSettled the same as about but if there is an error then no reject and return object with statuses
Promise.allSettled([getPosts(),getComments(),getUsers()]).then(data => console.log(data))


function job() {
    return new Promise(function(resolve, reject) {
        resolve(1);
    });
}

let promise = job();

promise

    .then(function() {
        console.log('Success 1');
    })

    .then(function() {
        console.log('Success 2');
    })

    .then(function() {
        console.log('Success 3');
    })

    .catch(function() {
        console.log('Error 1');
    })

    .then(function() {
        console.log('Success 4');
    });

setTimeout(() => {
    console.log(promise)
},2000)

// no 2 practice
{
    function job(state) {
        return new Promise(function (resolve, reject) {
            if (state) {
                resolve('success');
            } else {
                reject('error');
            }
        });
    }

    let promise = job(true);
    promise
        .then(function (data) {
            console.log(data);
            return job(false);
        })
        .catch(function (error) {
            console.log(error);
            return 'Error caught';
        })
        .then(function (data) {
            console.log(data);
            return job(true);
        })
        .catch(function (error) {
            console.log(error);
        });
}
// success,error,error caught
