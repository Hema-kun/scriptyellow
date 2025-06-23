export function validasiFormulir(data) {
  const tahunSekarang = new Date().getFullYear();

  if (!data.nama) return "Nama tidak boleh kosong.";
  if (isNaN(data.usia) || data.usia < 17)
    return "Usia harus minimal 17 tahun.";
  if (!data.gender) return "Jenis kelamin harus dipilih.";
  if (!data.jenisKendaraan) return "Jenis kendaraan harus dipilih.";
  if (
    isNaN(data.tahunKendaraan) ||
    data.tahunKendaraan > tahunSekarang ||
    data.tahunKendaraan < 1980
  )
    return `Tahun kendaraan harus antara 1980 - ${tahunSekarang}.`;

  return null; // Tidak ada error
}
