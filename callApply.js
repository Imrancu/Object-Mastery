// uses of bind, call, and apply

const normalPerson = {
        firstName: "Raihan",
        lastName: "Mahmud",
        salary: 15000,
        getFullName: function() {
            console.log(this.firstName, this.lastName);
        },
        chargeBill: function(amount, tips, tax) {
            console.log(this);
            this.salary = this.salary - amount - tips - tax
            return this.salary
        }
    }
    // console.log(normalPerson.firstName, normalPerson.lastName);

// normalPerson.chargeBill(200)
// normalPerson.chargeBill(2000)
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: "Hero",
    lastName: "Salam",
    salary: 30000,
}
const friendlyPerson = {
    firstName: "Hero",
    lastName: "Alam",
    salary: 50000,
}

// normalPerson.chargeBill()

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)
// heroChargeBill(2000)
// heroChargeBill(3000)
// heroChargeBill(5000)
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson)
// friendlyChargeBill(10000)
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 200)
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [100, 200, 50])
console.log(heroPerson.salary);