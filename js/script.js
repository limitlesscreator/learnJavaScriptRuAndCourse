// // repeat Higher Order Function
// // {
// //     const onClick12 = makeClickHandler(12)
// //     const onClick14 = makeClickHandler(14)
// //     const onClick16 = makeClickHandler(16)
// //
// //     function makeClickHandler(size) {
// //         return function () {
// //             document.body.style.fontSize = `${size}px`
// //         }
// //     }
// //
// //     document.querySelector('.button12').addEventListener('click', () => {
// //         onClick12()
// //     })
// //     document.querySelector('.button14').addEventListener('click', () => {
// //         onClick14()
// //     })
// //     document.querySelector('.button16').addEventListener('click', () => {
// //         onClick16()
// //     })
// // }
//
// // // https://tech.io/playgrounds/347/javascript-promises-mastering-the-asynchronous/some-pratice
// // function job(callback1, callback2) {
// //     setTimeout(() => {
// //         callback1();
// //     }, 2000)
// //     const callInterval = setInterval(() => {
// //         callback2();
// //     }, 1000)
// //
// //     setTimeout(() => {
// //         clearInterval(callInterval)
// //     }, 3000)
// // }
// // const promise = new Promise((resolve, reject) => {
// //     const randomNumber = Math.random();
// //
// //     if(randomNumber < .7) {
// //         resolve('Все прошло отлично!');
// //     } else {
// //         reject(new Error('Что-то пошло не так'));
// //     }
// // });
// // promise.then((data) => {
// //         console.log(data);  // вывести 'Все прошло отлично!'
// //     },
// //     (error) => {
// //         console.log(error); // вывести ошибку
// //     }
// // );
//
//
// // https://www.youtube.com/watch?v=PoRJizFvM7s stopped at 9:37, have to do work, see ya tomorrow 😎
// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'},
// ]
//
// // function getPosts(){
// //     setTimeout(() => {
// //         let output = ''
// //         posts.forEach(el => {
// //             output += `<li> ${el.title}</li>`
// //         })
// //         document.body.innerHTML = output
// //     },1000)
// // }
//
// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post)
//
//             const error = true
//
//             if (!error) {
//                 resolve()
//             } else {
//                 reject('Error: Something went wrong')
//             }
//
//         }, 2000)
//     });
//
//
// }
//
// // createPost({title: 'Post Three', body: 'This is post Three'})
// //     .then(() => getPosts())
// //     .catch((err => console.error(err)))
//
// // const promise1 = Promise.resolve('Hello world')
// // const promise2 = 10
// // const promise3 = new Promise((resolve, reject) => {
// //   setTimeout(resolve, 2000, 'Goodbye')
// // })
//
// // Promise.all([promise1, promise2, promise3]).then((values) => {
// //     console.log(values)
// // })
//
// const getPosts = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return await data.json()
// }
// const getUsers = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users')
//     return await data.json()
// }
// const getComments = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/comments')
//     return await data.json()
// }
//
// // //if error then reject Promise
// Promise.all([getPosts(),getComments(),getUsers()]).then(data => console.log(data))
// // Promise.allSettled the same as about but if there is an error then no reject and return object with statuses
// Promise.allSettled([getPosts(),getComments(),getUsers()]).then(data => console.log(data))
//
//
// function job() {
//     return new Promise(function(resolve, reject) {
//         resolve(1);
//     });
// }
//
// let promise = job();
//
// promise
//
//     .then(function() {
//         console.log('Success 1');
//     })
//
//     .then(function() {
//         console.log('Success 2');
//     })
//
//     .then(function() {
//         console.log('Success 3');
//     })
//
//     .catch(function() {
//         console.log('Error 1');
//     })
//
//     .then(function() {
//         console.log('Success 4');
//     });
//
// setTimeout(() => {
//     console.log(promise)
// },2000)
//
// // no 2 practice
// {
//     function job(state) {
//         return new Promise(function (resolve, reject) {
//             if (state) {
//                 resolve('success');
//             } else {
//                 reject('error');
//             }
//         });
//     }
//
//     let promise = job(true);
//     promise
//         .then(function (data) {
//             console.log(data);
//             return job(false);
//         })
//         .catch(function (error) {
//             console.log(error);
//             return 'Error caught';
//         })
//         .then(function (data) {
//             console.log(data);
//             return job(true);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
// // success,error,error caught

// function addAsync(x, y) {
//     return new Promise(
//         (resolve, reject) => { // (A)
//             if (x === undefined || y === undefined) {
//                 reject(new Error('Must provide two parameters'));
//             } else {
//                 resolve(x + y);
//             }
//         });
// }
// addAsync(1,2)
//
//
//
//
// let query = '&query= Вятские Поляны, Мира 47'
// const key = 'fd9af677e629b68ee3ef6a6302c90889'
// const data = fetch(`http://api.positionstack.com/v1/forward?access_key=${key}${query}`)
//     .then(data => data.json())
//     .then(result => console.log(result))

