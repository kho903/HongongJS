const num = 52000
num.원 = function () {
    return this.valueOf() + '원'
}

console.log(num.원()) // TypeError: num.원 is not a function
// num 은 기본자료형이기 때문에 객체가 아니므로 속성, 메소드를 가질 수 없습니다.
