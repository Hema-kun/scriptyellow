const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const favorites2 = ["Bakso","Ramen"]

const doubleFavorite = [...favorites, ...favorites2];
console.log(doubleFavorite);
console.log(...favorites, ...favorites2);


let array = [];
for(let i=0;i<=100;i++){
    if(i%2 == 0 ){
        array.push(i);
    }
}
console.log(array);


const priceJpy = 1000;
const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
    ]);
console.log(currency);
const priceIdr = priceJpy * currency.get("JPY");
console.log(priceIdr);