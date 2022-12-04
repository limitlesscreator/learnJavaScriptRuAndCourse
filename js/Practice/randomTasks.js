// function logger (x,x,b) {
//     console.log(x,b,x,)
// }
//
// logger(1,2,3)
////////////////////////////////////////////

// const logger = (x,x,b) => {
//     console.log(x,b,x,)
// }

// logger(1,2,3)

////////////////////////////////////////////

// let flag1 = new Boolean(true)
// if(flag1) {
//     console.log("inside flag1")
// }
// let flag2 = new Boolean(false)
// if(!flag2) {
//     console.log("inside flag2");
// }
// let flag3 = Object(false)
// if(!flag3) {
//     console.log("inside flag3");
// }

////////////////////////////////////////////

// let flag1 = Object(false);
// console.log(flag1 == false)
// console.log(flag1 === false)
// console.log(flag1.valueOf() == false)
// console.log(flag1.valueOf() === false)

////////////////////////////////////////////

function createIncrement(incBy){
    let value = 0

    function increment(){
        value += incBy
        console.log(value)
    }

    const message = `Current value is ${value}`

    function log(){
        console.log(message)
    }
    return [increment, log];
}


const [increment, log] = createIncrement(1)

increment() // 1
increment() // 2
increment() // 3
log() //
// why "Current value is 0" and how to fix it

////////////////////////////////////////////
