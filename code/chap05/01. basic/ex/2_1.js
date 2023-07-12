const max = function(array) {
    let output = array[0];
    for (const element of array) {
        output = element > output ? element : output;
    }

    return output;
}

console.log(max([1, 2, 3, 4]))
