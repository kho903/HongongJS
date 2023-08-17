class Square {
    #length
    constructor(length) {
        if (length <= 0) {
            throw '길이는 0보다 커야 합니다.'
        }
        this.#length = length;
    }

    setLength(value) {
        if (value <= 0) {
            throw '길이는 0보다 커야 합니다.'
        }
        this.#length = value
    }

    getLength() {
        return this.#length
    }

    getPerimeter() { return 4 * this.#length }
    getArea() { return this.#length * this.#length }
}

// 클래스 사용하기
const square = new Square(10)
console.log(`한 변의 길이는 ${square.getLength()}입니다.`)

// 예외 발생시키기
square.setLength(-10)