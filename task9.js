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
  },
  {
    id: 5,
    title: "Unknown Book",
    authorId: 99,
    year: 2024,
    available: true
  }
];

// Validasi Relasi Data
books.forEach(book => {
  const author = authors.find(a => a.id === book.authorId);

  console.log(book.title);

  if (author) {
    let statusBuku;
    if (book.available === true) {
      statusBuku = "Tersedia";
    } else {
      statusBuku = "Dipinjam";
    }

    console.log(`Penulis : ${author.name}`);
    console.log(`Negara : ${author.country}`);
    console.log(`Tahun : ${book.year}`);
    console.log(`Status : ${statusBuku}`);
  } else {
    console.log("ERROR");
    console.log("Author tidak ditemukan.");
  }

  console.log("--------------------");
});