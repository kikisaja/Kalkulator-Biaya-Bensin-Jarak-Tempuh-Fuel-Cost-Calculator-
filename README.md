# ⛽ Fuel Cost Calculator

Aplikasi kalkulator biaya bahan bakar (*Fuel Cost Calculator*) interaktif untuk menghitung kebutuhan bensin, total pengeluaran perjalanan, serta estimasi pembagian biaya (patungan) per orang.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Matematika Dasar & Formula Logika:**
   Menghitung jumlah liter yang dibutuhkan dengan formula $\text{Liter} = \frac{\text{Jarak}}{\text{Konsumsi}}$, serta menghitung total biaya dan pembagian per penumpang.
2. **Form Event Handling & Prevent Default:**
   Mencegah *reload* halaman menggunakan `e.preventDefault()` saat form dikirimkan, lalu mengolah nilai input secara dinamis.
3. **Data Attributes & Custom Presets:**
   Memanfaatkan `data-price` pada tombol preset pilihan BBM untuk memperbarui nilai input secara otomatis.
4. **Formatting Angka (Intl.NumberFormat):**
   Menerapkan standar format mata uang Rupiah (`IDR`) agar tampilan angka mudah dibaca.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Form input jarak, konsumsi, preset bensin, dan kartu hasil
├── style.css        # Desain Neobrutalism, grid layout, dan animasi tampilan hasil
└── script.js        # Logika rumus matematika, preset harga, dan handler event
