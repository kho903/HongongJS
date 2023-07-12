function sample(...items) {
    console.log(items)
}

const arr = [1, 2, 3, 4]
console.log('# 전개 연산자를 사용하지 않은 경우')
sample(arr)
console.log('# 전개 연산자를 사용한 경우')
sample(...arr)

