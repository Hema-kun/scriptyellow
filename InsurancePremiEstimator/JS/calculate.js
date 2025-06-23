export function hitungPremi(data) {
  let premi = 500_000; // Base premi

  // Usia < 25 → +100.000
  if (data.usia < 25) {
    premi += 100_000;
  }

  // Gender: pria → +50.000
  if (data.gender === 'pria') {
    premi += 50_000;
  }

  // Jenis kendaraan: mobil → +200.000
  if (data.jenisKendaraan === 'mobil') {
    premi += 200_000;
  }

  // Kendaraan lebih tua dari 5 tahun → +75.000
  const tahunSekarang = new Date().getFullYear();
  const umurKendaraan = tahunSekarang - data.tahunKendaraan;

  if (umurKendaraan > 5) {
    premi += 75_000;
  }

  return premi;
}
