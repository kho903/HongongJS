class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    // 사각형의 둘레를 구하는 메소드
    getPerimeter() {
        return 2 * (this.width + this.height)
    }

    // 사각형의 넓이를 구하는 메소드
    getArea() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

const square = new Square(10)
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)