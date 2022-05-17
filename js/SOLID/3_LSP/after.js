// Listov Barbara substitution principle

class Animal {
    constructor(attrs){
        const {name, age} = attrs
        this.name = name
        this.age = age
    }

    eat(_amount = 0){
        console.log('Ate food!')
    }
}

class Cat extends Animal{
    constructor(attrs) {
        super(attrs);
    }
    eat(amount){
        if (amount >= 0.3){
            console.log("Can't eat that much!")
        } else {
            console.log("Ate some cat food!")
        }
    }
}

class Dog extends Animal{
    constructor(attrs) {
        super(attrs);
    }

    eat(_amount = 0){
        console.log('Ate some dog food!')
    }
}

const pluto = new Dog({name: 'Pluto', age: 3})
const goofy = new Dog({name: 'Goofy', age: 2})
const buttons = new Cat({name: 'Mr. Buttons', age: 4})

const animals = [pluto, goofy, buttons]

animals.forEach(animal => {
    if (animal.age > 2) console.dir(animal)
})
