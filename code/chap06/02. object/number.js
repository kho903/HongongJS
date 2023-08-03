const l = 123.456789
console.log(l.toFixed(2))
console.log(l.toFixed(3))
console.log(l.toFixed(4))

// NaN
const m = Number('숫자로 변환할 수 없는 경우')
console.log(m)
console.log(m === NaN)
console.log(Number.isNaN(m))

const n = 10 / 0
console.log(n)
const o = -10 / 0
console.log(o)
console.log(Number.isFinite(n))
console.log(Number.isFinite(o))
console.log(Number.isFinite(1))
console.log(Number.isFinite(10))

console.log(n === Infinity || n === -Infinity)