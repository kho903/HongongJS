let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers
    .filter((value) => value % 2 === 0)
    .map((value) => value * value)
    .forEach((value) => {
        console.log(value);
    })
