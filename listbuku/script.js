// 1. DATA AWAL BUKU (Array of Objects)
let daftarBuku = [
  { judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', tahun: 2005 },
  { judul: 'Bumi', penulis: 'Tere Liye', tahun: 2014 }
];

// 2. MENGAMBIL ELEMEN DARI HTML (DOM)
const formBuku = document.getElementById('form-buku');
const inputIndex = document.getElementById('index-buku');
const inputJudul = document.getElementById('judul');
const inputPenulis = document.getElementById('penulis');
const inputTahun = document.getElementById('tahun');

const tabelBuku = document.getElementById('tabel-buku');
const totalBuku = document.getElementById('total-buku');
const judulForm = document.getElementById('judul-form');
const btnSimpan = document.getElementById('btn-simpan');
const btnBatal = document.getElementById('btn-batal');

// 3. FUNGSI UNTUK MENAMPILKAN DATA KE TABEL HTML
function tampilkanBuku() {
  // Kosongkan tabel dulu biar gak numpuk
  tabelBuku.innerHTML = '';

  // Update jumlah total buku di atas tabel
  totalBuku.textContent = daftarBuku.length;

  // Jika data kosong
  if (daftarBuku.length === 0) {
    tabelBuku.innerHTML = `
      <tr>
        <td colspan="5" class="text-center">Belum ada buku. Silakan tambah buku baru!</td>
      </tr>
    `;
    return;
  }

  // Ulangi/looping setiap data buku di dalam Array
  daftarBuku.forEach(function(buku, index) {
    const baris = document.createElement('tr');

    baris.innerHTML = `
      <td>${index + 1}</td>
      <td><strong>${buku.judul}</strong></td>
      <td>${buku.penulis}</td>
      <td>${buku.tahun}</td>
      <td>
        <button class="btn btn-hijau" onclick="editBuku(${index})">Edit</button>
        <button class="btn btn-merah" onclick="hapusBuku(${index})">Hapus</button>
      </td>
    `;

    tabelBuku.appendChild(baris);
  });
}

// 4. FUNGSI SIMPAN BUKU (TAMBAH DAN EDIT)
formBuku.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah halaman reload/refresh

  // Ambil teks yang diketik di form
  const judul = inputJudul.value;
  const penulis = inputPenulis.value;
  const tahun = inputTahun.value;
  const index = parseInt(inputIndex.value);

  if (index === -1) {
    // --- MODE TAMBAH BUKU BARU ---
    const bukuBaru = {
      judul: judul,
      penulis: penulis,
      tahun: tahun
    };

    // PUSH: Masukkan buku baru ke dalam array
    daftarBuku.push(bukuBaru);

  } else {
    // --- MODE EDIT BUKU ---
    daftarBuku[index].judul = judul;
    daftarBuku[index].penulis = penulis;
    daftarBuku[index].tahun = tahun;
  }

  // Bersihkan form & kembalikan tombol seperti semula
  resetForm();

  // Render ulang tabel biar langsung berubah tanpa refresh!
  tampilkanBuku();
});

// 5. FUNGSI UNTUK MENYIAPKAN EDIT
function editBuku(index) {
  const buku = daftarBuku[index];

  // Isi kolom input dengan data buku yang mau diedit
  inputIndex.value = index;
  inputJudul.value = buku.judul;
  inputPenulis.value = buku.penulis;
  inputTahun.value = buku.tahun;

  // Ubah tampilan form jadi Mode Edit
  judulForm.textContent = 'Edit Data Buku';
  btnSimpan.textContent = 'Update Buku';
  btnBatal.style.display = 'inline-block';
}

// 6. FUNGSI UNTUK MENGHAPUS BUKU
function hapusBuku(index) {
  const yakin = confirm('Yakin mau hapus buku ini?');
  
  if (yakin) {
    // SPLICE: Menghapus 1 data dari array berdasarkan index-nya
    daftarBuku.splice(index, 1);

    // Update tampilan tabel
    tampilkanBuku();
  }
}

// 7. FUNGSI RESET FORM
function resetForm() {
  formBuku.reset();
  inputIndex.value = '-1';

  judulForm.textContent = 'Tambah Buku Baru';
  btnSimpan.textContent = 'Tambah Buku';
  btnBatal.style.display = 'none';
}

// Pasang event klik pada tombol Batal Edit
btnBatal.addEventListener('click', resetForm);

// Panggil fungsi ini pertama kali saat halaman dibuka
tampilkanBuku();