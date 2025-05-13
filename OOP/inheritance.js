

class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Person extends People{
    constructor(name,age, job){
        super(name,age);
        this.job = job;
    }
}

const tanjiro = new Person("Tanjiro", 25, "SWE");
console.log(tanjiro.job);