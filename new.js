class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }
}
const heroPerson = new Person('Hero', 'Balam', 20000)
console.log(heroPerson);

const friendlyPerson = new Person('Hero', 'Kalam', 25000)
console.log(friendlyPerson);

// This was used before ES6 as a class
function Person1(firstName, lastName, salary) {
    this.firstName = firstName
    this.lastName = lastName
    this.salary = salary
}
const oldPerson = new Person1('Grand', 'Papa', 2000)
console.log(oldPerson);