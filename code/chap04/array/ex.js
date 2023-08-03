const myArray = ['A', 'B', 'C']
console.log(myArray)
console.log(myArray.push('D'))
console.log(myArray)
console.log(myArray[6] = 'E')
console.log(myArray)

const myArray2 = ['A', 'B', 'C', 'D']
console.log(myArray2)
console.log(myArray.splice(2, 1))
console.log(myArray2)
const index = myArray2.indexOf('A');
console.log(myArray2.splice(index, 1))
console.log(myArray2)
console.log(myArray2.indexOf('A'))
