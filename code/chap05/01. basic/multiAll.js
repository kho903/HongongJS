function multiAll(a, b) {
    let output = 1;
    for (let i = a; i <= b; i++) {
        output *= i;
    }
    return output;
}

console.log(multiAll(3, 5));
console.log(multiAll(1, 10));
console.log(multiAll(4, 5));