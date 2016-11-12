//Default parameters
function defaultParamTest(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}
console.log(`Is it 13? ${defaultParamTest(1)}`);

//Rest parameters
function restParamTest(x, ...y) {
    // y is an Array
    return x * y.length;
}
console.log(`Is it 6? ${restParamTest(3, 'someString', 'anotherString')}`);

//Spread operator
function spreadOperatorTest(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
console.log(`Is it 3? ${spreadOperatorTest(...[1, 1, 1])}`);
