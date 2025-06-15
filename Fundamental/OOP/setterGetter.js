
class Product{
    constructor(){
        this.name = null;
    }


    set setName(value){
        if(typeof (value) === "string"){

            this.name = value;
        }else{
            this.name = null;
        }
    }

    get getName(){
        if(this.name == null){
            return `value belum diset`
        }else{
            return this.name;
        }
    }
}

const thinkpad = new Product()
console.log(thinkpad.getName)
thinkpad.setName ="thinkpad";
console.log(thinkpad.getName)
