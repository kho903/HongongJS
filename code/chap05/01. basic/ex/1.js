function multiplyAll(a, b) {
    let output = 1;
    for (let i = a; i <= b; i++) {
        output *= i;
    }
    return output;
}

console.log(multiplyAll(1, 2));
console.log(multiplyAll(1, 3));