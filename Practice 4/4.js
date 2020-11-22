class Person {
    getSecretSalary() {
        return getSalary();
    }
}

function getSalary() {
    let salary = 1000;
    return salary;
}

let person = new Person();
console.log(person.getSecretSalary());