class Person {

    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    print() {
        return this.name + ', ' + this.gender + ', ' + this.age;
    }
}

const testPerson = new Person('Jefke', 'M', 30);
console.log('testPerson ', testPerson.print());