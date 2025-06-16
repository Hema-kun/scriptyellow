import PromptSync from "prompt-sync";
import { severanceCalculator, UPMKCalculator } from "./severanceCalculate.js";
const prompt = PromptSync();

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

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
      console.log("=== Pesangon ===");
      const name = prompt("Masukkan Nama : ");
      const salary = Number(prompt("Masukkan Penghasilan : "));
      const workingYears = Number(prompt("Masukkan masa kerja : "));
      if (
        isNaN(salary) ||
        isNaN(workingYears) ||
        salary <= 0 ||
        workingYears < 0
      ) {
        console.log("Input tidak valid. Harap masukkan angka yang benar.");
        break;
      }
      const total = severanceCalculator(salary, workingYears);
      console.log(
        `Nama: ${name}\nMendapatkan pesangon senilai: ${formatCurrency(
          total
        )}\nMasa kerja: ${workingYears} tahun`
      );
      break;
    }
    case 2: {
      console.log("=== UPMK ===");
      const name = prompt("Masukkan Nama : ");
      const salary = Number(prompt("Masukkan Penghasilan : "));
      const workingYears = Number(prompt("Masukkan masa kerja : "));
      if (
        isNaN(salary) ||
        isNaN(workingYears) ||
        salary <= 0 ||
        workingYears < 0
      ) {
        console.log("Input tidak valid. Harap masukkan angka yang benar.");
        break;
      }
      const total = UPMKCalculator(salary, workingYears);
      console.log(
        `Nama: ${name}\nMendapatkan UPMK senilai: ${formatCurrency(
          total
        )}\nMasa kerja: ${workingYears} tahun`
      );
      break;
    }
    case 3: {
      console.log("Terima kasih telah menggunakan program.");
      running = false;
      break;
    }
    default:
      console.log("Tidak ada pilihan seperti itu. Coba lagi.");
  }
}
