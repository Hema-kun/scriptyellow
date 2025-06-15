function getUsers(callback) {
  //simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    callback(users);
  }, 3000);
}

function usersCallback(users) {
  console.log(users);
  console.log("Selesai");
}

getUsers(usersCallback);

function halo(callback) {
  console.log("Hai!");
  callback(); // memanggil fungsi callback
}

function selamatDatang() {
  console.log("Selamat datang!");
}

halo(selamatDatang);

function prosesData(data, callback) {
  // Ini HOF
  console.log("Memproses:", data);
  callback(data); // Ini menjalankan callback
}

function tampilkan(data) {
  console.log("Hasil:", data);
}

prosesData("Belajar JavaScript", tampilkan);

function jalankan(callback) {
  console.log("Siap");

  callback(); // memanggil callback
}

// Ini callback
function halo1() {
  console.log("Halo dunia!");
}

// Kirim callback ke HOF
jalankan(halo1);

function kirim(callback) {
  console.log("1");
  callback();
  console.log("2");
}

kirim(() => console.log("ini callback"));

let warna = ["merah", "kuning", "hijau"];
let hasil = warna.forEach((warna) => {
  return "warna " + warna;
});
console.log(hasil);
