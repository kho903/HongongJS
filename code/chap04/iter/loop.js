/*
const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업']
for (const i in todos) {
    console.log(`${i}번째 할 일 : ${todos[i]}`)
}

for (const todo of todos) {
    console.log(`오늘의 할 일 : ${todo}`)
}

for (let i = 0; i < 5; i++) {
    console.log(`${i}번째 반복입니다.`)
}

let output = 0;
for (let i = 1; i <= 100; i++) {
    output += i;
}
console.log(`1~100까지의 숫자를 모두 더하면 ${output}입니다.`)

for (let i = 0; i < todos.length; i++) {
    console.log(`${i}번째 할 일 : ${todos[i]}`)
}

for (let i = todos.length - 1; i >= 0; i--) {
    console.log(`${i}번째 할 일 : ${todos[i]}`)
}

*/

let i = 0
const array = [1, 2, 3, 4, 5];
while (i < array.length) {
    console.log(`${i} : ${array[i]}`)
    i++;
}