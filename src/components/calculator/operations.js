const parseInputToNumber = (num1,num2) => {
    return [parseInt(num1), parseInt(num2)];
}


const suma = (a, b) =>  {
    [a,b] = parseInputToNumber(a,b);
    return a + b;
}

const resta = (a, b) => {
    [a,b] = parseInputToNumber(a,b);
    return a - b;
}

const multiplicacion = (a, b) => {
    [a,b] = parseInputToNumber(a,b);
    return a * b;
}

const division = (a, b) => {
    [a,b] = parseInputToNumber(a,b);
    return a / b;
}

module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    parseInputToNumber
}