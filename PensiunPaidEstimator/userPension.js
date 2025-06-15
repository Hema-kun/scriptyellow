import estimator from "./calculatePayment.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Program Hitung Pensiun PNS");
console.log("=============================");

let process = true;
while (process) {
  console.log("=============================");
  console.log(" Daftar List");
  console.log(" 1. Start");
  console.log(" 2. End");
  const pilihan = Number(prompt("Silahkan pilih salah satu : "));

  switch (pilihan) {
    case 1:
      const name = String(prompt("Masukkan Nama : "));
      const gaji = Number(prompt("Masukkan gaji pokok : "));
      const masaKerja = Number(prompt("Masukkan masa kerja :"));

      const hasil = estimator(gaji, masaKerja);
      console.log("Nama : ", name);
      console.log("Gaji pensiun ", hasil);
      break;
    case 2:
      console.log("Sampai Jumpa");
      process = false;
      break;

    default:
      console.log("Salah input");
  }
}
