import PromptSync from "prompt-sync";
import { severanceCalculator, UPMKCalculator } from "./severanceCalculate.js";
const prompt = PromptSync();

let running = true;

while (running) {
  console.log("==========================");
  console.log("Program Pesangon dan UPMK");
  console.log("==========================");
  console.log("Pilih salah satu");
  console.log("1. Pesangon");
  console.log("2. UPMK");
   console.log("3. quit");
  const Pilih = Number(prompt("Masukkan angka yang dipilih : "));

  switch (Pilih) {
    case 1: {
      console.log("Pesangon");
      const name = String(prompt("Masukkan Nama : "));
      const salary = Number(prompt("Masukkan Penghasilan : "));
      const workingYears = Number(prompt("Masukkan masa kerja : "));
      const total = severanceCalculator(salary, workingYears);
      console.log(
        "Nama : ",
        name,
        "Mendapatkan pesangon senilai : ",
        `Rp: ${total}`,
        "dengan masa kerja : ",
        workingYears, "th"
      );
      break;
    }
    case 2: {
      console.log("UPMK");
      const name = String(prompt("Masukkan Nama : "));
      const salary = Number(prompt("Masukkan Penghasilan : "));
      const workingYears = Number(prompt("Masukkan masa kerja : "));
      const total = UPMKCalculator(salary, workingYears);
      console.log(
        "Nama : ",
        name,
        "Mendapatkan UPMK senilai : ",
        `Rp: ${total}`,
        "dengan masa kerja : ",
        workingYears, "th"
      );
      break;
    }
    case 3: {
      console.log("terima kasih");
      running = false;
      break;
    }
    default:
      console.log("Tidak ada pilihan seperti itu");
  }
}
