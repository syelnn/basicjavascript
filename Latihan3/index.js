const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Data Dummy (In-Memory Data)
let books = [
  { id: 1, title: "Laskar Pelangi", genre: "Novel / Drama", authorId: 1 },
  { id: 2, title: "Bumi Manusia", genre: "Fiksi Sejarah", authorId: 2 }
];

let authors = [
  { id: 1, name: "Andrea Hirata" },
  { id: 2, name: "Pramoedya Ananta Toer" }
];


// Halaman Utama (Tampil Semua Data)
app.get('/', (req, res) => {
  res.render('index', { books, authors });
});

// Tampilan Khusus Buku (http://localhost:3000/books)
app.get('/books', (req, res) => {
  res.render('books-list', { books, authors });
});

// Tampilan Khusus Author (http://localhost:3000/authors)
app.get('/authors', (req, res) => {
  res.render('authors', { authors });
});

// Halaman Form Tambah Buku
app.get('/tambah', (req, res) => {
  res.render('tambah');
});

// Halaman Form Edit Buku
app.get('/edit', (req, res) => {
  const targetId = parseInt(req.query.id);
  const book = books.find(b => b.id === targetId);
  if (!book) return res.status(404).send("Buku tidak ditemukan");

  const author = authors.find(a => a.id === book.authorId);
  const item = { ...book, authorName: author ? author.name : '' };

  res.render('edit', { item });
});



// --- PROSES TAMBAH BUKU ---
app.post('/books', (req, res) => {
  const { title, authorName, genre } = req.body;
  if (!title || !authorName) return res.status(400).send("Judul dan Penulis wajib diisi");

  // Otomatis cari atau buat author baru
  let author = authors.find(a => a.name.toLowerCase() === authorName.trim().toLowerCase());
  if (!author) {
    author = {
      id: authors.length > 0 ? authors[authors.length - 1].id + 1 : 1,
      name: authorName.trim()
    };
    authors.push(author);
  }

  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title: title.trim(),
    genre: genre ? genre.trim() : 'Umum',
    authorId: author.id
  };

  books.push(newBook);
  res.redirect('/'); // Redirect ke Halaman Utama (index.ejs)
});

// --- PROSES EDIT BUKU ---
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, authorName, genre } = req.body;
  const index = books.findIndex(b => b.id === bookId);

  if (index !== -1) {
    let author = authors.find(a => a.name.toLowerCase() === authorName.trim().toLowerCase());
    if (!author) {
      author = {
        id: authors.length > 0 ? authors[authors.length - 1].id + 1 : 1,
        name: authorName.trim()
      };
      authors.push(author);
    }

    books[index] = { 
      id: bookId, 
      title: title.trim(), 
      genre: genre ? genre.trim() : 'Umum', 
      authorId: author.id 
    };
  }
  res.redirect('/'); // Redirect ke Halaman Utama (index.ejs)
});

// --- PROSES HAPUS BUKU ---
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.redirect('/'); // Redirect ke Halaman Utama (index.ejs)
});

// --- PROSES HAPUS AUTHOR ---
app.delete('/authors/:id', (req, res) => {
  const authorId = parseInt(req.params.id);
  authors = authors.filter(a => a.id !== authorId);
  res.redirect('/'); // Redirect ke Halaman Utama (index.ejs)
});

// Server Run
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});