// Jalankan tampilkanBuku saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", tampilkanBuku);

// Fungsi untuk mengambil data dari LocalStorage
function ambilDataDariStorage() {
    const daftar = localStorage.getItem("daftarBuku");
    return daftar ? JSON.parse(daftar) : [];
}

// Fungsi untuk menyimpan data ke LocalStorage
function simpanKeStorage(data) {
    localStorage.setItem("daftarBuku", JSON.stringify(data));
}

// Fungsi untuk menampilkan daftar buku ke layar
function tampilkanBuku() {
    const ul = document.getElementById("daftarBuku");
    ul.innerHTML = ""; // Kosongkan tampilan lama

    const bukuList = ambilDataDariStorage();

    // Perulangan biasa dari index 0 sampai selesai
    for (let i = 0; i < bukuList.length; i++) {
        const li = document.createElement("li");

        // Teks nama buku
        const teks = document.createElement("span");
        teks.textContent = bukuList[i];

        // Wadah buat tombol Edit dan Hapus
        const boxTombol = document.createElement("div");
        boxTombol.className = "tombol-box";

        // Tombol Edit
        const btnEdit = document.createElement("button"); btnEdit.textContent = "Edit"; btnEdit.className = "btn-edit";
        btnEdit.onclick = function () {
            editBuku(i);
        };

        // Tombol Hapus
        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.className = "btn-hapus";
        btnHapus.onclick = function () {
            hapusBuku(i);
        };

        // Masukkan tombol ke dalam box, lalu masukkan ke <li>
        boxTombol.appendChild(btnEdit);
        boxTombol.appendChild(btnHapus);

        li.appendChild(teks);
        li.appendChild(boxTombol);

        ul.appendChild(li);
    }
}

// Fungsi untuk menambah buku baru
function tambahBuku() {
    const input = document.getElementById("inputBuku");
    const teksBuku = input.value.trim();

    if (teksBuku === "") {
        alert("Isi dulu ya nama bukunya!");
        return;
    }

    const bukuList = ambilDataDariStorage();
    bukuList.push(teksBuku); // Tambah data baru ke urutan terakhir
    simpanKeStorage(bukuList);

    tampilkanBuku(); // Refresh tampilan
    input.value = ""; // Kosongkan input
}

// Fungsi untuk mengedit buku berdasarkan posisinya (index)
function editBuku(index) {
    const bukuList = ambilDataDariStorage();
    
    // Tampilkan popup input bawaan browser berisi teks buku yang mau diedit
    const namaBaru = prompt("Edit nama buku:", bukuList[index]);

    // Jika user menekan OK dan teksnya tidak kosong   //&&= dimana kondisi keduanya harus true
    if (namaBaru !== null && namaBaru.trim() !== "") {
        bukuList[index] = namaBaru.trim(); // Ganti data lama dengan yang baru
        simpanKeStorage(bukuList);
        tampilkanBuku(); // Refresh tampilan
    }
}

// Fungsi untuk menghapus buku berdasarkan posisinya (index)
function hapusBuku(index) {
    // Konfirmasi dulu ke user
    if (confirm("Yakin ingin menghapus buku ini?")) {
        const bukuList = ambilDataDariStorage();
        
        bukuList.splice(index, 1); // Hapus 1 data pada posisi index
        simpanKeStorage(bukuList);
        
        tampilkanBuku(); // Refresh tampilan
    }
}