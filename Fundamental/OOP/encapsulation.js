function Ongkir(berat){
    var pajak = 500;
    var biaya = function(){
        return berat * 1000;
    }

    this.totalBiaya = function(){
        return biaya() + pajak;
    }
}

const laptop = new Ongkir(4);
laptop.pajak = 800;
console.log(laptop.totalBiaya());