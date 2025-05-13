// Objek Job (Pekerjaan)
const Job = {
    title: "Software Engineer",
    salary: 80000
};

// Objek Person (Orang)
const Person = {
    name: "John Doe",
    address: "123 Main St",
    job: Job // Komposisi
};

// Menggunakan objek Person yang terbentuk
console.log(Person.name); // Output: John Doe
console.log(Person.address); // Output: 123 Main St
console.log(Person.job.title); // Output: Software Engineer
console.log(Person.job.salary); 

//class
class Jobs {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}

// Definisikan kelas Person (Orang)
class Persons {
    constructor(name, address, job) {
        this.name = name;
        this.address = address;
        this.job = job; // Komposisi objek Job
    }
}

// Membuat objek Job
const softwareEngineerJob = new Jobs("Software Engineer", 50000);

// Membuat objek Person dengan komposisi Job
const person = new Persons("John Doe", "123 Main St", softwareEngineerJob);

// Menggunakan objek Person yang terbentuk
console.log(person.name); // Output: John Doe
console.log(person.address); // Output: 123 Main St
console.log(person.job.title); // Output: Software Engineer
console.log(person.job.salary); // Output: 80000