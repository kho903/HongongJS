const a = []
a.sample = 10
console.log(a.sample)

function b() {}
b.sample = 10
console.log(b.sample)

console.log(typeof a)
console.log(Array.isArray(a))