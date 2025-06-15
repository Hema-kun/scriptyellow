class Smartphone{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`charging ${this.model}`);
    }
}

class Android extends Smartphone {
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }
 
  charging() {
    // memanggil method charging dari SuperClass (SmartPhones)
    super.charging();
    console.log(`Charging ${this.model} with fast charger`);
  }
 
  splitScreen() {
    console.log('Android have a Split Screen');
  }
}

class Ios extends Smartphone{
    airPod(){
        console.log('IOS airpod')
    }
}

const android = new Android('white','Samsung','Galaxy S5')
const ios = new Ios('black', 'A', '12 Pro Max');

android.splitScreen();
android.charging();
ios.airPod();
ios.charging();