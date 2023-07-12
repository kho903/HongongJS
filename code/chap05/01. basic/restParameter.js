function sample(...items) {
    console.log(items);
}
sample(1, 2);
sample(1, 2, 3);
sample(1, 2, 3, 4);

function min(...items) {
    let output = items[0];
    for (const item of items) {
        output = output > item ? item : output
    }
    return output
}

console.log(`min in array : ${min(52, 273, 32, 103, 275, 24, 57)}`)