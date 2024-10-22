

export function sum (a, b) {
    return a + b;
}

export function subtract (c, d) {
    return c - d;
}

export function multiply (e, f) {
    return e * f;
}

export function divide (g, h){
    if (h==0)
        throw new Error("Division by zero is not allowed");
    return g / h;
}