const mySet = new Set([1, 2, 3]);

console.log(mySet);

const set = new Set();
set.add(1);
set.add('Apple');
set.add(1);
set.add('Apple');
set.add(2);
set.delete(1);

console.log(set); // Output: Set { 1, 'Apple' }
for (const number of set) {
  console.log(number); // Output: 1, 2
}

set.forEach((value)=> console.log(value));