// Impor fungsi dari file lain
import { validasiFormulir } from './validation.js';
import { hitungPremi } from './calculate.js';

// Ambil elemen form dan hasil
const form = document.getElementById('insurance-form');
const hasilDiv = document.getElementById('hasil');

// Event listener untuk submit form
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil nilai dari input
  const data = {
    nama: form.nama.value.trim(),
    usia: parseInt(form.usia.value),
    gender: form.gender.value,
    jenisKendaraan: form.jenisKendaraan.value,
    tahunKendaraan: parseInt(form.tahunKendaraan.value),
  };

  // Validasi input
  const error = validasiFormulir(data);
  if (error) {
    hasilDiv.innerHTML = `<p style="color:red;">${error}</p>`;
    return;
  }

  // Hitung premi
  const premi = hitungPremi(data);

  // Tampilkan hasil
  hasilDiv.innerHTML = `
    <h2>Hasil Kalkulasi</h2>
    <p>Halo <strong>${data.nama}</strong>, premi asuransi kamu adalah:</p>
    <p style="font-size: 24px; color: green;"><strong>Rp${premi.toLocaleString()}</strong></p>
  `;
});
