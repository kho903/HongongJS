function sample(...items) {
    console.log(items);
}

const array = [1, 2, 3, 4];
console.log(sample.apply(null, array))
