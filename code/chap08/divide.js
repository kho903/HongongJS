
function divide(a, b) {
    if (b === 0) {
        throw '0으로 나눌 수 없습니다.'
    }
    return a / b
}

console.log(divide(10, 2))
console.log(divide(10, 0))