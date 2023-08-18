export const parseInputToNumber = (num1,num2) => {
    return [parseInt(num1), parseInt(num2)];
}


export const suma = (a, b) =>  {
    [a,b] = parseInputToNumber(a,b);
    return a + b;
}

export const resta = (a, b) => {
    [a,b] = parseInputToNumber(a,b);
    return a - b;
}

export const multiplicacion = (a, b) => {
    [a,b] = parseInputToNumber(a,b);
    return a * b;
}

export const division = (a, b) => {
    [a,b] = parseInputToNumber(a,b);
    return a / b;
}

