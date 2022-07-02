// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// alert( rabbit.jumps ); // ? (1)
//
// delete rabbit.jumps;
//
// alert( rabbit.jumps ); // ? (2)
//
// delete animal.jumps;
//
// alert( rabbit.jumps ); // ? (3)



// Объект rabbit наследует от объекта animal.
//
//     Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();



// -------------------------------------------------------------------------------------