function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount < 10) {
        reject(new Error("Not enough money to withdraw"));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money <= 10) {
        reject(new Error("not enough money to buy ticket"));
      }

      resolve("ticket-1");
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error("no ticket"));
      }

      resolve("enjoy the movie");
    }, 1000);
  });
}

//cara 1
// async function watchMovie() {
//   try {
//     const money = await withDrawMoney(10);
//     const ticket = await buyCinemaTicket(money);
//     const result = await goInsideCinema(ticket);
 
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
 
// watchMovie();

//cara 2
async function watchMovie(amount) {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    return result;
  } catch (error) {
    throw error;
  }
}

watchMovie(10)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

watchMovie(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));