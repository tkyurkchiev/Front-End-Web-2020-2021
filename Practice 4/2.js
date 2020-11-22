class Person {
    constructor(name) {
        this.name = name;
        this.planet = 'Земя';
    }
    print() {
        console.log(`Здравей ${this.name} от планетата ${this.planet}`);
    }
};

const chuck1 = new Person('Чък Норис');
const chuck2 = new Person('Нък Чорис');
const chuck3 = new Person('Сък Морис');
chuck1.print();
chuck2.print();
chuck3.print();