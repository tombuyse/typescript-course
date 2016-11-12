const numbers = [1, 2, 3, 4];

numbers.forEach(number => {
    console.log('number ', number);
});

//lexical this
var person = {
    name: "Bob",
    friends: ['Jefke'],
    printFriends() {
        this.friends.forEach(f =>
            console.log(this.name + " knows " + f));
    }
};

person.printFriends();