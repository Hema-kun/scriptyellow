function myFun(...name) {
  console.log('name:', name);
}

myFun('Rafy', 'Fikri', 'Dimas');

function myFunc(number, ...name) {
  console.log('number', number);
  console.log('name', name);
}

myFunc('one', 'Arsy', 'Aras');

const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */