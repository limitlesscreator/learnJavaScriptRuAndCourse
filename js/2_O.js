// ---------------------------------------------------------------------------------------------
// bellow without sOlid


class Square {
    constructor(size) {
        this.type = 'square'
        this.size = size
    }
}

class Circle {
    constructor(radius) {
        this.type = 'circle'
        this.radius = radius
    }
}

// class Rect{
//     constructor(width,height){
//         this.type = 'rect'
//         this.width = width
//         this.height = height
//     }
// }

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            if (shape.type === 'circle') {
                acc += (shape.radius ** 2) * Math.PI
            } else if (shape.type === 'square') {
                acc += shape.size ** 2
            }
            // если спустя время приходит заказчик и просит имлиментировать новую фигуру (прямоугольник),
            // то мы тем самым расширяем класс AreaCalculator  нарушем принцип open/close principle
            //
            // else if(shape.type === 'rect'){
            //     acc += shape.width * shape.height
            // }
            return acc
        }, 0)
    }
}

// above without sOlid
// ---------------------------------------------------------------------------------------------


// bellow with sOlid

{
    class Shape {
        area() {
            throw new Error('Area method should be implemented')
        }
    }

    class GoodSquare extends Shape {
        constructor(size) {
            super()
            this.type = 'square'
            this.size = size
        }

        area() {
            return this.size ** 2
        }
    }

    class GoodCircle extends Shape {
        constructor(radius) {
            super()
            this.type = 'circle'
            this.radius = radius
        }

        area() {
            return (this.radius ** 2) * Math.PI
        }
    }

    class GoodRect extends Shape {
        constructor(width, height) {
            super()
            this.type = 'rect'
            this.width = width
            this.height = height
        }

        area() {
            return this.width * this.height
        }
    }

    class GoodTriangle extends Shape {
        constructor(a, b) {
            super()
            this.a = a
            this.b = b
        }
        area(){
            return (this.a * this.b) / 2
        }
    }

    class GoodAreaCalculator {
        constructor(shapes = []) {
            this.shapes = shapes
        }

        goodSum() {
            return this.shapes.reduce((acc, shape) => {
                acc += shape.area()
                return acc
            }, 0)
        }
    }

    const calculatorArea = new GoodAreaCalculator(
        [
            new GoodSquare(2),
            new GoodCircle(5),
            new GoodTriangle(3,20)
        ]
    )
    console.log(calculatorArea.goodSum())
}

