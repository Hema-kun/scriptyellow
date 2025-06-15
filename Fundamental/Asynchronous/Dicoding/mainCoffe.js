import { makeCoffee, sendCoffee } from "./coffe.js";

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
  )
  .catch((error) => {
    console.log(error.message);
    throw error;
  });

// makeCoffee();

// console.log('Pramusaji memberikan kopi pesanan.');
// console.log('Saya mendapatkan kopi dan menghabiskannya.');