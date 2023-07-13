/**
 * filter 함수로
 * 1 : 홀수만 추출
 * 2 : 100 이하의 수만 추출
 * 3 : 5로 나눈 나머지가 0인 수만 추출
 */
let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]

numbers = numbers
    .filter((num) => num % 2 === 1)
    .filter((num) => num <= 100)
    .filter((num) => num % 5 === 0);
console.log(numbers)
