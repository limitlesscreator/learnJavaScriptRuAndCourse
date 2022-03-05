// Prototype and Inheritance
{
    // let car = {}
    // console.log(Object.getPrototypeOf(car))
    let auto = {
        drive: true,
        wheels: 4,
        gears: 'automatic'
    }
    let car = Object.create(auto)
    console.log(Object.getPrototypeOf(car))

    let pizza = {
        base: 'wheat',
        sauce: 'tomato',
        cheese: 'parmesan'
    }

    const cheesePizza = Object.create(pizza)
    console.log(cheesePizza)
    console.log(Object.getPrototypeOf(cheesePizza))

    // Prototype chain
    let numArray = [1, 2, 3, 4];
    numArray.push(5);
    console.log(Array.prototype.isPrototypeOf(numArray)) //true

    // Prototype Inheritance
    let animal = {
        legs: 4,
        eat: true,
        nap: true
    }
    let dog = {
        tail: true
    }
    Object.setPrototypeOf(dog, animal)
    console.log(dog.nap)

    let boston_terrier = {
        breed: 'Boston Terrier'
    };
    Object.setPrototypeOf(dog, boston_terrier)
    console.log(dog.breed)

    const book = {
        educational: true,
        diagrams: true,
        author: 'J.K',
        discount: 0,
        sale: function () {
            if (this.educational) {
                this.discount = 0.5;
            }
        }
    }
    const scienceFictionBook = {
        educational: false
    }
    Object.setPrototypeOf(scienceFictionBook, book)
    console.log(scienceFictionBook.discount)

    // constructor functions and inheritance
    function SchoolFranchise(accredited, teachers, online) {
        this.accredited = true
        this.teachers = false
        this.online = true
    }

    function JuniorHigh(name, type) {
        this.type = 'Junior High'
        this.name = name
        SchoolFranchise.call(this)
    }

    let huronPublic = new JuniorHigh('Huron')
    console.log(huronPublic)

    // class declarations are not hoisted and executed in a strict mode
    // constructor method

    class Company {
        constructor(name, funding, employees) {
            this.name = name
            this.funding = funding
            this.employess = employees
        }

        equity() {
            return this.funding * 0.1
        }
    }

    let zimbaPay = new Company('Zimba Pay', 1000, 50)
    console.log(zimbaPay)
    console.log(Object.getPrototypeOf(zimbaPay))

    const purpleMoon = new Company('Purple Moon', 500000, 50)
    let equity = purpleMoon.equity()

    console.log(equity)
}
console.clear()
//check quality objects without JSON.stringify

let a = {
    randomData: 'test1'
}

let b = {
    randomData: 'test2'
}

let firstData = Object.entries(a)
let secondData = Object.entries(b)
console.log(Object.keys(a))
console.log(Object.keys(b))

let status
if (firstData.length === secondData.length) {
    for (let i = 0; i < firstData.length; i++) {
        if (firstData[i][0] === secondData[i][0] &&
            firstData[i][1] === secondData[i][1]) {
            status = true
        } else {
            status = false;
            console.log(status);
            break;
        }
        console.log(status)
    }
} else console.log('different')

// static method

class MusicLabel {
    constructor(name, genre, artist) {
        this.name = 'Avocado Label:D'
        this.genre = genre
        this.artist = artist
    }

    static labelMotto() {
        console.log(`Hello there`)
    }
}

const artist = new MusicLabel('Music Records', 'Jazz', 'RIchie Zonn')

MusicLabel.labelMotto()
console.log(artist)

//Public and primitive fields

class Player {
    name = ''
    punches = 10
    throw = 3
    score

    constructor(name) {
        this.name = name
        this.score = this.punches + this.throw
    }

    startMessage() {
        console.log(`Are you ready to kung-foo ${this.name}?`)
    }
}

let fooFighter = new Player('foo Fighter')
console.log(fooFighter)
fooFighter.startMessage()

// Private instance fields
{
    class Person {
        #name = ''
        #age = ''

        constructor(age, name) {
            this.#name = name
            this.#age = age
        }
    }

    const person1 = new Person('Zelda');
    // console.log(person1.age) // undefined
}

// Accessors: Getters and Setters
let donut = {
    units: 100,
    flavors: ['strawberry', 'oreo', 'java'],
    price: 5.99,
    get: function () {
        let flavorList = this.flavors
        flavorList.forEach(el => console.log(el))
    },
    set: function (str) {
        this.flavors.push(str)
    }
}
donut.set('chocolate')
console.log(donut.flavors)
