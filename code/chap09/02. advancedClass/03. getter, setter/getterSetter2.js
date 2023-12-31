class Square {
    #length

    constructor(length) {
        // this.length 에 값을 지정하면, set length(length) 메소드 부분이 호출됨.
        this.length = length;
    }

    get length() {
        return this.#length
    }

    get perimeter() {
        return 4 * this.#length
    }

    get area() {
        return this.#length * this.#length
    }

    set length(length) {
        if (length <= 0) {
            throw '길이는 0보다 커야 합니다.'
        }
        this.#length = length
    }

}

// 클래스 사용하기
const squareA = new Square(10)
console.log(`한 변의 길이: ${squareA.length}`)
console.log(`둘레: ${squareA.perimeter}`)
console.log(`넓이: ${squareA.area}`)

// 예외 발생시키기
const squareB = new Square(-10)
