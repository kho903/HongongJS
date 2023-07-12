const str = '안녕하세요'
console.log(str[2])
console.log(str[str.length - 1])

const array = [273, 'String', true, function () {
}, {}, [273, 103]]
console.log(array)

const numbers = [273, 52, 103, 32]
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[1 + 1])
console.log(numbers[1 * 3])

const fruits = ['배', '사과', '키위', '바나나']
console.log(fruits.length)
console.log(fruits[fruits.length - 1])

const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업']
console.log(todos)
console.log(todos.push('저녁 식사 준비하기'))
console.log(todos.push('피아노 연습하기'))
console.log(todos)

const fruitsA = ['사과', '배', '바나나']
console.log(fruitsA[10] = '귤')
console.log(fruitsA)

const fruitsB = ['사과', '배', '바나나']
console.log(fruitsB[fruitsB.length] = '귤')
console.log(fruitsB)

const itemsA = ['사과', '배', '바나나']
console.log(itemsA.splice(2, 1))
console.log(itemsA)

const itemsB = ['사과', '배', '바나나']
const index = itemsB.indexOf('바나나')
console.log(index)
console.log(itemsB.splice(index, 1))
console.log(itemsB)
console.log(itemsB.indexOf('바나나'))

const stringA = '동해물과 백두산이 마르고 닳도록'
console.log(stringA.indexOf('백두산'))

const itemsE = ['사과', '배', '바나나', '귤', '귤']
console.log(itemsE.filter((item) => item !== '귤'))

const itemsD = ['사과', '귤', '바나나', '오렌지']
console.log(itemsD.splice(1, 0, '양파'))
console.log(itemsD)

const a = '안녕'
const b = '하세요'
const c = a + b
console.log(c)
console.log(a)
console.log(b)

const arr = ['사과', '배', '바나나']
console.log(arr)
console.log(arr.push('귤'))
console.log(arr)