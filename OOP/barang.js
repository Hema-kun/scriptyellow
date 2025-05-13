//ES6

class Barang{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    detail(){
        return this.name + " " + this.price;
    }
}

const barang1 = new Barang("Lenovo thinkpad", 100);

const barang2 = new Barang("Lenovo X13", 200);

const barang3 = new Barang("Lenovo Carbon", 300);

console.log(barang1.name, barang1.price);
console.log(barang2.price)
console.log(barang1)

console.log(barang1.detail());