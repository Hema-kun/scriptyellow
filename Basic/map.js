const map = new Map();
map.set('name', 'aras');
map.set('last name', 'opraza');
map.delete('last name');
console.log(map); // Map(1) { 'name' => 'aras' }

const productMap = new Map([
  ['shoes', 500],
  ['cap', 350],
  ['jeans', 250]
]);

console.log(productMap);
console.log(productMap.get('cap'));
