// Harga dasar tiket
let hargaDasar = 50000;

// Meminta input dari pengguna
let usia = parseInt(prompt("Masukkan usia:"));
let hari = prompt("Masukkan hari (Senin-Minggu):");
let isMember = prompt("Apakah memiliki Kartu Member? (ya/tidak):").toLowerCase();

let hargaAkhir = hargaDasar;

// 1. Diskon berdasarkan usia
if (usia < 5) {
    hargaAkhir = 0; // Gratis
} else if (usia >= 5 && usia <= 12) {
    hargaAkhir -= hargaDasar * 0.50; // Diskon 50%
} else if (usia >= 60) {
    hargaAkhir -= hargaDasar * 0.30; // Diskon 30%
}

// 2. Diskon / Kenaikan berdasarkan hari (hanya berlaku jika tiket tidak gratis)
if (hargaAkhir > 0) {
    let hariLower = hari.toLowerCase();
    
    if (["senin", "selasa", "rabu", "kamis"].includes(hariLower)) {
        hargaAkhir -= hargaDasar * 0.10; // Diskon tambahan 10% dari harga dasar
    } else if (hariLower === "jumat") {
        // Tidak ada diskon/tambahan
    } else if (["sabtu", "minggu"].includes(hariLower)) {
        hargaAkhir += hargaDasar * 0.20; // Harga naik 20% dari harga dasar
    }
}

// 3. Promo khusus Kartu Member (potongan 15% dari harga akhir sejauh ini)
if (isMember === "ya" && hargaAkhir > 0) {
    hargaAkhir -= hargaAkhir * 0.15;
}

// Menampilkan hasil
alert("Harga tiket yang harus dibayar: Rp" + hargaAkhir.toLocaleString('id-ID'));
console.log("Detail Pemesanan:");
console.log("Usia:", usia, "tahun");
console.log("Hari:", hari);
console.log("Member:", isMember);
console.log("Total Harga Tiket: Rp" + hargaAkhir);