let data = [
    {
        "Город": "Вятские Поляны",
        "Адреса": "ул. Мира, 47",
        "fullAdress": "Вятские Поляны ул. Мира, 47",
        "Longitude": "56.223061",
        "Latitude": "51.07204641",
        "Index": "612964",
        "inCity": "в Вятских Полянах"
    },
    {
        "Город": "Киров",
        "Адреса": "ул. Карла Маркса, 62",
        "fullAdress": "Киров ул. Карла Маркса, 62",
        "Longitude": "58.6047204",
        "Latitude": "49.6693482",
        "Index": "610020",
        "inCity": "в Кирове"
    },
    {
        "Город": "Кирово-Чепецк",
        "Адреса": "пр. Россия, 18",
        "fullAdress": "Кирово-Чепецк пр. Россия, 18",
        "Longitude": "58.5509911",
        "Latitude": "50.0437789",
        "Index": "613050",
        "inCity": "в Кирово-Чепецке"
    },
]

const newJsonFile = {}
data.forEach(el => newJsonFile[el.Город.toLowerCase()] = {
    city: el.Город,
    inCity: el.inCity,
    address: el.Адреса
})

let result = JSON.stringify(newJsonFile)
// console.log(result)


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(`Server: requesting a list of users to DB`)
//         reject()
//     }, 1000)
// })
//
// promise.then(() => {
//     console.log('1 then is work')
// })
//     .catch(() => console.log('1 catch is work'))
//     .catch(() => console.log('2 catch is work'))
//     .then(() => console.log('3 then is work'))
//
//
//
//
// setTimeout(() => console.log(promise),1200)
//

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }
//
// let promise = job(true);
//
// promise
//     .catch(function(error) {
//         console.log('1')
//         console.log(error);
//     })
//     .then(function(data) {
//         console.log('2')
//         console.log(data);
//         return job(false);
//     })
//     .catch(function(error) {
//         console.log('3')
//         console.log(error);
//     })
//     .then(function(data) {
//         console.log('4')
//         console.log(data);
//         return job(false);
//     })
//     .catch(function(error) {
//         console.log('5')
//         console.log(error);
//     })
//     .then(function(data) {
//         console.log('6')
//         console.log(data);
//         return job(true);
//     })
// //2 3 4 5 6
// //success error undefined error undefined
//
//
// setTimeout(() => {
//     console.log(promise)
// },1000)


// 9
// {
//     function job(state) {
//         return new Promise(function(resolve, reject) {
//             if (state) {
//                 resolve('success');
//             } else {
//                 reject('error');
//             }
//         });
//     }
//
//     let promise = job(true);
//
//     promise
//
//         .then(function(data) {
//             console.log(1)
//             console.log(data);
//
//             return job(true);
//         })
//
//         .then(function(data) {
//             console.log(2)
//
//             if (data !== 'victory') {
//                 throw 'Defeat';
//             }
//
//             return job(true);
//         })
//
//         .then(function(data) {
//             console.log(3)
//
//             console.log(data);
//         })
// }

{
    function job(state) {
        return new Promise(function(resolve, reject) {
            if (state) {
                resolve('success');
            } else {
                reject('error');
            }
        });
    }

    let promise = job(true);

    promise
        .then(function(data) {
            console.log(1)
            console.log(data);
            return job(true);
        })
        .then(function(data) {
            console.log(2)

            if (data !== 'victory') {
                throw 'Defeat';
            }
            return job(true);
        })
        .then(function(data) {
            console.log(3)

            console.log(data);
        })
        .catch(function(error) {
            console.log(4)
            console.log(error);
            return job(false);
        })
        .then(function(data) {
            console.log(5)
            console.log(data);
            return job(true);
        })
        .catch(function(error) {
            console.log(6)
            console.log(error);
            return 'Error caught';
        })
        .then(function(data) {
            console.log(7)
            console.log(data);
            return new Error('test');
        })
        .then(function(data) {
            console.log(8)
            console.log('Success:', data.message);
        })
        .catch(function(data) {
            console.log(9)
            console.log('Error:', data.message);
        });
}

//success defeat error errorcaught sucesstest

{
    const waitAll = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Resolving ${delay}`)
                resolve(`done ${delay}`)
            }, delay)
        })
    }

    let result = Promise.all([waitAll(1200), waitAll(2200), waitAll(5200), waitAll(5000)])
        .then(data => console.log('All done'))
}
