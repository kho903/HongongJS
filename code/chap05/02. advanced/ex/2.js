const arr = ['사과', '배', '귤', '바나나']
console.log('# for in 반복문')
for (const i in arr) {
    console.log(i)
}

console.log('# for of 반복문')
for (const i of arr) {
    console.log(i)
}

console.log('# forIn to forEach')
arr.forEach((fruit, idx) => console.log(idx))

console.log('# forIn to forEach')
arr.forEach((fruit) => console.log(fruit))
