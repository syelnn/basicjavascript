const authors = [
  {
    id: 1,
    name: "Robert C. Martin",
    country: "USA"
  },
  {
    id: 2,
    name: "James Clear",
    country: "USA"
  },
  {
    id: 3,
    name: "Marijn Haverbeke",
    country: "Netherlands"
  },
  {
    id: 4,
    name: "Andrea Hirata",
    country: "Indonesia"
  }
];

const books = [
  {
    id: 1,
    title: "Clean Code",
    authorId: 1,
    year: 2008,
    available: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    authorId: 2,
    year: 2018,
    available: false
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    authorId: 3,
    year: 2019,
    available: true
  },
  {
    id: 4,
    title: "Laskar Pelangi",
    authorId: 4,
    year: 2005,
    available: true
  }
];

// Perhitungan Data
const totalBuku = books.length;
const totalPenulis = authors.length;

const bukuTersedia = books.filter(book => book.available === true).length;
const bukuDipinjam = books.filter(book => book.available === false).length;

const penulisIndonesia = authors.filter(author => author.country === "Indonesia").length;
const penulisLuarIndonesia = authors.filter(author => author.country !== "Indonesia").length;

const years = books.map(book => book.year);
const latestYear = Math.max(...years);
const oldestYear = Math.min(...years);

const bukuTerbaru = books.find(book => book.year === latestYear).title;
const bukuTerlama = books.find(book => book.year === oldestYear).title;

// Output 
console.log("====================");
console.log("");  //baris kosong
console.log("LIBRARY DASHBOARD");
console.log("");
console.log("====================");
console.log("");
console.log(`Total Buku : ${totalBuku}`);
console.log("");
console.log(`Total Penulis : ${totalPenulis}`);
console.log("");
console.log(`Buku Tersedia : ${bukuTersedia}`);
console.log("");
console.log(`Buku Dipinjam : ${bukuDipinjam}`);
console.log("");
console.log(`Penulis Indonesia : ${penulisIndonesia}`);
console.log("");
console.log(`Penulis Luar Indonesia : ${penulisLuarIndonesia}`);
console.log("");
console.log(`Buku Terbaru : ${bukuTerbaru}`);
console.log("");
console.log(`Buku Terlama : ${bukuTerlama}`);
console.log("");
console.log("====================");