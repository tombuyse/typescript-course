/**
 * compile to javascript with 'tsc person.ts'
 */

enum Gender {
    M,
    F
}

interface Person {
    name: string;
    age: number;
    gender: Gender
}

function printPerson(person: Person) {
    console.log(`Hello ${person.name}`);
}

//if we remove or change a type, the editor should complain about this and compiling will not work
const person = {name: 'Jefke', age: 30, gender: Gender.M};
printPerson(person);