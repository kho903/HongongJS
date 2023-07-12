const max = function(first, ...rests) {
    let output;
    let items;

    if (typeof first === 'number') {
        output = first;
        items = rests;
    } else if (Array.isArray(first)) {
        output = first[0];
        items = first;
    }
    for (const item of items) {
        output = item > output ? item : output;
    }

    return output;
}

console.log(max([1, 2, 3, 4]))
console.log(max(1, 2, 3, 4))

