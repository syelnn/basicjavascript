const categories = [
  {
    id: 1,
    name: "Programming"
  },
  {
    id: 2,
    name: "Self Improvement"
  },
  {
    id: 3,
    name: "Novel"
  }
];

const books = [
  {
    id: 1,
    title: "Clean Code",
    authorId: 1,
    categoryId: 1,
    year: 2008,
    available: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    authorId: 2,
    categoryId: 2,
    year: 2018,
    available: false
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    authorId: 3,
    categoryId: 1,
    year: 2019,
    available: true
  },
  {
    id: 4,
    title: "Laskar Pelangi",
    authorId: 4,
    categoryId: 3,
    year: 2005,
    available: true
  }
];

// 1. Menampilkan nama kategori setiap buku
console.log("====================");
console.log("");
console.log("KATEGORI SETIAP BUKU");
console.log("");
console.log("====================");
console.log("");

books.forEach(book => {
  const category = categories.find(cat => cat.id === book.categoryId);
  
  console.log(book.title);
  console.log(`Kategori : ${category ? category.name : "Tidak Diketahui"}`);
  console.log("");
  console.log("--------------------");
  console.log("");
});

// 2. Menghitung jumlah buku pada setiap kategori
console.log("====================");
console.log("");
console.log("JUMLAH BUKU PER KATEGORI");
console.log("");
console.log("====================");
console.log("");

categories.forEach(category => {
  const totalBuku = books.filter(book => book.categoryId === category.id).length;
  console.log(`${category.name} : ${totalBuku}`);
  console.log("");
});

// 3. Menampilkan kategori yang memiliki buku terbanyak
let highestCategory = null;
let maxBooks = 0;

categories.forEach(category => {
  const count = books.filter(book => book.categoryId === category.id).length;
  if (count > maxBooks) {
    maxBooks = count;
    highestCategory = category.name;
  }
});

console.log("====================");
console.log("");
console.log("KATEGORI TERBANYAK");
console.log("");
console.log("====================");
console.log("");
console.log(`Kategori Terbanyak : ${highestCategory}`);
console.log("");
console.log("====================");