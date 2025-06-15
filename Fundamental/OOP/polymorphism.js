

class People{
    constructor(name, age){
        this.name = name;
    }

    greet(){
        return `Hello, All`
    }
}

class Person extends People{
    constructor(name){
        super(name);
    }

    // greet(){
    //     return `Halo semua`
    // }
}

const seiya = new Person("seiya");
console.log(seiya.name)
console.log(seiya.greet())