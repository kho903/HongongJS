class Square {
    constructor(length) {
        this.length = length
    }

    getPerimeter() { return 4 * this.length }
    getArea() { return this.length * this.length }
}

// 클래스 사용하기
/*
const square = new Square(-10)
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)
*/

// 사용자의 잘못된 사용 예
const square = new Square(10)
square.length = -10
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)