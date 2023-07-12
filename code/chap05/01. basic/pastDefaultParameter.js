function earnings(wage, hours) {
    wage = typeof(wage) !== "undefined" ? wage : 8590;
    hours = typeof(hours) !== "undefined" ? hours : 52;
    return wage * hours;
}

console.log(earnings());

function earnings2(wage, hours) {
    wage = wage || 8590;
    hours = hours || 52;
    return wage * hours;
}

console.log(earnings2())