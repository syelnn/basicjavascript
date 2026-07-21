// Jalankan fungsi tampilkanBuku 
document.addEventListener("DOMContentLoaded", tampilkanBuku);

// Fungsi untuk mengambil data buku dari LocalStorage
function ambilDataDariStorage() {
    const daftar = localStorage.getItem("daftarBuku");
    return daftar ? JSON.parse(daftar) : [];
}

// Fungsi untuk menampilkan semua buku dari LocalStorage ke HTML
function tampilkanBuku() {
    const ul = document.getElementById("daftarBuku");
    ul.innerHTML = ""; // Bersihkan list sebelum render ulang

    const bukuList = ambilDataDariStorage();

    bukuList.forEach((teksBuku) => {
        const li = document.createElement("li");
        li.textContent = teksBuku;
        ul.appendChild(li);
    });
}

// Fungsi buat menambah buku
function tambahBuku() {
    const input = document.getElementById("inputBuku");
    const teksBuku = input.value.trim();

    // Cek jika input kosong
    if (teksBuku === "") {
        alert("Isi dulu ya nama bukunya");
        return;
    }

    // Ambil data lama, tambahkan buku baru, lalu simpan ke LocalStorage
    const bukuList = ambilDataDariStorage();
    bukuList.push(teksBuku);
    localStorage.setItem("daftarBuku", JSON.stringify(bukuList));

    // Render ulang daftar tampilan
    tampilkanBuku();

    // Bersihkan kolom input
    input.value = "";
}