//The old way...
const someVariable = 'Jefke';
const oldWay = 'hello ' + someVariable;
console.log('oldWay ', oldWay);

//The Template strings way!
const description = `
    Hello, 
    how are you ${someVariable}?
`;
console.log('newWay ', description);