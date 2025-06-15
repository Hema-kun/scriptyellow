function Ongkir(berat){
    var pajak = berat;
    var biaya = function(){
        return berat * 1000;
    }

    this.totalBiaya = function(){
        return biaya() + pajak;
    }
}

const laptop = new Ongkir(4);
console.log(laptop.totalBiaya());