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

// Menampilkan Detail Buku
books.forEach(book => {
  const author = authors.find(a => a.id === book.authorId);

  let statusBuku;
  if (book.available === true) {
    statusBuku = "Tersedia";
  } else {
    statusBuku = "Dipinjam";
  }

  // Menampilkan output
  console.log(book.title);
  console.log(""); // Baris kosong
  console.log(`Penulis : ${author.name}`);
  console.log("");
  console.log(`Negara : ${author.country}`);
  console.log(""); 
  console.log(`Tahun : ${book.year}`);
  console.log(""); 
  console.log(`Status : ${statusBuku}`);
  console.log(""); 
  console.log("--------------------");
  console.log(""); // Baris kosong jarak antar buku
});


// TASK 7 - STATISTIK PENULIS
// ==========================================
authors.forEach(author => {
  let count = 0;

  // Hint dari dokumen: lakukan pencocokan antara authors.id dan books.authorId
  for (let i = 0; i < books.length; i++) {
    if (books[i].authorId === author.id) {
      count++;
    }
  }

  // Menampilkan output sesuai yang diminta di soal
  console.log(author.name);
  console.log(`Jumlah Buku: ${count}`);
  console.log(""); // Baris kosong pemisah
});