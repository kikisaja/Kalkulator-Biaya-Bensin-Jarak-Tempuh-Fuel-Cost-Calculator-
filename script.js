// --- 1. AMBIL ELEMEN DOM ---
const fuelForm = document.getElementById("fuel-form");
const distanceInput = document.getElementById("distance");
const consumptionInput = document.getElementById("consumption");
const fuelPriceInput = document.getElementById("fuel-price");
const passengersInput = document.getElementById("passengers");
const presetBtns = document.querySelectorAll(".preset-btn");

const resultCard = document.getElementById("result-card");
const totalCostEl = document.getElementById("total-cost");
const totalLitersEl = document.getElementById("total-liters");
const costPerPersonEl = document.getElementById("cost-per-person");

// --- 2. LOGIKA PRESET BBM ---
presetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Hapus status active dari semua button
        presetBtns.forEach((b) => b.classList.remove("active"));
        // Tambahkan status active ke button terpilih
        btn.classList.add("active");

        // Set harga bensin ke input harga
        const price = btn.getAttribute("data-price");
        fuelPriceInput.value = price;
    });
});

// Reset highlight preset saat harga manual diubah
fuelPriceInput.addEventListener("input", () => {
    presetBtns.forEach((b) => b.classList.remove("active"));
});

// --- 3. FUNGSI FORMAT RUPIAH ---
function formatRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(amount);
}

// --- 4. FORM SUBMIT & KALKULASI ---
fuelForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Nilai Input
    const distance = parseFloat(distanceInput.value);
    const consumption = parseFloat(consumptionInput.value);
    const fuelPrice = parseFloat(fuelPriceInput.value);
    const passengers = parseInt(passengersInput.value) || 1;

    // Validasi Sederhana
    if (distance <= 0 || consumption <= 0 || fuelPrice <= 0 || passengers <= 0) {
        alert("Harap masukkan nilai angka yang valid!");
        return;
    }

    // Perhitungan
    const totalLiters = distance / consumption;
    const totalCost = totalLiters * fuelPrice;
    const costPerPerson = totalCost / passengers;

    // Render Hasil
    totalCostEl.textContent = formatRupiah(totalCost);
    totalLitersEl.textContent = `${totalLiters.toFixed(1)} Liter`;
    costPerPersonEl.textContent = formatRupiah(costPerPerson);

    // Tampilkan Card Hasil
    resultCard.classList.remove("hidden");
});
