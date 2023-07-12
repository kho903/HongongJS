let output = ''
const size = 5

for (let i = 1; i < size; i++) {

    for (let k = 0; k < size - i; k++) {
        output += ' '
    }
    for (let j = i * 2 - 1; j > 0; j--) {
        output += '*'
    }

    output += '\n'
}

for (let i = size - 1; i > 0; i--) {

    for (let k = size; k > i; k--) {
        output += ' '
    }
    for (let j = 0; j < 2 * i - 1; j++) {
        output += '*'
    }
    output += '\n'
}

console.log(output)