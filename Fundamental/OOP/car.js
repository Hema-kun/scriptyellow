//Function constructor

function Car(brand, color, maxSpeed, chassisNumnber){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumnber = chassisNumnber;
}

Car.prototype.drive = function(){
    console.log(`${this.brand} ${this.color} is driving`)
}

//membuat objek dari constructorFunction Car
const car1 = new Car('Toyota','Silver', 200, 'To-1');

console.log(car1);

car1.drive();