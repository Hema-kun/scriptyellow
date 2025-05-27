import promptSync from 'prompt-sync';
const prompt = promptSync();


function greetUser(name){
    if(name ==""){
        console.log("name is required");
    }else{
        console.log("hello " + name);
    }
}

const userName = prompt('input name : ');
greetUser(userName)

function calculateTotal(items){
    let total = 0;
    items.forEach((item)=>{
        total+=item.price;
    })
    return total;
}

const shoppingCart =[
    {"name" : "Book", "price" : 10},
    {"name" : "Pen", "price": 2}
];

console.log("Total : $" + calculateTotal(shoppingCart));

