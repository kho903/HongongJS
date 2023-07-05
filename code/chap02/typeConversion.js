// Number()
console.log(Number("273"))
console.log(typeof Number("273"))

// NaN
console.log(Number("$273"))
console.log(typeof Number("$273"))

// bool
console.log(Number(true))
console.log(Number(false))

// 숫자 연산자로 변환
console.log("52" - 0)
console.log(typeof("52" - 0))
console.log(true - 0)
console.log(typeof(true - 0))

console.log(1 + true)
console.log(1 + false)

// 문자열 자료형으로 변환하기
console.log(String(52.273))
console.log(typeof(String(52.273)))
console.log(String(true))
console.log(typeof(String(true)))
console.log(String(false))
console.log(typeof(String(false)))

// + 연산자
console.log(273 + "")
console.log(typeof(273 + ""))
console.log(true + "")
console.log(typeof(true + ""))

// 불 자료형
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(""))
console.log(Boolean(null))
let 변수;
console.log(Boolean(변수))

console.log(!!273)
console.log(!!0)
console.log(!!'안녕하세요')
console.log(!!'')
