function min(array) {
    let output = array[0];
    for (const item of array) {
        output = output > item ? item : output;
    }
    return output;
}

function max(array) {
    let output = array[0];
    for (const item of array) {
        output = output < item ? item : output;
    }
    return output;
}

const testArray = [52, 273, 32, 103, 275, 24, 57]
console.log(`min : ${min(testArray)}`);
console.log(`max : ${max(testArray)}`);
